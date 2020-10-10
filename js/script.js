// Constants and variables

const API_KEY = ''
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
let cityData, userInput;

// Cached element references

let $city = $('#city');
let $temp = $('#temp');
let $index = $('#index');
let $desc = $('#desc');
const $form = $('form');
const $input = $('input[type="text"]');

// Event listeners

$form.on('submit', handleGetData)

// Functions

//q={city name}&appid={API key}

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();

    if(!userInput) return;

    $.ajax(BASE_URL + `q=${userInput}&units=imperial&appid=` + API_KEY ).
    then(function(data) {
        console.log(data);
        cityData = data;
        render();
    }, function(error) {
        console.log('Error: ', error);
    });
}


function render() {
    $city.text('Weather For: ' + cityData.name);
    $temp.text('Temperature: ' + cityData.main.temp);
    $index.text('Feels Like: ' + cityData.main.feels_like);
    $desc.text('Weather: ' + cityData.weather[0].main);
}