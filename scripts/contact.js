// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");

let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userMessage = document.getElementById("user-message");

submitButton.addEventListener("click", function() {
    if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    let contactPage = document.getElementById("contact-page");
    contactPage.style.textAlign = "center";
    contactPage.style.padding = "10px";
    contactPage.style.justifyContent ="start";
    contactPage.innerHTML = "<p>Thank you for your message!</p>";
    contactPage.style.fontSize = "24px";
}   
);

