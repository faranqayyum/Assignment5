
function think(){

    let inputBox = document.getElementById("inputBox").value
    var result = document.getElementById("result");
  // Make a request for a user with a given ID
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox}&appid=7c29fc42a4120643e129ed0883097dca&units=metric`)
      .then(function (response) {

        let weatherData = response.data
        console.log("weatherData: ", weatherData);
      

      var temp =  Number(weatherData?.main?.temp);
      var minTemp = Number(weatherData?.main?.temp_min);
      var maxTemp = Number(weatherData?.main?.temp_max);

      switch(true){

      case (temp < -10) || (minTemp < -10):

          result.innerHTML = "Dont go out its too cold";
          document.body.style.background = "url('snow.jpg')"
          
        break;
       
      
       case (temp > 35 || maxTemp > 35):
          
            result.innerHTML = "Dont go outside its too hot";
            document.body.style.background = "url('sunny.jpg')"

            break;


       case 
          (temp >= -10 && temp <= 5 )||
          (minTemp >= -10 && minTemp <= 5 ):
          
            result.innerHTML = "carry jacket and be care full"
            document.body.style.background = "url('thunderstorm.jpg')"

            break;
     
       case 
          (temp > 5 && temp <= 20)||
          (minTemp > 5 && minTemp <= 20):
          
            result.innerHTML = " carry jacket with you"
            document.body.style.background = "url('rainy.jpg')"
        break;
       
        case (temp > 20 && temp <= 35) :

       
            result.innerText = "Dont carry jacket";
            document.body.style.background = " url('clear.jpg')"
            
            break;
       }
        

    
         result.innerText += `- curent temprature is ${temp}'C and its going to be ${minTemp}'C at minimum`
       
        })

       

  
        .catch(function (error) {
         console.log(error);
  })
}