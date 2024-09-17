import { expect, Locator, Page } from "@playwright/test";

export class BettingPage {
    readonly page: Page;
    readonly raceFrame: Locator;
    readonly betsName: Locator
    readonly betsAmount: Locator
    readonly betSlipHideButton: Locator;
    readonly betSlipButton: Locator;
    readonly betSlipTitles: Locator;
    readonly betSlipOdds: Locator;

    constructor(page: Page) {
        // Locator declaration
        this.page = page;
        this.raceFrame = this.page.getByTestId('racecard-frame')
        this.betsName = this.page.getByTestId('racecard-outcome-name')
        this.betsAmount = this.page.getByTestId('racecard-outcome-0-L-price')
        this.betSlipHideButton = this.page.getByTestId('betslip-header-hide');
        this.betSlipButton = this.page.getByTestId('header-betslip-touchable');
        this.betSlipTitles = this.page.getByTestId('betslip-bet-title')
        this.betSlipOdds = this.page.getByTestId('betslip-bet-odds')
    }

    async verifyBettingPage() {
        await expect(this.page.getByTestId('racecard-frame')).toBeVisible()
    }

    async clickFirstBet() {
        // Get first bet
        const bet1 = this.betsAmount.nth(0)
        // Get inner button
        await bet1.locator('button').click({ timeout: 10 * 1000 })
    }

    async closeBetSlip() {
        // close bet slip
        await this.betSlipHideButton.click();
    }

    async clickSecondBet() {
        // Get Second bet
        const bet2 = this.betsAmount.nth(1)
        // Get inner button
        await bet2.locator('button').click({ timeout: 10 * 1000 })
    }

    async openBetSlip() {
        await this.betSlipButton.click();
    }

    async assertBets() {
        // Assign values to ones from bet table
        const name1 = await this.betsName.nth(0).textContent()
        const name2 = await this.betsName.nth(1).textContent()
        const betAmount1 = await this.betsAmount.nth(0).textContent()
        const betAmount2 = await this.betsAmount.nth(1).textContent()

        //Assigne values to ones from bet slip
        const slipname1 = await this.betSlipTitles.nth(0).textContent()
        const slipname2 = await this.betSlipTitles.nth(1).textContent()
        const slipOdds1 = await this.betSlipOdds.nth(0).textContent()
        const slipOdds2 = await this.betSlipOdds.nth(1).textContent()

        // Inconsistent Empty space character
        expect(name1?.substring(0, name1.length - 4)).toBe(slipname1?.substring(0, slipname1.length - 4))
        expect(name2?.substring(0, name2.length - 4)).toBe(slipname2?.substring(0, slipname2.length - 4))

        expect(betAmount1?.replace('Fav', '')).toBe(slipOdds1)
        expect(betAmount2?.replace('Fav', '')).toBe(slipOdds2)
    }

}
