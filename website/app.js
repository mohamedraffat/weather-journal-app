/* Global Variables */
const btn = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
// in the variable new data at d.getMonth() i added 1 to it`s start from zero to be right calander 
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
// Key Value  of weather API

const key = 'dd254fd1412d1907b5fe06c52bdc42a4';

//add event listener
btn.addEventListener('click', async ()=>{
    const zipCode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    console.log(zipCode);
    //Url of API
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
    try{
        let result = await fetch(urlApi);
        let resultDetails = await result.json();
            //console.log(resultDetails);
        let temperature = resultDetails.main.temp;
            //console.log(resultDetails.main.temp);
        await fetch('/saveWeatherDetails',{
            method:'POST',
            credentials:'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: newDate,
                temp : temperature,
                content : content
            })
        });
        const dataResponse =  await fetch('/getWeatherDetails',{method: "GET",credentials:'same-origin'});
        //console.log(dataResponse);
        const dataResponseDetails = await dataResponse.json();
       console.log(dataResponseDetails);
        const newUi = await upDateUi(dataResponseDetails);
        
    }
    catch (error){
        console.log(error);
    }
});
async function upDateUi(dataResponseDetails){
    const t = dataResponseDetails;  
    console.log("temp " + t.temp)
    console.log("Data is " + t.date);
    console.log("felling" + t.content);
    document.getElementById('temp').innerHTML = "Temperature is :"+t.temp;
    document.getElementById('date').innerHTML = "Day : "+t.date;
    document.getElementById('content').innerHTML ="Weather is " +t.content;
}