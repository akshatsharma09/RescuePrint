let timer = 60;
let interval;

// Function to start the OTP timer
function startTimer() {
    timer = 60; 
    document.getElementById("timer").textContent = timer;
    document.getElementById("resendOTP").classList.add("disabled"); // Disable Resend OTP
    document.getElementById("resendOTP").style.pointerEvents = "none"; // Make it unclickable
    document.getElementById("resendOTP").classList.remove("design");


    interval = setInterval(() => {
        timer--;
        document.getElementById("timer").textContent = timer;

        if (timer === 0) {
            clearInterval(interval);
            document.getElementById("resendOTP").classList.remove("disabled"); // Enable Resend OTP
            document.getElementById("resendOTP").style.pointerEvents = "auto"; // Make it clickable
            document.getElementById("resendOTP").classList.add("design");
        }
    }, 1000);
}

// Function to resend OTP
function resendOTP() {
    if (timer === 0) {
        console.log("Resending OTP...");
        startTimer(); // Restart the timer
    }
}

// Function to auto-move to the next input box
function moveToNext(input, index) {
    let otpInputs = document.querySelectorAll(".otp-box");
    if (input.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
    }
}

// Function to verify OTP
function verifyOTP() {
    let otpInputs = document.querySelectorAll(".otp-box");
    let otp = "";
    otpInputs.forEach(input => otp += input.value);

    if (otp.length === 4 && !isNaN(otp)) {  // Expecting 6 digits
        document.getElementById("status").innerText = "✅ Verified!";
        setTimeout(() => {
            window.location.href = "../Medical_Details/index.html";
        }, 2000);
    } else {
        document.getElementById("status").innerText = "❌ Invalid OTP!";
    }
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Start the timer when the page loads
window.onload = startTimer;
