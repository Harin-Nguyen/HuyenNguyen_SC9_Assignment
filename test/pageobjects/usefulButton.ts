class usefulButton{
    // Hàm lấy phần tử bằng cách sử dụng id suffix
    private getButtonByIdSuffix(suffix: string): ChainablePromiseElement {
        return $(this.getButtonSelector(suffix));
    }

    // Hàm tạo chuỗi selector cho button
    private getButtonSelector(suffix: string): string {
        return `[id^="button-"][id$="-${suffix}"]`;
    }

    // Getter cho các nút cụ thể
    get detailsButton(): WebdriverIO.Element {
        const button = this.getButtonByIdSuffix('0');
        button.waitForExist({ timeout: 5000 }); // Đảm bảo phần tử tồn tại trước khi tiếp tục
        return button;
    }

    get incomeButton(): WebdriverIO.Element {
        const button = this.getButtonByIdSuffix('1');
        button.waitForExist({ timeout: 5000 });
        return button;
    }

    get expensesButton(): WebdriverIO.Element {
        const button = this.getButtonByIdSuffix('2');
        button.waitForExist({ timeout: 5000 });
        return button;
    }
}

export default new usefulButton();
