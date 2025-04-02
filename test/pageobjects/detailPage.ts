class detailPage {
    private async clickOptionByLabel(label: string, optionNumber: number): Promise<void> {
        const optionElement = await $(`label[for='${label}-${optionNumber}']`);
        await optionElement.waitForDisplayed({ timeout: 10000 });
        await optionElement.click();
    }

    async appliesNumberButton(optionNumber: number): Promise<void> {
        await this.clickOptionByLabel('numberOfApplies', optionNumber);
    }

    async appliesBuyingPurpose(optionNumber: number): Promise<void> {
        await this.clickOptionByLabel('purposeOfBuying', optionNumber);
    }

    async selectDropdownOptionForDependant(label: number): Promise<void> {
        const dropdownToggleDependant = await $("#dropdown-toggle-button-numberOfDependants");
        await dropdownToggleDependant.waitForDisplayed({ timeout: 10000 });
        await dropdownToggleDependant.click();

        const optionState = await $(`#dropdown-listbox-numberOfDependants-${label}`);
        await optionState.waitForDisplayed({ timeout: 10000 });
        await optionState.click();
    }
}

export default new detailPage();
