import { test } from "@playwright/test";

test.describe("Test Group @group1", async () => {

    test.beforeAll(async()  => {
        console.log("Before All tests are executed successfully");
    });

    test.afterAll(async()  => {
        console.log("After All tests are executed successfully");
    });
    test.afterEach(async () => {
        console.log("After Each test is executed successfully");
    });

    test.beforeEach(async () => {
        console.log("Before Each test is executed successfully");
    });

   test('Test1', async ({ page }) => {
   console.log("Test01 is executed successfully ");
   });

   test("Test2", async ({ page }) => {
    console.log("Test02 is executed successfully  ");
   });

   test("Test3", async ({ page }) => {
    console.log("Test03 is executed successfully  ");
   });
 

});