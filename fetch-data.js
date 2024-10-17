const fetchDataButton = document.getElementById('fetchData');
const dataDisplay = document.getElementById('data');
const errorDisplay = document.getElementById('error');

fetchDataButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            dataDisplay.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="max-width: 300px; height: auto;">`;
            errorDisplay.innerHTML = '';
        })
        .catch(error => {
            errorDisplay.innerHTML = `Error: ${error.message}`;
            dataDisplay.innerHTML = '';
        });
});
