const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIkey = "b99f61b732262134bb20340c7130b88d";
  const city = document.querySelector(".search-box input").value;

  if (city == "") return;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}"
  )
    .then((Response) => Response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "soleado":
          image.src = "images/Soleado.png";
          break;
        case "lluvioso":
          image.src = "images/Lluvioso.png";
          break;
        case "nublado":
          image.src = "images/Nublado.png";
          break;
        case "ventoso":
          image.src = "images/Ventoso.png";
          break;
        case "nevado":
          image.src = "images/Nevado.png";
          break;

        default:
          image.src = "images/Nublado.jpg";
      }
    });
});
