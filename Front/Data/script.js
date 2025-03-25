document.getElementById("logout-btn").addEventListener("click", function () {
    alert("Logging out...");
    window.location.href = "../index.html"; // Redirect to login page
});
const count = 1;
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:4000/Scanner/Front/Data/dashboard.html") // Adjust the path based on the project structure
        .then(response => response.json())
        .then(data => {
            document.querySelector(".user-info").innerHTML = `
                <p><strong>Name:</strong> ${data[count].name}</p>
                <p><strong>Address:</strong> ${data[count].address}</p>
                <p><strong>Phone No.:</strong> ${data[count].phone}</p>
                <p><strong>Alternate No.:</strong> ${data[count].alternate}</p>
                <p><strong>Emergency Contact:</strong> ${data[count].emergency}</p>
                <p><strong>Blood Group:</strong> ${data[count].bloodGroup}</p>
                <p><strong>Medical History:</strong> ${data[count].medicalHistory}</p>
            `;
        })
        .catch(error => console.error("Error loading data:", error));
});
