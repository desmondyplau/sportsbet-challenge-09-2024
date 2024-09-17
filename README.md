# sportsbet-challenge-09-2024
## Setup

1. Run `pnpm install` to install dependencies.
2. Run `npx playwright install@latest` to install Playwright.

**To run tests**
- Run `pnpm exec playwright test` to run the Playwright tests.

## 1. Assumptions

1. User is not logged in.
2. Browser height is 800px and width is 420px.

## 2.Problems Encountered
1. Missing the await keyword when calling function from the test file.
2. When using selectors, sometimes I encounter duplicate elements, which made it diffcult to isolate the correctone.


## 3. Problems you may encounter as the test suite grows
1. Lots of pages
2. Current assert bets implementation is not scalable.

## Areas for Improvement
1. Writing out all the elements which could be interacted with.
2. Making the hidden and reshowing elements(Betslip side bar, table when clicking on a bet card) a different components