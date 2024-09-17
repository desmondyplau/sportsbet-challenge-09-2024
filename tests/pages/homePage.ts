import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly firstCard: Locator
    readonly racingButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.racingButton = this.page.getByRole('button', { name: /Racing/ })
        this.firstCard = page.getByTestId('group-1-carousel-1-body-container-cell-1')
    }

    async goto() {
        await this.page.goto('https://www.sportsbet.com.au');
    }

    async verifyAtHomePage() {
        // Assert
        expect(this.racingButton).toBeVisible()
    }

    async selectRacing() {
        // Click the racing tab
        await this.racingButton.click()
        // Assert its highlighted
        await expect(this.page.getByTestId('racing-tab-switch-selected')).toBeVisible()
    }

    async selectFirstRaceCard() {
        // Click on element
        await this.firstCard.click()
    }
    
}