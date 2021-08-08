/* async function getApiData(zipCode){
    //Url of API
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
        //it`s the response of the API
        let result = await fetch(urlApi);
        // convert the API response to Json to we can get a readable  data from it
        let resultDetails = await result.json();
        //console.log(resultDetails);
        let temperature = resultDetails.main.temp;
        //console.log(resultDetails.main.temp);
        return temperature;
}
async function connectWithServer(temperature,content){
    await fetch('/saveWeatherDetails', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date: newDate,
            temp: temperature,
            content: content
        })
    });
    const dataResponse = await fetch('/getWeatherDetails', { method: "GET", credentials: 'same-origin' });
    const dataResponseDetails = await dataResponse.json();
    return dataResponseDetails;
}
async function upDateUi(dataResponseDetails){

} */