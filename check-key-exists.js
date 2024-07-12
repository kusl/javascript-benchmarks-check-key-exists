const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('about:blank');

  await page.evaluate(() => {
    const testObj = {
      a: 28, b: 82, c: "hello", d: 983, e: 'lara', o: "key", f: '82828', g: 8,
      h: 45, i: "world", j: 123, k: 'test', l: 999, m: 'data', n: 456, p: 'value',
      q: 789, r: 'example', s: 321, t: 'sample', u: 654, v: 'info', w: 987, x: 'text',
      y: 111, z: 'string', aa: 222, bb: 'char', cc: 333, dd: 'num', ee: 444, ff: 'bool',
      gg: 555, hh: 'array', ii: 666, jj: 'object', kk: 777, ll: 'function', mm: 888, nn: 'method',
      oo: 999, pp: 'property', qq: 101, rr: 'key', ss: 202, tt: 'value', uu: 303, vv: 'entry',
      ww: 404, xx: 'element', yy: 505, zz: 'node', aaa: 606, bbb: 'item', ccc: 707, ddd: 'part',
      eee: 808, fff: 'piece', ggg: 909, hhh: 'segment', iii: 1010, jjj: 'section', kkk: 1111, lll: 'portion',
      mmm: 1212, nnn: 'fraction', ooo: 1313, ppp: 'bit', qqq: 1414, rrr: 'chunk', sss: 1515, ttt: 'slice',
      uuu: 1616, vvv: 'division', www: 1717, xxx: 'share', yyy: 1818, zzz: 'part', aaaa: 1919, bbbb: 'piece',
      cccc: 2020, dddd: 'segment', eeee: 2121, ffff: 'section', gggg: 2222, hhhh: 'portion', iiii: 2323, jjjj: 'fraction',
      kkkk: 2424, llll: 'bit', mmmm: 2525, nnnn: 'chunk', oooo: 2626, pppp: 2627, qqqq: 2727, rrrr: 'division',
      ssss: 2828, tttt: 2929, uuuu: 2930, vvvv: 'part', wwww: 3030, xxxx: 'piece', yyyy: 3131, zzzz: 'segment'
    };

    function test1() {
      let result;
      if (testObj.key !== undefined) {
        result = true;
      }
      return result;
    }

    function test2() {
      let result;
      if ("key" in testObj) {
        result = true;
      }
      return result;
    }

    function test3() {
      let result;
      if (testObj.hasOwnProperty("key")) {
        result = true;
      }
      return result;
    }

    console.log("Test 1:");
    console.time("test1");
    for (let i = 0; i < 100000; i++) {
      test1();
    }
    console.timeEnd("test1");

    console.log("Test 2:");
    console.time("test2");
    for (let i = 0; i < 100000; i++) {
      test2();
    }
    console.timeEnd("test2");

    console.log("Test 3:");
    console.time("test3");
    for (let i = 0; i < 100000; i++) {
      test3();
    }
    console.timeEnd("test3");
  });

  await browser.close();
})();
