class responseHandler {
    async setMockResponse(responseData: Record<string, any>): Promise<void> {
        try {
            const mockGraphQL = await browser.mock(
                "https://customer.api.nab.com.au/v2/cohomelend/borrowing-calc-bff",
                {
                    method: "post"
                }
            );

            if (typeof responseData !== 'object' || responseData === null) {
                throw new Error("Invalid responseData format");
            }

            mockGraphQL.respond(responseData, { statusCode: 200 });
        } catch (error) {
            console.error("Error in setting mock response:", error);
        }
    }

    get mockResponseData() {
        return {
            data: {
                getHLBorrowingPower: {
                    isServiceable: true,
                    borrowingAmount: 59039,
                    productRates: [
                        {
                            productId: null,
                            productCode: "LHOM",
                            productSubCode: "LHBH",
                            productName: "NAB Base Variable Rate Home Loan",
                            productType: "Base P&I",
                            productPricingType: "VARIABLE_RATE",
                            repaymentType: "PRINCIPAL_AND_INTEREST",
                            originationLVR: "0+",
                            interestRate: 6.19,
                            comparisonRate: 6.23,
                            loanPurposeCode: "OWNER_OCCUPIED",
                            __typename: "ProductRate"
                        }
                    ],
                    repaymentDetails: {
                        repaymentAmount: 381,
                        product: {
                            productName: "NAB Base Variable Rate Home Loan",
                            productSubCode: "LHBH",
                            rate: 6.71,
                            originationLVR: "0+",
                            productPricingType: "VARIABLE_RATE",
                            __typename: "RepaymentDetailsProductObject"
                        },
                        __typename: "RepaymentDetailsObject"
                    },
                    __typename: "BorrowingPowerObject"
                }
            }
        };
    }
}

export default new responseHandler(); // Default export
