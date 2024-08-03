import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.locator('span').filter({ hasText: 'R$ 20,00' })).toBeVisible()
  await expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();


})



test('display month orders amount metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
  
    await expect(page.getByText("-1% em relação ao mês passado")).toBeVisible();
    await expect(page.getByText('4', { exact: true })).toBeVisible()
  
  })
  
  
  test('display month canceled orders amount metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
  
    await expect(page.getByText("+13% em relação a ontem")).toBeVisible();
    await expect(page.getByText('10', { exact: true })).toBeVisible()
    
  })
  

  test('display month revenue metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
  
    await expect(page.getByText('+11% em relação ao mês passado')).toBeVisible();
    await expect(page.getByText('8', { exact: true })).toBeVisible()
  
  
  })
  
  
