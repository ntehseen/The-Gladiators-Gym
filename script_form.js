"use strict";

window.addEventListener("load", function() {
    let membershipForm = document.forms.membershipForm;
    let membershipType = membershipForm.elements.membershipType;

    // Select Membership Type selection lists when form opens
    membershipType.focus();

    // Add an event listener for every form element
    for (let i = 0; i < membershipForm.elements.length; i++) {
        membershipForm.elements[i].addEventListener("change", calcMembership);
    }

    function calcMembership() {
        // Determine the selected membership type
        let typeIndex = membershipType.selectedIndex;
        let typeValue = membershipType.options[typeIndex].value;

        // Determine the selected duration
        let durationIndex = membershipForm.elements.membershipDuration.selectedIndex;
        let durationValue = membershipForm.elements.membershipDuration[durationIndex].value;

        // Membership cost = type cost times duration
        let membershipCost = typeValue * durationValue;
        membershipForm.elements.membershipCost.value = membershipCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        // Retrieve the cost of additional services
        let additionalServicesCost = 0;
        let additionalServicesName = "";

        let personalTrainingCheckbox = document.getElementById('personalTraining');
        let nutritionConsultationCheckbox = document.getElementById('nutritionConsultation');

        if (personalTrainingCheckbox.checked) {
            additionalServicesCost += parseFloat(personalTrainingCheckbox.value);
            additionalServicesName += "Personal Training, ";
        }

        if (nutritionConsultationCheckbox.checked) {
            additionalServicesCost += parseFloat(nutritionConsultationCheckbox.value);
            additionalServicesName += "Nutrition Consultation, ";
        }

        // Remove trailing comma and space
        additionalServicesName = additionalServicesName.replace(/,\s*$/, "");

        membershipForm.elements.additionalServicesCost.value = additionalServicesCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        membershipForm.elements.additionalServicesName.value = additionalServicesName;

        // Calculate the order subtotal
        let subtotal = membershipCost + additionalServicesCost;
        membershipForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        // Calculate the 5% sales tax
        let salesTax = subtotal * 0.05;
        membershipForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        // Calculate the total cost of the order
        let totalCost = subtotal + salesTax;
        membershipForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        membershipForm.elements.membershipTypeName.value = membershipType.options[typeIndex].text;
    }

    // Calculate the cost of the membership
    calcMembership();
});


