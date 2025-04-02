class incomePage {
    private async clickIncomeOption(selector: string): Promise<void> {
        const option = await $(selector);
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    }

    private async inputIncomeValue(selector: string, value: string): Promise<void> {
        const inputField = await $(selector);
        await inputField.waitForDisplayed({ timeout: 10000 });
        await inputField.click();
        await inputField.setValue(value);
    }

    private async selectIncomeDropdownOption(dropdownSelector: string, optionSelector: string): Promise<void> {
        const dropdown = await $(dropdownSelector);
        await dropdown.waitForDisplayed({ timeout: 10000 });
        await dropdown.click();

        const option = await $(optionSelector);
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    }

    async selectIncomeAmountType(optionNumber: number): Promise<void> {
        await this.clickIncomeOption(`label[for='incomeAmountType-${optionNumber}']`);
    }

    async inputIncomeAmount(value: string): Promise<void> {
        await this.inputIncomeValue('#incomeAmount', value);
    }

    async selectIncomeFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-incomeFrequency',
            `#dropdown-listbox-incomeFrequency-${optionNumber}`
        );
    }

    async chooseAdditionalIncome(optionNumber: number): Promise<void> {
        await this.clickIncomeOption(`label[for='hasAdditionalIncome-${optionNumber}']`);
    }

    async inputRentalIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#rentalIncome', value);
    }

    async selectRentalFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-rentalFrequency',
            `#dropdown-listbox-rentalFrequency-${optionNumber}`
        );
    }

    async inputBonusIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#bonusIncome', value);
    }

    async selectBonusFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-bonusFrequency',
            `#dropdown-listbox-bonusFrequency-${optionNumber}`
        );
    }

    async inputOtherIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#otherIncome', value);
    }

    async selectOtherIncomeFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-otherIncomeFrequency',
            `#dropdown-listbox-otherIncomeFrequency-${optionNumber}`
        );
    }

    // Second applicant methods (renamed similarly)
    async selectSecondApplicantIncomeAmountType(optionNumber: number): Promise<void> {
        await this.clickIncomeOption(`label[for='secondApplicantIncomeAmountType-${optionNumber}']`);
    }

    async inputSecondApplicantIncomeAmount(value: string): Promise<void> {
        await this.inputIncomeValue('#secondApplicantIncomeAmount', value);
    }

    async selectSecondApplicantIncomeFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-secondApplicantIncomeFrequency',
            `#dropdown-listbox-secondApplicantIncomeFrequency-${optionNumber}`
        );
    }

    async chooseSecondApplicantAdditionalIncome(optionNumber: number): Promise<void> {
        await this.clickIncomeOption(`label[for='secondApplicantHasAdditionalIncome-${optionNumber}']`);
    }

    async inputSecondApplicantRentalIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#secondApplicantRentalIncome', value);
    }

    async selectSecondApplicantRentalFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-secondApplicantRentalFrequency',
            `#dropdown-listbox-secondApplicantRentalFrequency-${optionNumber}`
        );
    }

    async inputSecondApplicantBonusIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#secondApplicantBonusIncome', value);
    }

    async selectSecondApplicantBonusFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-secondApplicantBonusFrequency',
            `#dropdown-listbox-secondApplicantBonusFrequency-${optionNumber}`
        );
    }

    async inputSecondApplicantOtherIncome(value: string): Promise<void> {
        await this.inputIncomeValue('#secondApplicantOtherIncome', value);
    }

    async selectSecondApplicantOtherIncomeFrequencyOption(optionNumber: number): Promise<void> {
        await this.selectIncomeDropdownOption(
            '#dropdown-toggle-button-secondApplicantOtherIncomeFrequency',
            `#dropdown-listbox-secondApplicantOtherIncomeFrequency-${optionNumber}`
        );
    }
}

export default new incomePage();


