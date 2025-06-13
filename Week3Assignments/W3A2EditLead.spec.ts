import { expect, test } from "@playwright/test";

test(`Week3- Assigment 2- Update Lead`, async ({page}) =>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();

await page.waitForTimeout(2000);

await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()="Leads"]`).click();
await page.locator(`//a[text()="Find Leads"]`).click();
//await page.getByRole("textbox",{name : "First name:"}).fill("Priyal");
await page.locator(`//div[@id="x-form-el-ext-gen248"]/input`).fill("Priyal");
await page.locator(`//button[text()="Find Leads"]`).click();
await page.waitForTimeout(2000);
//click the first lead in the list-- first()- return multiple matching rows and first() returns the first matching row
await page.locator(`//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a`).first().click();
await page.locator(`//a[text()="Edit"]`).click();

//Edit the details
await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill(`Test Company`);
await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`5`);
await page.locator(`//input[@name="departmentName"]`).fill(`Computer Science`);
await page.locator(`//textarea[@name="description"]`).fill(`Updating the lead`);
await page.locator(`//input[@value="Update"]`).click();

//Store the edited fields
const companyName = await page.locator(`//span[@id="viewLead_companyName_sp"]`).textContent();
const annualRevenue = await page.locator(`//span[@id="viewLead_annualRevenue_sp"]`).textContent();
const departmentName = await page.locator(`//span[@id="viewLead_departmentName_sp"]`).textContent();
const title = await page.title();

//Print the values to console
console.log(`Company Name: ${companyName}`);
console.log(`Annual Revenue: ${annualRevenue}`);
console.log(`Department Name: ${departmentName}`);
console.log(`Page Title is: ${title}`)

//Verify the edited values
expect(companyName).toContain('Test Company');
expect(annualRevenue).toBe('$5.00');
expect(departmentName).toBe('Computer Science');
await page.waitForTimeout(5000);

})