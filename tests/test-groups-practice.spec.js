import { test, expect } from "@playwright/test";

test.describe("Test Group @group2", () => {

    //create beforeEach function that will navigate to the specified URL before each test
 test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  //create afterEach
  test.afterEach(async ({ page }) => {
   // await page.waitForTimeout(3000);

  });

  test("Get the title of the page", async ({ page }) => {
    let actualTitle = await page.title();
    let expectedTitle = "Practice";
    expect(actualTitle).toEqual(expectedTitle);

  });

  test("Get the url of the page", async ({ page }) => {
    let actualUrl = page.url();
    expect(actualUrl).toContain("cydeo");
  });

  test("Click the A/B testing link @group2-3", async ({ page }) => {
    //let testingLinkAB = page.locator("text=A/B Testing");
    //let abTestingLink = page.getByText("A/B Testing");
    let abTestingLink = page.locator("text=A/B Testing");
    //  expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
    await abTestingLink.click();

  });

  
});
