console.log("hello world!")

const cityname = document.getElementById('city-input');
const searchbtn = document.getElementById('search')
const cityName = document.getElementById('city-name')
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const time4 = document.getElementById('time4');
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const day4 = document.getElementById('day4');
const temperature1 = document.getElementById('temperature1');
const temperature2 = document.getElementById('temperature2');
const temperature3 = document.getElementById('temperature3');
const temperature4 = document.getElementById('temperature4');




// method 1
// searching for city 
searchbtn.addEventListener('click', function () {
    console.log('hello');
    const city = cityname.value.trim();

    if (city) {
        const apiKey = '61af75f3f18c7bf8d2b68a365c65c688';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const getData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network error');
                }

                const data = await response.json();
                cityName.textContent = data.name;
                temperature1.textContent = data.main.temp;
                temperature2.textContent = data.main.temp;
                temperature3.textContent = data.main.temp;
                temperature4.textContent = data.main.temp;

                const sunriseTimestamp = data.sys.sunrise;
                const sunriseDate = new Date(sunriseTimestamp * 1000);
                const hours = sunriseDate.getHours();
                const day = sunriseDate.getDate();

                time1.textContent = ` ${hours}`;
                time2.textContent = ` ${hours}`;
                time3.textContent = ` ${hours}`;
                time4.textContent = ` ${hours}`;

                day1.textContent = ` ${day}`;
                day2.textContent = ` ${day}`;
                day3.textContent = ` ${day}`;
                day4.textContent = ` ${day}`;
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        getData();
    } else {
        alert('Please enter a city name.');
    }
});

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

//method 2 