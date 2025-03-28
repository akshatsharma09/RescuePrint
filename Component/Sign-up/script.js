let isEmailValid = false; // Store email validation result
let isPasswordValid = false;
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

document.getElementById("email").addEventListener("input", function() {
    const email = this.value;

    if (validateEmail(email)) {
        document.getElementById("email").classList.remove("box");
        isEmailValid = true;
    } else {
        document.getElementById("email").classList.add("box");
        isEmailValid = false;
    }
});

document.getElementById("pass2").addEventListener("input" , () => {
    if(document.getElementById("pass1").value === document.getElementById("pass2").value) {
        document.getElementById("pass2").classList.remove("box");
        isPasswordValid = true;
    }
    else {
        document.getElementById("pass2").classList.add("box");
        isPasswordValid = false;
    }
})

function adhar() {
    if (isEmailValid && isPasswordValid) { 
        window.location.href = "../Aadhar/aadhar.html"; 
    } else if(!isEmailValid) {
        alert("Please enter a valid email before proceeding.");
    }
    else  {
        alert("Please enter same password.");
    }
}
