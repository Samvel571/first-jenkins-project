import { test } from "@playwright/test";

test("Youtube Search @youtube", async ({ page }) => {
 
  await page.goto("https://www.youtube.com/");

  const searchBox = page.locator("//input[@id='search']");
  
  await searchBox.click();

  await searchBox.fill("Cydeo");

  await searchBox.press("Enter");

  const firstVideoTitle = page.locator("(//a[@id='video-title'])[1]");

  await firstVideoTitle.click();


});
