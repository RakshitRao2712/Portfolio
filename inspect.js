import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  // Get positions of elements
  const layout = await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Changelog'));
    const circle = document.querySelector('.rounded-full.bg-white.dark\\:bg-black');
    const line = document.querySelector('.w-\\[2px\\]');
    const images = document.querySelectorAll('img[alt="startup template"]');
    
    return {
      heading: heading ? heading.getBoundingClientRect() : null,
      circle: circle ? circle.getBoundingClientRect() : null,
      line: line ? line.getBoundingClientRect() : null,
      image1: images[0] ? images[0].getBoundingClientRect() : null,
    };
  });
  
  console.log(JSON.stringify(layout, null, 2));
  await browser.close();
})();
