can you please analyze this data and generate a plain text markdown summary table that is easy to copy paste? 

  ✓  1 [chromium] == undefined (1.6s)
  ✓  2 [webkit] == undefined (2.4s)
  ✓  3 [chromium] "key" in testObj (842ms)
  ✓  4 [chromium] hasOwnProperty (167ms)
  ✓  5 [webkit] "key" in testObj (958ms)
  ✓  6 [webkit] hasOwnProperty (601ms)
  ✓  7 [firefox] == undefined (2.6s)
  ✓  8 [firefox] "key" in testObj (518ms)
  ✓  9 [firefox] hasOwnProperty (518ms)

  ✓  1 [chromium] == undefined (276ms)
  ✓  2 [chromium] "key" in testObj (1.1s)
  ✓  3 [chromium] hasOwnProperty (159ms)
  ✓  4 [webkit] == undefined (2.3s)
  ✓  5 [webkit] "key" in testObj (902ms)
  ✓  6 [webkit] hasOwnProperty (635ms)
  ✓  7 [firefox] == undefined (2.9s)
  ✓  8 [firefox] "key" in testObj (448ms)
  ✓  9 [firefox] hasOwnProperty (386ms)

  ✓  1 [chromium] == undefined (354ms)
  ✓  2 [chromium] "key" in testObj (186ms)
  ✓  3 [chromium] hasOwnProperty (265ms)
  ✓  4 [webkit] == undefined (2.3s)
  ✓  5 [webkit] "key" in testObj (712ms)
  ✓  6 [webkit] hasOwnProperty (491ms)
  ✓  7 [firefox] == undefined (3.3s)
  ✓  8 [firefox] "key" in testObj (721ms)
  ✓  9 [firefox] hasOwnProperty (468ms)

  ✓  1 [chromium] == undefined (401ms)
  ✓  2 [chromium] "key" in testObj (236ms)
  ✓  3 [chromium] hasOwnProperty (248ms)
  ✓  4 [webkit] == undefined (2.5s)
  ✓  5 [webkit] "key" in testObj (839ms)
  ✓  6 [webkit] hasOwnProperty (565ms)
  ✓  7 [firefox] == undefined (2.9s)
  ✓  8 [firefox] "key" in testObj (627ms)
  ✓  9 [firefox] hasOwnProperty (583ms)

  ✓  1 [chromium] == undefined (587ms)
  ✓  2 [chromium] "key" in testObj (357ms)
  ✓  3 [chromium] hasOwnProperty (285ms)
  ✓  4 [webkit] == undefined (2.2s)
  ✓  5 [webkit] "key" in testObj (776ms)
  ✓  6 [webkit] hasOwnProperty (660ms)
  ✓  7 [firefox] == undefined (3.1s)
  ✓  8 [firefox] "key" in testObj (636ms)
  ✓  9 [firefox] hasOwnProperty (425ms)

  ✓  1 [chromium] == undefined (535ms)
  ✓  2 [chromium] "key" in testObj (242ms)
  ✓  3 [chromium] hasOwnProperty (166ms)
  ✓  4 [webkit] == undefined (2.0s)
  ✓  5 [webkit] "key" in testObj (1.2s)
  ✓  6 [webkit] hasOwnProperty (751ms)
  ✓  7 [firefox] == undefined (3.7s)
  ✓  8 [firefox] "key" in testObj (658ms)
  ✓  9 [firefox] hasOwnProperty (475ms)

  ✓  1 [chromium] == undefined (631ms)
  ✓  2 [chromium] "key" in testObj (409ms)
  ✓  3 [chromium] hasOwnProperty (274ms)
  ✓  4 [webkit] == undefined (2.4s)
  ✓  5 [webkit] "key" in testObj (920ms)
  ✓  6 [webkit] hasOwnProperty (604ms)
  ✓  7 [firefox] == undefined (2.3s)
  ✓  8 [firefox] "key" in testObj (575ms)
  ✓  9 [firefox] hasOwnProperty (513ms)

  ✓  1 [webkit] == undefined (1.7s)
  ✓  2 [chromium] == undefined (394ms)
  ✓  3 [chromium] "key" in testObj (286ms)
  ✓  4 [chromium] hasOwnProperty (383ms)
  ✓  5 [webkit] "key" in testObj (1.4s)
  ✓  6 [webkit] hasOwnProperty (812ms)
  ✓  7 [firefox] == undefined (3.7s)
  ✓  8 [firefox] "key" in testObj (665ms)
  ✓  9 [firefox] hasOwnProperty (486ms)

  ✓  1 [chromium] == undefined (333ms)
  ✓  2 [chromium] "key" in testObj (265ms)
  ✓  3 [chromium] hasOwnProperty (199ms)
  ✓  4 [webkit] == undefined (2.1s)
  ✓  5 [webkit] "key" in testObj (1.2s)
  ✓  6 [webkit] hasOwnProperty (789ms)
  ✓  7 [firefox] == undefined (3.5s)
  ✓  8 [firefox] "key" in testObj (619ms)
  ✓  9 [firefox] hasOwnProperty (366ms)

  ✓  1 [chromium] == undefined (957ms)
  ✓  2 [chromium] "key" in testObj (254ms)
  ✓  3 [chromium] hasOwnProperty (203ms)
  ✓  4 [webkit] == undefined (2.7s)
  ✓  5 [webkit] "key" in testObj (844ms)
  ✓  6 [webkit] hasOwnProperty (569ms)
  ✓  7 [firefox] == undefined (4.1s)
  ✓  8 [firefox] "key" in testObj (284ms)
  ✓  9 [firefox] hasOwnProperty (324ms)


Here is a plain text markdown summary table:

| Browser | Operation | Average Time (ms) |
| --- | --- | --- |
| Chromium | == undefined | 444 |
| Chromium | "key" in testObj | 284 |
| Chromium | hasOwnProperty | 234 |
| WebKit | == undefined | 2.3s |
| WebKit | "key" in testObj | 944 |
| WebKit | hasOwnProperty | 634 |
| Firefox | == undefined | 3.1s |
| Firefox | "key" in testObj | 593 |
| Firefox | hasOwnProperty | 473 |

Here is the compressed table:

| Operation | Chromium (ms) | WebKit (ms) | Firefox (ms) |
| --- | --- | --- | --- |
| == undefined | 444 | 2300 | 3100 |
| "key" in testObj | 284 | 944 | 593 |
| hasOwnProperty | 234 | 634 | 473 |

Note: The average times are calculated by taking the average of the times for each operation and browser across all the test runs.