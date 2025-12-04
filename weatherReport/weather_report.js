function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    
    const apiKey = '5b9f5e6165597d9d27381a702b779344'; 
    let apiUrl = '';

    if (city !== "") {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } 
    else if (lat !== "" && lon !== "") {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } 
    else {
        alert("Please enter a City Name OR Coordinates!");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            
            if (data.cod !== 200) {
                weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
                return;
            }

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Failed to fetch weather.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);