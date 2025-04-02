class expensesPage {
    private async clickOptionByLabel(label: string, optionNumber: number): Promise<void> {
        const optionElement = await $(`label[for='${label}-${optionNumber}']`);
        await optionElement.waitForDisplayed({ timeout: 10000 });
        await optionElement.click();
    }

    private async enterInputValue(selector: string, value: string): Promise<void> {
        const inputField = await $(selector);
        await inputField.waitForDisplayed({ timeout: 10000 });
        await inputField.click();
        await inputField.setValue(value);
    }

    private async selectDropdownOption(dropdownId: string, optionNumber: number): Promise<void> {
        const dropdownToggle = await $(`#dropdown-toggle-button-${dropdownId}`);
        await dropdownToggle.waitForDisplayed({ timeout: 10000 });
        await dropdownToggle.click();

        const optionState = await $(`#dropdown-listbox-${dropdownId}-${optionNumber}`);
        await optionState.waitForDisplayed({ timeout: 10000 });
        await optionState.click();
    }

    async existingLiabilities(optionNumber: number): Promise<void> {
        await this.clickOptionByLabel('hasExistingLiabilities', optionNumber);
    }

    async enterHomeloanAmount(value: string): Promise<void> {
        await this.enterInputValue('#homeloanAmount', value);
    }

    async selectHomeloanAmountFrequency(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('homeloanAmountFrequency', optionNumber);
    }

    async enterPersonalLoanAmount(value: string): Promise<void> {
        await this.enterInputValue('#personalLoanAmount', value);
    }

    async selectPersonalLoanAmountFrequency(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('personalLoanAmountFrequency', optionNumber);
    }

    async enterCreditCardLimit(value: string): Promise<void> {
        await this.enterInputValue('#creditCardLimit', value);
    }

    async enterBillsExpenses(value: string): Promise<void> {
        await this.enterInputValue('#billsExpenses', value);
    }

    async selectBillsExpensesFrequency(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('billsExpensesFrequency', optionNumber);
    }

    async selectPayRent(optionNumber: number): Promise<void> {
        await this.clickOptionByLabel('willPayRent', optionNumber);
    }

    async enterRentAmount(value: string): Promise<void> {
        await this.enterInputValue('#rentAmount', value);
    }

    async selectRentFrequency(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('rentFrequency', optionNumber);
    }
}

export default new expensesPage();
