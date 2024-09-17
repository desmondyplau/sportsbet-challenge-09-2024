import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { BettingPage } from './pages/bettingPage';


test('Automation Test 1', async ({ page }) => {
    await page.setViewportSize({ width: 420, height: 800 });
    const homePage = new HomePage(page);
    // Arrive a home page
    await homePage.goto();
    await homePage.verifyAtHomePage();
    // Select racing tab
    await homePage.selectRacing();
    // Click first card
    await homePage.selectFirstRaceCard();

    // Assert navigation happened correctly
    await page.waitForSelector('[data-automation-id="racecard-frame"]')
    await expect(page.getByTestId('racecard-frame')).toBeVisible()

    const bettingPage = new BettingPage(page);

    await bettingPage.clickFirstBet();

    await bettingPage.closeBetSlip();

    await bettingPage.clickSecondBet();

    await bettingPage.openBetSlip();

    await bettingPage.assertBets()
})

