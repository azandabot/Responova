import commander from 'commander';
import puppeteer from 'puppeteer';

commander
  .option('--url <url>', 'The URL of the website to test')
  .option('--devices <devices>', 'Devices or screen sizes to test (comma-separated)')
  .option('--output-dir <outputDir>', 'Output directory for saving screenshots')
  .parse(process.argv);

const { url, devices, outputDir } = commander;


if (!url || !devices || !outputDir) {
  console.error('Error: You must provide --url, --devices, and --output-dir options.');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const selectedDevices = devices.split(',');

  for (const device of selectedDevices) {
    await page.goto(url);
    await page.emulate(puppeteer.devices[device]);
    await page.screenshot({ path: `${outputDir}/${device}.png` });
  }

  await browser.close();
})();
