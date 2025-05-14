//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));
const fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => ((temp - 32) * 5 / 9));

const tot_temperature_in_fahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit).reduce((sum, temp) => sum + temp, 0)
const tot_temperature_in_celsius = celsiusTemps.concat(fahrenheitTempsToCelsius).reduce((sum, temp) => sum + temp, 0)
//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30
//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};