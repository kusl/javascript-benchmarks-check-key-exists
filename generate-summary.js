const text = `...`; // Your input text here

const operations = ["== undefined", "\"key\" in testObj", "hasOwnProperty"];
const browsers = ["chromium", "webkit", "firefox"];
const results = {};

// Initialize results object
operations.forEach(op => {
  results[op] = {};
  browsers.forEach(browser => {
    results[op][browser] = [];
  });
});

// Extract data using regex
const regex = /✓\s+\d+\s+\[(\w+)\]\s+›\s+check-key-exists\.test\.js:\d+:\d+\s+›\s+Performance Tests\s+›\s+(.+?)\s+\((\d+(\.\d+)?(ms|s))\)/g;
let match;
while ((match = regex.exec(text)) !== null) {
  const browser = match[1];
  const operation = match[2];
  let time = match[3];
  if (time.endsWith('ms')) {
    time = parseFloat(time);
  } else if (time.endsWith('s')) {
    time = parseFloat(time) * 1000;
  }
  if (results[operation] && results[operation][browser]) {
    results[operation][browser].push(time);
  }
}

// Calculate average times
const averageTimes = {};
operations.forEach(op => {
  averageTimes[op] = {};
  browsers.forEach(browser => {
    const times = results[op][browser];
    const average = times.reduce((a, b) => a + b, 0) / times.length;
    averageTimes[op][browser] = Math.round(average);
  });
});

// Generate table
console.log("| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |");
console.log("| --- | --- | --- | --- |");
operations.forEach(op => {
  console.log(`| ${op} | ${averageTimes[op].chromium} | ${averageTimes[op].webkit} | ${averageTimes[op].firefox} |`);
});
