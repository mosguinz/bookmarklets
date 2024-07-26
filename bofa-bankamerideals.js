javascript: (
    /** https://secure.bankofamerica.com/customer-deals/ */
    async () => {
        let offerButtons = Array.from(document.getElementsByClassName("add-deal"));
        for (let button of offerButtons) {
            console.log("Clicking offer button");
            button.click()
        }
    }
)();