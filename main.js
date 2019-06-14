const weatherBalloon = ( cityID ) => {
    let key = 'd3ccc4ca6aaf7ecdf74053f920ae9506';
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ cityID }&appid=${ key }`)  
    .then(resp =>   resp.json())
    .then(data =>   drawWeather(data))
    .catch(err =>  console.log(err))
    }

    window.onload = function() {
    weatherBalloon( 2332459 );
    }

const drawWeather = ( d ) => {
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    let description = d.weather[0].description;
    const space = document.querySelector("#weather");
space.innerHTML = 
` <div id="description">${description}</div>
    <h1 id="temp"> ${celcius} &deg;</h1>
    <div id="location">${d.name}</div>`;

            
    if( description.indexOf('rain') > 0 ) {
    document.body.className = 'rainy';
} else if( description.indexOf('cloud') > 0 ) {
    document.body.className = 'cloudy';
} else if( description.indexOf('sunny') > 0 ) {
    document.body.className = 'sunny';
}
}
