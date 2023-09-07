console.log("hello world!")

const cityname = document.getElementById('city-input');
const searchbtn = document.getElementById('search');
const cityName = document.getElementById('city-name');
const iconElement = document.querySelector(".icon");

// get from html
const temperatureElements = [temperature1, temperature2, temperature3, temperature4];
const timeElements = [time1, time2, time3, time4];
const dayElements = [day1, day2, day3, day4];


const getData = async () => {
    try {
        const city = cityname.value.trim();

        if (city) {
            const apiKey = '61af75f3f18c7bf8d2b68a365c65c688';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network error');
            }

            const data = await response.json();
            cityName.textContent = data.name;

            for (let i = 0; i < temperatureElements.length; i++) {
                temperatureElements[i].textContent = data.main.temp;
                const sunriseTimestamp = data.sys.sunrise;
                const sunriseDate = new Date(sunriseTimestamp * 1000);
                const hours = sunriseDate.getHours();
                const day = sunriseDate.getDate();
                timeElements[i].textContent = `${hours}`;
                dayElements[i].textContent = `${day}`;
            }
            const weatherIconCode = data.weather[0].icon;

            const iconElement = document.querySelector(".icon img");
            iconElement.src = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;

            // Set the src attribute of the iconElement to the weather icon URL
            // iconElement.src = weatherIconUrl;
        } else {
            alert('Please enter a city name.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

searchbtn.addEventListener('click', getData);



// method 2
// fetch(api)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const sunriseTimestamp = data.city.sunrise;

//         const sunriseDate = new Date(sunriseTimestamp * 1000);

//         const hours = sunriseDate.getHours();
//         const day = sunriseDate.getDate();

//         city.innerHTML = data.city.name;
//         time.innerHTML = `Sunrise: ${hours}:${sunriseDate.getMinutes()}, Day: ${day}`;
//         console.log(data.city);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });