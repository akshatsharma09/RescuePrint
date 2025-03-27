document.getElementById('addMedication').addEventListener('click', function () {
    let medContainer = document.getElementById('medications');
    let newMed = document.createElement('div');
    newMed.classList.add('medication');
    newMed.innerHTML = `
        <input type="text" placeholder="Medication Name">
        <input type="text" placeholder="Dosage (e.g., 2 tablets/day)">
        <input type="text" placeholder="Doctor's Name">
        <button class="remove-btn">Remove</button>
    `;
    medContainer.appendChild(newMed);
    
    newMed.querySelector('.remove-btn').addEventListener('click', function () {
        medContainer.removeChild(newMed);
    });
});

function Submit() {
    let bloodGroup = document.getElementById("bloodGroup").value;
    let medicalProblem = document.getElementById("medicalProblem").value;
    let allergies = document.getElementById("allergies").value;
    
    let medications = [];
    document.querySelectorAll("#medications .medication").forEach(med => {
        let medName = med.children[0].value;
        let dosage = med.children[1].value;
        let doctor = med.children[2].value;
        medications.push({ medName, dosage, doctor });
    });

    let medicalData = {
        bloodGroup,
        medicalProblem,
        allergies,
        medications
    };

    // Store in localStorage
    localStorage.setItem("medicalRecord", JSON.stringify(medicalData));

    // Redirect to dashboard
    window.location.href = "../Registered/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    // Populate form if editing
    document.getElementById("bloodGroup").value = sessionStorage.getItem("editBloodGroup") || "";
    document.getElementById("medicalProblem").value = sessionStorage.getItem("editProblem") || "";
    document.getElementById("allergies").value = sessionStorage.getItem("editAllergies") || "";
    document.getElementById("medication").value = sessionStorage.getItem("editMedication") || "";
    document.getElementById("doctor").value = sessionStorage.getItem("editDoctor") || "";
});

