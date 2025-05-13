const form = document.getElementById("registration-form");
const fullName = document.getElementById("attendee-name");
const email = document.getElementById("attendee-email");
const phoneNumber = document.getElementById("phone-number");
const ticketCode = document.getElementById("ticket-code");
const attendees = document.getElementById("attendees");
const eventDate = document.getElementById("event-date");
const interestsGroup = document.getElementById("interests-group");
const otherInterest = document.getElementById("other-interest");
const interestsDescription = document.getElementById("interests-description");
const accommodationGroup = document.getElementById("accommodation-group");
const otherAccommodation = document.getElementById("custom");
const accommodationDescription = document.getElementById("accommodation-description");
const termsAgreement = document.getElementById("terms-agreement");

function isRegistrationValid(formdata) {
    return Object.values(formdata).every(value => value === true);
}

function formValidation() {
    const emailRegex = /^[a-zA-Z0-9_.+-]@\$/;
    const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}[0-9]{4}$/;
    const ticketCodeRegex = /^EVT-2025-\[0-9]{4}$/;
    const eventDateRegex = /(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d/
    const checkBoxes = interestsGroup.querySelectorAll('input[type="checkbox"]');
    const radios = accommodationGroup.querySelectorAll('input[type="radio"]');

    return {
        "attendee-name": fullName.value ? true : false && fullName.value.length > 3,
        "attendee-email": emailRegex.test(email.value),
        "phone-number": phoneNumberRegex.test(phoneNumber.value),
        "ticket-code": ticketCodeRegex.test(ticketCode.value),
        "attendees": !isNaN(attendees.value) && attendees.value <= 10,
        "event-date": eventDateRegex.test(eventDate.value),
        "interests-group": Array.from(checkBoxes).some(checkbox => checkbox.checked),
        "interests-description": (otherInterest.checked && interestsDescription.value.length >= 30) || (!otherInterest.checked),
        "accommodation-group": Array.from(radios).some(radio => radio.checked),
        "accommodation-description": (otherAccommodation.checked && accommodationDescription.value.length >= 30) || (!otherAccommodation.checked),
        "terms-agreement": termsAgreement.checked ? true : false
    };
}

fullName.addEventListener("change", () => {
  const formValidation = formValidation();
  fullName.style.borderColor = formValidation["attendee-name"] ? "green" : "red";
});

email.addEventListener("change", () => {
  const formValidation = formValidation();
  email.style.borderColor = formValidation["attendee-email"] ? "green" : "red";
});

phoneNumber.addEventListener("change", () => {
  const formValidation = formValidation();
  phoneNumber.style.borderColor = formValidation["phone-number"] ? "green" : "red";
});

ticketCode.addEventListener("change", () => {
  const formValidation = formValidation();
  ticketCode.style.borderColor = formValidation["ticket-code"] ? "green" : "red";
});

attendees.addEventListener("change", () => {
  const formValidation = formValidation();
  attendees.style.borderColor = formValidation["attendees"] ? "green" : "red";
});

eventDate.addEventListener("change", () => {
    const formValidation = formValidation();
    eventDate.style.borderColor = formValidation["event-date"] ? "green" : "red";
});

interestsGroup.addEventListener("change", () => {
  
 const formValidation = formValidation();
 interestsGroup.style.borderColor = formValidation["interests-group"] ? "green" : "red";
});

interestsDescription.addEventListener("change", () => {
  
const formValidation = formValidation();
interestsDescription.style.borderColor = formValidation["interests-description"] ? "green" : "red";
});

accommodationGroup.addEventListener("change", () => {
  
 const formValidation = formValidation();

 accommodationGroup.style.borderColor = formValidation["accommodation-group"] ? "green" : "red";
});

accommodationDescription.addEventListener("change", () => {
  
const formValidation = formValidation();

accommodationDescription.style.borderColor = formValidation["accommodation-description"] ? "green" : "red";
});

form.addEventListener("submit", (e) => {
    e.preventDefault;
    if (isRegistrationValid(formValidation())) {
        alert("all form fields are valid");
    } else {
        alert("all form fields are valid");
    }
});
