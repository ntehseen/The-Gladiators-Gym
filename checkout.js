"use strict";

// document.addEventListener("DOMContentLoaded", function () {
    
//     // Get the submit button element
//     let subButton = document.getElementById("subButton");

//     // Handle the click event for the submit button
//     subButton.addEventListener("click", function (e) {
//         e.preventDefault(); // Prevent the default form submission

//         // Validate all fields
//         validateName();
//         validateCard();
//         validateNumber();
//         validateMonth();
//         validateYear();
//         validateCVC();

//         // Check if all fields are valid before redirecting
//         if (document.getElementById("payment").checkValidity()) {
//             // Redirect to paysubmit.html
//             window.location.href = "paysubmit.html";
//         }
//     });


let subButton = document.getElementById("subButton");
// Validate the payment when the submit button is clicked
subButton.addEventListener("click", validateName);

subButton.addEventListener("click", validateCard);

subButton.addEventListener("click", validateNumber);

subButton.addEventListener("click", validateMonth);

subButton.addEventListener("click", validateYear);

subButton.addEventListener("click", validateCVC);

    // Check if the owner's name is entered on the card
    function validateName() {
        let cardName = document.getElementById("cardName");
        if (cardName.validity.valueMissing) {
            cardName.setCustomValidity("Enter your name as it appears on the card");
        } else {
            cardName.setCustomValidity("");
        }
    }

    // Check if a credit card has been selected
    function validateCard() {
        let card = document.querySelector('input[name="credit"]:checked');
        if (!card) {
            // No credit card selected
            document.getElementsByName("credit")[0].setCustomValidity("Select your credit card");
        } else {
            document.getElementsByName("credit")[0].setCustomValidity("");
        }
    }

    // Check if the card number is valid
    function validateNumber() {
        let cNum = document.getElementById("cardNumber");
        if (cNum.validity.valueMissing) {
            cNum.setCustomValidity("Enter your card number");
        } else if (cNum.validity.patternMismatch) {
            cNum.setCustomValidity("Enter a valid card number");
        } else if (luhn(cNum.value) === false) {
            cNum.setCustomValidity("Enter a legitimate card number");
        } else {
            cNum.setCustomValidity("");
        }
    }

    // Check if the expiration month is selected
    function validateMonth() {
        let month = document.getElementById("expMonth");
        if (month.selectedIndex === 0) {
            month.setCustomValidity("Select the expiration month");
        } else {
            month.setCustomValidity("");
        }
    }

    // Check if the expiration year is selected
    function validateYear() {
        let year = document.getElementById("expYear");
        if (year.selectedIndex === 0) {
            year.setCustomValidity("Select the expiration year");
        } else {
            year.setCustomValidity("");
        }
    }

    // Check if the CVC number is valid
    function validateCVC() {
        let card = document.querySelector('input[name="credit"]:checked');
        let cvc = document.getElementById("cvc");

        if (!card || cvc.validity.valueMissing) {
            cvc.setCustomValidity("Enter your CVC number");
        } else if ((card.value === "amex" && !/^\d{4}$/.test(cvc.value)) ||
                   (card.value !== "amex" && !/^\d{3}$/.test(cvc.value))) {
            cvc.setCustomValidity("Enter a valid CVC number");
        } else {
            cvc.setCustomValidity("");
        }
    }

    // Luhn algorithm for credit card number validation
    function luhn(idNum) {
        let string1 = "";
        let string2 = "";

        // Retrieve the odd-numbered digits starting from the back
        for (let i = idNum.length - 1; i >= 0; i -= 2) {
            string1 += idNum.charAt(i);
        }
        // Retrieve the even-numbered digits starting from the back and double them
        for (let i = idNum.length - 2; i >= 0; i -= 2) {
            string2 += 2 * idNum.charAt(i);
        }

        // Return whether the sum of the digits is divisible by 10
        return sumDigits(string1 + string2) % 10 === 0;

        // Helper function to sum the digits of a number string
        function sumDigits(numStr) {
            let digitTotal = 0;
            for (let i = 0; i < numStr.length; i++) {
                digitTotal += parseInt(numStr.charAt(i));
            }
            return digitTotal;
        }
    }
});
