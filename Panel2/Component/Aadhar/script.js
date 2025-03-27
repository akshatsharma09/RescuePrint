function verifyAadhaar() {
    const aadhaar = document.getElementById("aadhaar").value;
    
    if (aadhaar.length !== 12 || isNaN(aadhaar)) {
        document.getElementById("status").innerText = "❌ Invalid Aadhaar Number!";
        return;
    }

    document.getElementById("status").innerText = "OTP Sent.";
    document.getElementById("otpSection").classList.remove("hidden");
}

function verifyOTP() {
    const otp = document.getElementById("otp").value;

    if (otp.length !== 6 || isNaN(otp)) {
        document.getElementById("status").innerText = "Invalid OTP!";
        return;
    }

    document.getElementById("status").innerText = "Aadhaar Verified Successfully!";
}
