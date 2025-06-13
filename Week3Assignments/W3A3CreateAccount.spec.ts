import { expect, test } from "@playwright/test";

test(`Week3- Assigment 3- Create Account`, async ({page}) =>{

await page.goto(`https://login.salesforce.com/`);

//Enter username using getByLabel
    await page.getByLabel("Username").fill("vidyar@testleaf.com");
    await page.getByLabel("Password").fill("Sales@123");
    await page.getByRole("button", {name : "Log In"}).click();
    
    //Verify the title and url of the page using appropriate assertions
/*     await page.waitForLoadState("domcontentloaded"); //wait for the dom element --> attribute/ all styles.js
    await page.waitForLoadState('load'); */
    await page.waitForTimeout(5000);
    const title = await page.title();
    const url = await page.url();
    console.log(`Page Title is: ${title}`);
    console.log(`Page URL is: ${url}`);

    //Verify the title and url using expect
    expect(title).toContain("Home | Salesforce");
    expect(url).toBe("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");



    //Click App Launcher using the class locator-   await page.getByTitle("App Launcher", {exact: true}).click(); 
    await page.locator(`.slds-icon-waffle`).click();
    await page.getByTitle("App Launcher", {exact: true}).click(); 

    //Click View All using getByText
    await page.getByText("View All",{exact:true}).click();

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    await page.waitForLoadState('load');

    //Click Service using index based XPath-- await page.locator(`//span[text()='Service']/ancestor::a[1]`).click();
    await page.locator(`(//div[@class="slds-app-launcher__tile-body slds-truncate"])[1]`).click();

    //Click Accounts using attribute based CSS selector
    await page.locator(`[title="Accounts"]`).click();

    //Click New using getByRole
    await page.getByRole("button", {name : "New"}).click();

    //Enter Account name using attribute based CSS selecto
    await page.locator(`input[name="Name"]`).fill("Test Account2");

    //Click Save button using XPath
    await page.locator(`button[name="SaveEdit"]`).click();

    //Verify the toast message displayed
    const toastMessage = await page.locator(`.toastMessage`).textContent();
    console.log(`Toast Message: ${toastMessage}`);  
    expect(toastMessage).toContain(`Account \"Test Account2\" was created.`)    

   
    await page.waitForTimeout(5000);




})