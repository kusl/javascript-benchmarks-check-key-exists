const { test, expect } = require('@playwright/test');

const testObj = {
    // your object
};

function testPerformance(fn, iterations = 10000) {
    const times = [];
    // Warm-up iterations
    for (let i = 0; i < 1000; i++) {
        fn();
    }
    // Actual measurement
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        fn();
        const end = performance.now();
        const duration = end - start;
        if (duration > 0) {
            times.push(duration);
        }
    }
    times.sort((a, b) => a - b);
    const min = times[0];
    const max = times[times.length - 1];
    const median = times[Math.floor(times.length / 2)];
    const ninetiethPercentile = times[Math.floor(times.length * 0.9)];
    const ninetyNinthPercentile = times[Math.floor(times.length * 0.99)];
    return { min, max, median, ninetiethPercentile, ninetyNinthPercentile };
}

const test1 = () => {
    let result;
    if (testObj.key !== undefined) {
        result = true;
    }
};

const test2 = () => {
    let result;
    if ("key" in testObj) {
        result = true;
    }
};

const test3 = () => {
    let result;
    if (testObj.hasOwnProperty("key")) {
        result = true;
    }
};

test.describe('Performance Tests', () => {
    test('== undefined', async ({ page }) => {
        await page.evaluate(({ testObj, test1, testPerformance }) => {
            const test1Results = testPerformance(test1);
            console.log(`== undefined - Min: ${test1Results.min} ms, Max: ${test1Results.max} ms, Median: ${test1Results.median} ms, 90th Percentile: ${test1Results.ninetiethPercentile} ms, 99th Percentile: ${test1Results.ninetyNinthPercentile} ms`);
        }, { testObj, test1, testPerformance });
    });

    test('"key" in testObj', async ({ page }) => {
        await page.evaluate(({ testObj, test2, testPerformance }) => {
            const test2Results = testPerformance(test2);
            console.log(`in - Min: ${test2Results.min} ms, Max: ${test2Results.max} ms, Median: ${test2Results.median} ms, 90th Percentile: ${test2Results.ninetiethPercentile} ms, 99th Percentile: ${test2Results.ninetyNinthPercentile} ms`);
        }, { testObj, test2, testPerformance });
    });

    test('hasOwnProperty', async ({ page }) => {
        await page.evaluate(({ testObj, test3, testPerformance }) => {
            const test3Results = testPerformance(test3);
            console.log(`hasOwnProperty - Min: ${test3Results.min} ms, Max: ${test3Results.max} ms, Median: ${test3Results.median} ms, 90th Percentile: ${test3Results.ninetiethPercentile} ms, 99th Percentile: ${test3Results.ninetyNinthPercentile} ms`);
        }, { testObj, test3, testPerformance });
    });
});
