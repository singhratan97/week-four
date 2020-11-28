//Creating a request variable 
var request = new XMLHttpRequest();

//Open the request
request.open('GET' , 'https://restcountries.eu/rest/v2/all', true);

//Send the request
request.send();

//Load the response
request.onload = function (){

    //Add error handling to the xml http request code
    

    //Try block is applied to see if we have an exception
    try{
    var data = JSON.parse(this.response);
    //There are  only 250 elements in data so searching for 251st element will throw an exception
    if(!data[251]){
        throw new SyntaxError("no such column");
    }
    }
    //Catch block gives out the alerts message if there is any exception thrown by try block
    catch(err)
    {
        alert(err.name);
        alert(err.message);
        alert(err.stack);
    }


    //Get all the countries from Asia continent using Filter function

    const asianCountries = data.filter((item) => item.region == "Asia");
    console.log(asianCountries);

    //Get all the countries with population of less than 2 lacs using Filter function

    const popuLess2Lacs = data.filter((item) => item.population < 200000)
    console.log(popuLess2Lacs);

    //Print the following details : name, capital, flag using forEach function

    data.forEach((item) => { 
        console.log(item.name + ", " + item.capital + ", " + item.flag);
    });

    //Print the total population of countries using reduce function

    const totalPopu = data.reduce((total, item) => total+item.population,0);
    console.log(totalPopu);

    //Print the total population of countries in Asia continent using reduce and filter function

    const totalPopuInAsia = (data.filter((item) => item.region == "Asia")).reduce((total, item) => total+item.population,0);
    console.log(totalPopuInAsia);
    
    //Print the country which use US Dollars as currency

    const USDCurrenyCountry = data.filter((item) => item.currencies[0].code == "USD");
    console.log(USDCurrenyCountry);

}
