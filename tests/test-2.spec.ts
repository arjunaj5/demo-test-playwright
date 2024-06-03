import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging1.fyle.tech/app/accounts/#/signin');

  await page.getByPlaceholder('Enter your business email here').click();
  await page.getByPlaceholder('Enter your business email here').fill('admin1@fylefortestfeatureflag.in');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter your password here').fill('KalaChashma');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Settings', { exact: true }).locator('#btn-support').click();
  await page.getByLabel('Profile').click();
 

  await expect(page.locator('header-ce').getByText('Profile', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Opt in' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Location' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Change Password' })).toBeVisible();
});