/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// Selecting the input element and get its value 
let inputVal = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")   
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let poundsEl = document.getElementById("mass-el")   

// //event listener on convert button 
convertBtn.addEventListener("click", function () {
    let baseValue = inputVal.value
    //meters to feet
    const meterToFeet = (baseValue * 3.281).toFixed(2)
    lengthEl.textContent = `${baseValue} meters = ${meterToFeet} feet`
    //vol//
    const litresToGallons = (baseValue * 0.264).toFixed(2)
    volumeEl.textContent = `${baseValue} litres = ${litresToGallons} gallons`
    //mass//
     const poundsToKilograms = (baseValue * 2.204).toFixed(2)
    poundsEl.textContent = `${baseValue} kilograms = ${poundsToKilograms} pounds`
})

