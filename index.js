let userPreference = ''; // Possible values: 'Regular', 'Sugar-free', or undefined

let userMessage = userPreference === '' ? "User prefers Sugar-free variety." :
              userPreference === 'Regular' ? "User prefers Regular variety." :
              "Regular variety.";

console.log(userMessage);

let cansLeft = 7; // Any number of cans

let stockMessage = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(stockMessage);

let heartRate = 95; // Current heart rate in bpm
let workoutMessage = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(workoutMessage);

let currentTemp = 4; // Current temperature in °C
let tempMessage = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!";
console.log(tempMessage);

// Define the current hour in 24-hour format
let currentHour = 22; 
let drinkDecision = currentHour >= 7 && currentHour <= 24 ? "Unleash the beast!" : "Better stick to water.";
console.log(drinkDecision);
