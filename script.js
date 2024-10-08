function saveRxData() {
    const rxDetails = document.getElementById('rxDetails').value;

    // Clear the alert message
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.remove('show');

    // Validate required fields
    if (!rxDetails) {
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 2000);
        return false; // Return false if validation fails
    }

    // Save data to local storage
    localStorage.setItem('rxData', JSON.stringify({ rxDetails }));
    return true; // Return true if saving was successful
}

function saveAllDataToJson() {
    // Save Rx data first
    const isRxDataSaved = saveRxData();

    // If Rx data is not valid, stop the process
    if (!isRxDataSaved) {
        return; // Exit the function
    }

    // Retrieve all necessary data from local storage
    const patientData = JSON.parse(localStorage.getItem('patientData')) || {};
    const pciData = JSON.parse(localStorage.getItem('pciData')) || {};
    const hopiData = JSON.parse(localStorage.getItem('hopiData')) || {};
    const pastMedicalData = JSON.parse(localStorage.getItem('pastMedicalData')) || {};
    const pfpdData = JSON.parse(localStorage.getItem('pfpdData')) || {};
    const rxData = JSON.parse(localStorage.getItem('rxData')) || {};

    // Collect all data into a single object
    const allData = {
        patientData,
        pciData,
        hopiData,
        pastMedicalData,
        pfpdData,
        rxData
    };

    // Generate a unique ID for the patient (based on number of saved patients)
    let patientList = JSON.parse(localStorage.getItem('patientList')) || [];
    let nextId = patientData.cnic; // Increment ID for each new patient

    // Assume the patient name and father name are in the patientData object
    const patientName = patientData.patientName || 'Unknown';
    const fatherName = patientData.so || 'Unknown';
    
    const fileBaseName = `${patientName}_${fatherName}_${nextId}`;
    const jsonFileName = `${fileBaseName}.json`;
    const xlsxFileName = `${fileBaseName}.xlsx`;

    // Save the new patient ID to local storage
    patientList.push({ id: nextId, patientName, fatherName });
    localStorage.setItem('patientList', JSON.stringify(patientList));

    // Convert all data to JSON and create a Blob for download
    const json = JSON.stringify(allData, null, 2);
    const jsonBlob = new Blob([json], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    // Create a download link for JSON
    const jsonLink = document.createElement('a');
    jsonLink.href = jsonUrl;
    jsonLink.download = jsonFileName; // Set the dynamic file name for download
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);
    URL.revokeObjectURL(jsonUrl); // Clean up the URL


    // Show a success status
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = `Data saved successfully as ${jsonFileName}`;


}

