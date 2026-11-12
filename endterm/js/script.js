// Task 1: current year in the footer (all pages)
const yearSpan = document.getElementById("year");

if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}


// Task 2: greeting depends on the time of the day (home page)
const greeting = document.getElementById("greeting");

if(greeting){
    const hour = new Date().getHours();

    if(hour < 12){
        greeting.textContent = "Good morning";
    }
    else if(hour < 18){
        greeting.textContent = "Good afternoon";
    }
    else{
        greeting.textContent = "Good evening";
    }
}

// Task 3: contact form validation with Bootstrap (about page)
const contactForm = document.getElementById("contactForm");

if(contactForm){
    const nameInput = document.getElementById("nameInput");
    const messageInput = document.getElementById("messageInput");
    const charCount = document.getElementById("charCount");
    const formSuccess = document.getElementById("formSuccess");

    // live counter of characters in the message
    messageInput.addEventListener
    (
        "keyup",
        function()
        {
            charCount.textContent = messageInput.value.length;
        }
    );

    contactForm.addEventListener
    (
        "submit",
        function(event)
        {
            // stop the page from reloading
            event.preventDefault();

            // checkValidity() uses the rules from HTML: required, minlength, type="email", pattern
            if(contactForm.checkValidity()){
                formSuccess.textContent = "Thank you, " + nameInput.value.trim() + "! Your message is correct (demo form, nothing was sent).";
                formSuccess.classList.remove("d-none");

                contactForm.reset();
                contactForm.classList.remove("was-validated");
                charCount.textContent = "0";
            }
            else{
                formSuccess.classList.add("d-none");
                // was-validated tells Bootstrap to show red / green fields and invalid-feedback
                contactForm.classList.add("was-validated");
            }
        }
    );
}