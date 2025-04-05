import { expect, browser } from '@wdio/globals'; 
import detailPage from '../pageobjects/detailPage'; 
import incomePage from '../pageobjects/incomePage'; 
import expensesPage from '../pageobjects/expensesPage';
import usefulButton from '../pageobjects/usefulButton'; 
import responseHandler from '../pageobjects/responseHandler'; 
import estimationPage from '../pageobjects/estimationPage'; 

describe('Verify page response behavior', () => {
    beforeEach(async () => {
        await responseHandler.setMockResponse(responseHandler.mockResponseData);
        await browser.url('https://www.nab.com.au/personal/home-loans/calculators/borrowing-calculator');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it('TC_002', async () => {
        await enterDetailInput();

        // Income input
        await usefulButton.incomeButton.click();
        await enterIncomeDetails();

        // Expenses input
        await usefulButton.expensesButton.click();
        await enterExpensesDetails();

        // Estimation input
        await enterEstimationDetails();
    });
});

async function enterDetailInput() {
    await detailPage.appliesNumberButton(0);
    await detailPage.selectDropdownOptionForDependant(2);
    await detailPage.appliesBuyingPurpose(0);
    await browser.pause(2000); 
}

async function enterIncomeDetails() {
    await incomePage.selectIncomeAmountType(0);
    await incomePage.inputIncomeAmount('10000');
    await incomePage.selectIncomeFrequencyOption(2);
    await incomePage.chooseAdditionalIncome(0);
    await incomePage.inputRentalIncome('2000');
    await incomePage.selectRentalFrequencyOption(2);
    await incomePage.inputBonusIncome('1500');
    await incomePage.selectBonusFrequencyOption(2);
}

async function enterExpensesDetails() {
    await expensesPage.existingLiabilities(1);
    await expensesPage.enterBillsExpenses('2500');
    await expensesPage.selectBillsExpensesFrequency(2);
    await responseHandler.setMockResponse(responseHandler.mockResponseData);
    await expensesPage.selectPayRent(1);
}

async function enterEstimationDetails() {
    await estimationPage.repaymentFrequency(2);
    await estimationPage.loanTerm(20);
    await estimationPage.loanProduct(2);
    await responseHandler.setMockResponse(responseHandler.mockResponseData);
}