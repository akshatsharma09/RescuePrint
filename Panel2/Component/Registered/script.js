document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("dataTable");

    // Search functionality
    document.getElementById("searchInput").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#dataTable tr");

        rows.forEach(row => {
            let text = row.innerText.toLowerCase();
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });

    // Function to handle Edit button
    function editEntry(event) {
        let row = event.target.closest("tr"); // Get the row
        let name = row.cells[0].innerText;
        let bloodGroup = row.cells[1].innerText;
        let problem = row.cells[2].innerText;
        let allergies = row.cells[3].innerText;
        let medication = row.cells[4].innerText;
        let doctor = row.cells[5].innerText;

        // Store values in session storage (temporary storage)
        sessionStorage.setItem("editName", name);
        sessionStorage.setItem("editBloodGroup", bloodGroup);
        sessionStorage.setItem("editProblem", problem);
        sessionStorage.setItem("editAllergies", allergies);
        sessionStorage.setItem("editMedication", medication);
        sessionStorage.setItem("editDoctor", doctor);

        // Redirect to the form for editing
        window.location.href = "../Medical_Details/index.html";
    }

    // Function to handle Delete button
    function deleteEntry(event) {
        let row = event.target.closest("tr");
        row.remove();
    }

    // Attach event listeners to existing buttons
    document.querySelectorAll(".edit").forEach(btn => btn.addEventListener("click", editEntry));
    document.querySelectorAll(".delete").forEach(btn => btn.addEventListener("click", deleteEntry));
});
