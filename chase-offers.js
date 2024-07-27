javascript: (
    /** https://secure.chase.com/web/auth/dashboard#/dashboard/merchantOffers/offer-hub */
    async () => {
        while (true) {
            let addButtons = document.querySelectorAll("mds-icon[type=ico_add_circle");
            if (addButtons.length == 0) {
                if (document.location.href.includes("offer-activated")) {
                    window.history.back();
                } else {
                    return console.log("All offers added");
                }
            }
            console.log("Adding offer");
            addButtons[0].click()
            await new Promise(r => setTimeout(r, 500));
            window.history.back();
            await new Promise(r => setTimeout(r, 500));
        }
    }
)();