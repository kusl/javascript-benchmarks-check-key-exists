const { exec } = require('child_process');

const iterations = 10; // Number of times to run the tests

for (let i = 0; i < iterations; i++) {
    exec('npx playwright test check-key-exists.test.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Iteration ${i + 1}:\n${stdout}`);
    });
}
