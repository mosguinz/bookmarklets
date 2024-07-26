javascript: (
    /** https://example.com */
    async () => {
        let offerButtons = Array.from(document.getElementsByClassName("xxxxx"));
        for (let button of offerButtons) {
            console.log("Clicking offer button");
            button.click()
            await new Promise(r => setTimeout(r, 500));
        }
    }
)();