import { expect, test } from "@playwright/test";

test(`Week3- Assigment 1- Create lead`, async ({page}) =>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`);
await page.locator(`//input[@id='password']`).fill(`crmsfa`);
await page.locator(`//input[@class='decorativeSubmit']`).click();

await page.waitForTimeout(2000);

await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.locator(`//a[text()= "Create Lead"]`).click();

await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Test Company`);
await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Priyal`);
await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`Patil`);
await page.locator(`input[id="createLeadForm_personalTitle"]`).fill(`Hi`);
await page.locator(`//input[@name="generalProfTitle"]`).fill(`Developer`);
await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`2`);
await page.locator(`//input[@name="departmentName"]`).fill(`Information Technology`);
await page.locator(`(//input[@name="primaryPhoneNumber"])[4]`).fill(`5467738999`);

await page.locator(`//input[@name="submitButton"]`).scrollIntoViewIfNeeded();
await page.locator(`//input[@name="submitButton"]`).click();

//Verify the company name, first name, last name and the status
const companyName = await page.locator(`//span[@id="viewLead_companyName_sp"]`).textContent();
const firstName = await page.locator(`//span[@id="viewLead_firstName_sp"]`).textContent();
const lastName = await page.locator(`//span[@id="viewLead_lastName_sp"]`).textContent();
const title = await page.title();
//  Not able to find the status field in the UI, so skipping the status verification

  console.log(`Company: ${companyName}`);
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Page Title is: ${title}`)

//Verify the values using expect

expect(companyName).toContain('Test Company');
expect(firstName).toBe('Priyal');
expect(lastName).toBe('Patil');


await page.waitForTimeout(5000);

})