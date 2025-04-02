import { expect, browser } from '@wdio/globals'; 
import usefulButton from '../pageobjects/usefulButton'; 
import responseHandler from '../pageobjects/responseHandler'; 
import detailPage from '../pageobjects/detailPage'; 
import incomePage from '../pageobjects/incomePage'; 
import expensesPage from '../pageobjects/expensesPage'; 
import estimationPage from '../pageobjects/estimationPage'; 

describe('Test the response of the page', () => {
    beforeEach(async () => {
        // Mock the initial response before each test
        await responseHandler.setMockResponse(responseHandler.mockResponseData);
        await browser.url('https://www.nab.com.au/personal/home-loans/calculators/borrowing-calculator');
    });

    it('Test the normal flow for loan calculator', async () => {
        await browser.pause(20000); 

        // Step 1: Input details on the DetailPage
        await detailPage.appliesNumberButton(0); 
        await detailPage.selectDropdownOptionForDependant(1); 
        await detailPage.appliesBuyingPurpose(0);
        await browser.pause(20000); 

        // Step 2: Input income details on the IncomePage
        await usefulButton.incomeButton.click(); 
        await incomePage.selectIncomeAmountType(1); 
        await incomePage.inputIncomeAmount('50000'); 
        await incomePage.selectIncomeFrequencyOption(2); 
        await incomePage.chooseAdditionalIncome(1); 
        await browser.pause(20000);

        // Step 3: Input expenses details on the ExpensesPage
        await usefulButton.expensesButton.click(); 
        await expensesPage.existingLiabilities(0); 
        await expensesPage.enterHomeloanAmount('10000'); 
        await expensesPage.selectHomeloanAmountFrequency(2); 
        await expensesPage.enterBillsExpenses('15000'); 
        // Mock the response after entering expenses data
        await responseHandler.setMockResponse(responseHandler.mockResponseData);

        await expensesPage.selectBillsExpensesFrequency(2);
        await expensesPage.selectPayRent(0);
        await expensesPage.enterRentAmount('5000'); 

        // Mock the response after rent amount is entered
        await responseHandler.setMockResponse(responseHandler.mockResponseData);
        
        await browser.pause(20000); // Pause to simulate user waiting time

        // Step 4: Validate final result or estimate outcome
        await estimationPage.validateResult(); 
        expect(await estimationPage.getBorrowingPower()).toBeGreaterThan(0); 
    });
});
