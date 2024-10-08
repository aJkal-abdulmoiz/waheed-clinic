
function loadDataFromLocalStorage() {
    // Retrieve all data from local storage
    const patientData = JSON.parse(localStorage.getItem('patientData')) || {};
    const pciData = JSON.parse(localStorage.getItem('pciData')) || {};
    const hopiData = JSON.parse(localStorage.getItem('hopiData')) || {};
    const pastMedicalData = JSON.parse(localStorage.getItem('pastMedicalData')) || {};
    const pfpdData = JSON.parse(localStorage.getItem('pfpdData')) || {};
    const rxData = JSON.parse(localStorage.getItem('rxData')) || {};

    const currentPage = window.location.pathname;

    if (patientData && currentPage == "/patient.html")  {
        document.getElementById('patientName').value = patientData.patientName || '';
        document.getElementById('so').value = patientData.so || '';
        document.getElementById('dateToday').value = patientData.dateToday || '';
        document.getElementById('dob').value = patientData.dob || '';
        document.getElementById('age').value = patientData.age || '';
        document.getElementById('cnic').value = patientData.cnic || '';
        document.getElementById('sex').value = patientData.sex || '';
        document.getElementById('occupation').value = patientData.occupation || '';
        document.getElementById('address').value = patientData.address || '';
        document.getElementById('phone').value = patientData.phone || '';
        document.getElementById('email').value = patientData.email || '';
        document.getElementById('emergencyContact').value = patientData.emergencyContact || '';
        document.getElementById('bloodPressure').value = patientData.bloodPressure || '';
        document.getElementById('pulseRate').value = patientData.pulseRate || '';
        document.getElementById('respiratoryRate').value = patientData.respiratoryRate || '';
        document.getElementById('temperature').value = patientData.temperature || '';
        document.getElementById('weight').value = patientData.weight || '';
        document.getElementById('knownAllergies').value = patientData.knownAllergies || '';
    }

    if (pciData && currentPage == "/pci.html") {
        document.getElementById('pciDetails').value = pciData.pciDetails || '';
    }

    if (hopiData && currentPage == "/hopi.html") {
        document.getElementById('hopiDetails').value = hopiData.hopiDetails || '';
    }

    if (pastMedicalData && currentPage == "/past-medical.html") {
        document.getElementById('pastMedicalDetails').value = pastMedicalData.pastMedicalDetails || '';
    }

    if (pfpdData && currentPage == "/pfpd.html") {
        document.getElementById('pfpdDetails').value = pfpdData.pfpdDetails || '';
    }

    if (rxData && currentPage == "/rx.html") {
        document.getElementById('rxDetails').value = rxData.rxDetails || '';
    }
}

document.addEventListener('DOMContentLoaded', loadDataFromLocalStorage);
