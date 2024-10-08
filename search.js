// Function to search for a patient based on input
function searchPatient() {
    const patientName = document.getElementById('patientName').value;
    const fatherName = document.getElementById('fatherName').value;
    const cnic = document.getElementById('cnic').value;

    // Clear the alert message
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'none';
    const patientTableBody = document.getElementById('patientTableBody');
    patientTableBody.innerHTML = ''; // Clear previous search results

    // Validate input fields
    if (!patientName || !fatherName || !cnic) {
        alertBox.textContent = 'Please fill in all fields.';
        alertBox.style.display = 'block';
        return;
    }

    // Construct the filename based on the input
    const fileName = `${patientName}_${fatherName}_${cnic}.json`;
    const filePath = `database/${fileName}`; // Ensure this path is correct

    // Fetch the JSON data from the constructed filename
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.json();
        })
        .then(data => {
            // Create objects to hold the relevant data
            const patientData = data.patientData; // Patient data
            const pfpdData = { pfpdDetails: data.pfpdData.pfpdDetails }; // PFDP data
            const hopiData = { hopiDetails: data.hopiData.hopiDetails }; // Hopi data
            const pastMedicalData = { pastMedicalDetails: data.pastMedicalData.pastMedicalDetails }; // Past medical data
            const pciData = { pciDetails: data.pciData.pciDetails }; // PCI data
            const rxData = { rxDetails: data.rxData.rxDetails }; // RX data

            // Save data to local storage
            localStorage.setItem('patientData', JSON.stringify(patientData));
            localStorage.setItem('pfpdData', JSON.stringify(pfpdData));
            localStorage.setItem('hopiData', JSON.stringify(hopiData));
            localStorage.setItem('pastMedicalData', JSON.stringify(pastMedicalData));
            localStorage.setItem('pciData', JSON.stringify(pciData));
            localStorage.setItem('rxData', JSON.stringify(rxData));

            // Create a new row in the table for the patient
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patientData.patientName}</td>
                <td>${patientData.so}</td>
                <td>${patientData.cnic}</td>
                <td><button class="btn btn-info" onclick="viewDetails()">View Details</button></td>
            `;
            patientTableBody.appendChild(row);
        })
        .catch(error => {
            // Show error message
            alertBox.textContent = 'No data found for the given patient.';
            alertBox.style.display = 'block';
            console.error('Error:', error);
        });
}

// Function to navigate to the patient details page
function viewDetails() {
    // Redirect to patient.html
    window.location.href = 'patient.html';
}

// Setup event listener for the search button
document.getElementById('searchButton').addEventListener('click', searchPatient);
