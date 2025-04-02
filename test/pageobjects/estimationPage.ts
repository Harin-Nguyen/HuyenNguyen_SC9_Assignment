class estimationPage {
    private async selectDropdownOption(dropdownId: string, optionNumber: number): Promise<void> {
        const dropdownToggle = await $(`#dropdown-toggle-button-${dropdownId}`);
        await dropdownToggle.waitForDisplayed({ timeout: 10000 });
        await dropdownToggle.click();

        const optionState = await $(`#dropdown-listbox-${dropdownId}-${optionNumber}`);
        await optionState.waitForDisplayed({ timeout: 10000 });
        await optionState.click();
    }

    async repaymentFrequency(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('repaymentFrequency', optionNumber);
    }

    async loanTerm(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('loanTerm', optionNumber);
    }

    async loanProduct(optionNumber: number): Promise<void> {
        await this.selectDropdownOption('loanProduct', optionNumber);
    }

    // Method to validate the result
    async validateResult(): Promise<void> {
        const resultElement = await $('#result');
        await resultElement.waitForDisplayed({ timeout: 10000 });
        // Implement validation logic, e.g., checking if result is correct or as expected
    }

    // Method to get borrowing power (assuming it's a numeric value displayed on the page)
    async getBorrowingPower(): Promise<number> {
        const borrowingPowerElement = await $('#borrowingAmount');
        await borrowingPowerElement.waitForDisplayed({ timeout: 10000 });
        const borrowingPower = await borrowingPowerElement.getText();
        return parseFloat(borrowingPower); // Assuming the value is a number
    }
}

export default new estimationPage();
