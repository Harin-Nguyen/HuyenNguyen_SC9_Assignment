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

    it('TC_003', async () => {
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
    await detailPage.appliesNumberButton(1);
    await detailPage.selectDropdownOptionForDependant(0);
    await detailPage.appliesBuyingPurpose(0);
    await browser.pause(2000); 
}

async function enterIncomeDetails() {
    await incomePage.selectIncomeAmountType(0);
    await incomePage.inputIncomeAmount('8000');
    await incomePage.selectIncomeFrequencyOption(2);
    await incomePage.chooseAdditionalIncome(0);
    await incomePage.inputRentalIncome('2500');
    await incomePage.selectRentalFrequencyOption(2);
    await incomePage.inputBonusIncome('3500');
    await incomePage.selectBonusFrequencyOption(2);

    await incomePage.selectSecondApplicantIncomeAmountType(0);
    await incomePage.inputSecondApplicantIncomeAmount('7500');
    await incomePage.selectSecondApplicantIncomeFrequencyOption(2);
    await incomePage.chooseSecondApplicantAdditionalIncome(1);
    await incomePage.inputSecondApplicantBonusIncome('1200');
    await incomePage.selectSecondApplicantBonusFrequencyOption(2);
    await incomePage.inputSecondApplicantOtherIncome('500');
    await incomePage.selectSecondApplicantOtherIncomeFrequencyOption(2);

}

async function enterExpensesDetails() {
    await expensesPage.existingLiabilities(0);
    await expensesPage.enterHomeloanAmount('2000');
    await expensesPage.selectHomeloanAmountFrequency(2);
    await expensesPage.enterPersonalLoanAmount('1500');
    await expensesPage.selectPersonalLoanAmountFrequency(2);
    await expensesPage.enterCreditCardLimit('1000');
    await expensesPage.enterBillsExpenses('5000');
    await expensesPage.selectBillsExpensesFrequency(2);
    await responseHandler.setMockResponse(responseHandler.mockResponseData);
    await expensesPage.selectPayRent(0);
    await expensesPage.enterRentAmount('2200');
    await expensesPage.selectRentFrequency(2);
}

async function enterEstimationDetails() {
    await estimationPage.repaymentFrequency(2);
    await estimationPage.loanTerm(10);
    await estimationPage.loanProduct(4);
    await responseHandler.setMockResponse(responseHandler.mockResponseData);
}