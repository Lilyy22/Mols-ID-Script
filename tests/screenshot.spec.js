import { test, expect } from '@playwright/test';

const now = new Date();
const timestamp = now.toISOString().replace(/[:.]/g, '-');

test('test', async ({ page }) => {
  await page.goto('https://erp.mols.gov.et/Identity/Account/Login?ReturnUrl=%2FEmployees%2FCreateId%2F2164');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('abrhambelete.haile@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Error1@1');
  await page.getByRole('button', { name: 'Login' }).click();

  const selectortwo = '.back-face';
  await page.waitForSelector(selectortwo, { timeout: 1000000 });

  // Take a screenshot of the element
  await page.screenshot({
    path: `Photo/back-2164-${timestamp}.png`,
    clip: await page.locator(selectortwo).boundingBox(),
  });

  const selector = '#front-face';
  await page.waitForSelector(selector, { timeout: 1000000 });

  // Take a screenshot of the element
  await page.screenshot({
    path: `Photo/front-2164-${timestamp}.png`,
    clip: await page.locator(selector).boundingBox(),
  });

});

