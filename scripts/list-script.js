fetch('tools-list-crypto.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container').innerHTML = data;
    });