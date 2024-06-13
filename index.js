const weatherForm = document.querySelector(".weatherForm");
const cityInput  = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "93440e37db0c76647a32275988a0e582";

weatherForm.addEventListener("submit", event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city) {

    }
    else{
      dsiplayError("Please enter a city");
    }
});

async function getWeatherData(city){

}
function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function dsiplayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
