var data = require('./data.js');

function weatherInfo (item) {
 	console.log(item.name + ' ====================');
	console.log(item.weather[0].description + '.');
	console.log('Temp: ' + item.main.temp);
	console.log('Lo: ' + item.main.temp_min + ', ' + 'Hi: ' + item.main.temp_max); 
	console.log('Humidity: ' + item.main.humidity + '%');
	console.log('Wind: ' + item.wind.speed +' MPH ' + item.wind.deg);
	console.log('======================');
 }
data.list.sort(function (a, b){
	if (a.name > b.name) {
		return +1
	} else if (a.name < b.name) {
	  	return -1 
	}	else {
		return 0
	}
})
data.list.forEach(weatherInfo)

//average temperature
// find average temp 
var totalTemp = data.list.reduce(function (a, x) {
    return a + x.main.temp 
}, 0);

console.log(totalTemp / data.list.length)



//calculate average lo temp
var loTemp = data.list.reduce(function (a, x){
	return a + x.main.temp_min
}, 0);

console.log(loTemp / data.list.length)


//caluclate average hi temp
var hiTemp = data.list.reduce(function (a, x){
	return a + x.main.temp_max
}, 0);

console.log(hiTemp / data.list.length)


//calculate average humidity 
var humidity = data.list.reduce(function (a, x){
	return a + x.main.humidity
}, 0);

console.log(humidity / data.list.length)


//average wind speed
var totalTemp = data.list.reduce(function (a, x) {
    return a + x.main.temp
}, 0);

console.log(totalTemp / data.list.length)











//kelvin to fahrenheit converter
function tempConvert () {

}














