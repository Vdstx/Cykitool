fetch('tools-list-crypto.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-crypto').innerHTML = data;
    });

fetch('tools-list-forensics.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-forensics').innerHTML = data;
    });