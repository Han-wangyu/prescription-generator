const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    // await page.setViewport({
    //     width: 1200,
    //     height: 800
    // });
    //获取页面Dom对象
    let body = await page.$('#test');
    //调用页面内Dom对象的 screenshot 方法进行截图
    await body.screenshot({
        path: '2.png'
    });
    await browser.close();
})();