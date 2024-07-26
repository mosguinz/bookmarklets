javascript: (
    /** https://global.americanexpress.com/offers/eligible */
    async () => {
        let offerButtons = Array.from(document.getElementsByClassName("offer-cta")).filter(btn => btn.title == "Add to Card");
        for (let button of offerButtons) {
            console.log("Clicking offer button");
            button.click()
            await new Promise(r => setTimeout(r, 500));
        }
    }
)();