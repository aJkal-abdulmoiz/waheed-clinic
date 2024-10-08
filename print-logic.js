document.getElementById("printBtn").addEventListener("click", function() {
    // Fetch data from localStorage
    const patientData = JSON.parse(localStorage.getItem('patientData')) || {};
    const pciData = JSON.parse(localStorage.getItem('pciData')) || {};
    const hopiData = JSON.parse(localStorage.getItem('hopiData')) || {};
    const pastMedicalData = JSON.parse(localStorage.getItem('pastMedicalData')) || {};
    const pfpdData = JSON.parse(localStorage.getItem('pfpdData')) || {};
    const rxData = JSON.parse(localStorage.getItem('rxData')) || {};

    // Extract relevant values from localStorage data
    const name = patientData.patientName || 'N/A';
    const father = patientData.so || 'N/A';
    const dob = patientData.dob || 'N/A';
    const age = patientData.age || 'N/A';
    const gender = patientData.sex || 'N/A';
    const occupation = patientData.occupation || 'N/A';
    const address = patientData.address || 'N/A';
    const contact = patientData.phone || 'N/A';
    const email = patientData.email || 'N/A';
    const emergencyContact = patientData.emergencyContact || 'N/A';
    const knownAllergies = patientData.knownAllergies || 'N/A';
    const bloodPressure = patientData.bloodPressure || 'N/A';
    const pulseRate = patientData.pulseRate || 'N/A';
    const respiratoryRate = patientData.respiratoryRate || 'N/A';
    const temperature = patientData.temperature || 'N/A';
    const weight = patientData.weight || 'N/A';

    // Additional medical information
    const pciDetails = pciData.pciDetails || 'N/A';
    const hopiDetails = hopiData.hopiDetails || 'N/A';
    const pastMedicalDetails = pastMedicalData.pastMedicalDetails || 'N/A';
    const pfpdDetails = pfpdData.pfpdDetails || 'N/A';
    const rxDetails = rxData.rxDetails || 'No prescription details available';

    // Create printable content
    const printableContent = `
        <div class="header">
            <h1>Dr. Muhammad Waleed Tahir</h1>
            <h2>MBBS, RMP - General Practitioner</h2>
        </div>
        <div class="content">
            <div class="vitals">
                <h3>VITALS</h3>
                <p><span>Blood Pressure:</span> ${bloodPressure}</p>
                <p><span>Pulse Rate:</span> ${pulseRate}</p>
                <p><span>Respiratory Rate:</span> ${respiratoryRate}</p>
                <p><span>Temperature:</span> ${temperature}</p>
                <p><span>Weight:</span> ${weight}</p>
                <p><span>Known Allergies:</span> ${knownAllergies}</p>
            </div>
            <div class="patient-info">
                <div class="section">
                    <h3>Patient Information</h3>
                    <p><span>Patient Name:</span> ${name}</p>
                    <p><span>S/O:</span> ${father}</p>
                    <p><span>Date of Birth:</span> ${dob}</p>
                    <p><span>Age:</span> ${age} Years</p>
                    <p><span>Gender:</span> ${gender}</p>
                    <p><span>Occupation:</span> ${occupation}</p>
                    <p><span>Address:</span> ${address}</p>
                    <p><span>Contact:</span> ${contact}</p>
                    <p><span>Email:</span> ${email}</p>
                    <p><span>Emergency Contact:</span> ${emergencyContact}</p>
                </div>
                <div class="section">
                    <h3>PCI Details</h3>
                    <p>${pciDetails}</p>
                </div>
                <div class="section">
                    <h3>HOPI Details</h3>
                    <p>${hopiDetails}</p>
                </div>
                <div class="section">
                    <h3>Past Medical History</h3>
                    <p>${pastMedicalDetails}</p>
                </div>
                <div class="section">
                    <h3>Personal Family and Personal History</h3>
                    <p>${pfpdDetails}</p>
                </div>
                <div class="section">
                    <h3>Prescription</h3>
                    <p>${rxDetails}</p>
                </div>
            </div>
        </div>
    `;

    // Open a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Print Patient Report</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Times+New+Roman:wght@400&display=swap">
                <style>
                    body { font-family: "Times New Roman", Times, serif; }
                    .header { text-align: center; margin-bottom: 10px; }
                    .vitals, .patient-info, .section { margin: 20px; }
                    .vitals h3, .patient-info h3, .section h3 { border-bottom: 2px solid #000; padding-bottom: 5px; }
                    .section p { margin: 5px 0; }
                    .clear { clear: both; }
                </style>
            </head>
            <body>
                ${printableContent}
                <script>
                    window.onload = function() {
                        window.print();
                        window.close();
                    }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
});