
import {test} from '@playwright/test'; // import the test function from playwright

test("Simple Playwright Automation Test @google", async ({page}) => {

    await page.goto("https://www.google.com");

   // await page.waitForTimeout(3000);
   
    let searchBox = page.locator("//textarea[@id='APjFqb']");

    searchBox.fill("Playwright Automation");
    
  //  await page.waitForTimeout(3000);

    await searchBox.press("Enter");

   //  await page.waitForTimeout(3000);
     


} );






test("Simple Playwright Automation Test02 @2youtube2", async ({ page }) => {
  await page.goto("https://www.youtube.com");
});

