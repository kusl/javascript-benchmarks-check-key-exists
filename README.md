summary 

| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |
| --- | --- | --- | --- |
| == undefined | 431 | 2200 | 2640 |
| "key" in testObj | 377 | 801 | 756 |
| hasOwnProperty | 228 | 805 | 547 |

| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |
| --- | --- | --- | --- |
| == undefined | 384 | 1680 | 2730 |
| "key" in testObj | 262 | 843 | 678 |
| hasOwnProperty | 239 | 778 | 517 |

| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |
| --- | --- | --- | --- |
| == undefined | 296 | 1780 | 2840 |
| "key" in testObj | 199 | 948 | 572 |
| hasOwnProperty | 213 | 746 | 466 |



[details="detailed results"]
PS C:\Users\kushal\src\myhtml\javascript-benchmarks-check-key-exists> node run-tests-loop.js
Iteration 8:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (460ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (549ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (191ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.2s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (765ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (874ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.9s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (578ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (688ms)

  9 passed (9.1s)

Iteration 10:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (798ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (259ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (207ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.4s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (942ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (743ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.6s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (782ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (701ms)

  9 passed (9.1s)

Iteration 1:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (611ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (445ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (262ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.1s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (712ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (775ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.5s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (739ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (551ms)

  9 passed (9.1s)

Iteration 5:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (304ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (288ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (204ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.3s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (749ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (824ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.7s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (705ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (535ms)

  9 passed (9.2s)

Iteration 6:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (300ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (184ms)
  ✓  3 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.0s)
  ✓  4 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (137ms)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (782ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (782ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (3.0s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (909ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (574ms)

  9 passed (9.2s)

Iteration 2:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (296ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (437ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (145ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.0s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (830ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (731ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.6s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (705ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (616ms)

  9 passed (9.2s)

Iteration 4:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (304ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (300ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (251ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.6s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (746ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (779ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.4s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (729ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (501ms)

  9 passed (9.2s)

Iteration 3:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (489ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (379ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (311ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.2s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (841ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (922ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.7s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (762ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (549ms)

  9 passed (9.2s)

Iteration 7:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (432ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (353ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (271ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.0s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (895ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (732ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.7s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (680ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (407ms)

  9 passed (9.3s)

Iteration 9:

Running 9 tests using 3 workers

  ✓  1 [chromium] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (311ms)
  ✓  2 [chromium] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (580ms)
  ✓  3 [chromium] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (300ms)
  ✓  4 [webkit] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.2s)
  ✓  5 [webkit] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (744ms)
  ✓  6 [webkit] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (886ms)
  ✓  7 [firefox] › check-key-exists.test.js:95:5 › Performance Tests › == undefined (2.3s)
  ✓  8 [firefox] › check-key-exists.test.js:119:5 › Performance Tests › "key" in testObj (967ms)
  ✓  9 [firefox] › check-key-exists.test.js:143:5 › Performance Tests › hasOwnProperty (349ms)

  9 passed (9.3s)

PS C:\Users\kushal\src\myhtml\javascript-benchmarks-check-key-exists> node .\generate-summary.js
| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |
| --- | --- | --- | --- |
| == undefined | 431 | 2200 | 2640 |
| "key" in testObj | 377 | 801 | 756 |
| hasOwnProperty | 228 | 805 | 547 |
PS C:\Users\kushal\src\myhtml\javascript-benchmarks-check-key-exists>
[/details]