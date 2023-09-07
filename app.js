const getDay = document.getElementById("currentDay");
const getTime = document.getElementById("currentTime")

const currentDate = new Date();

// use an array to display day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// specify day of the week to be displayed
const currentDay = daysOfWeek[currentDate.getDay()];

const currentTime = currentDate.getTime();

// to display display current day on the page
getDay.innerHTML = `<strong>Current Day :</strong> ${currentDay}`;

// to display display current time on the page
getTime.innerHTML = `<strong>Current Time in millisecond :</strong> ${currentTime}`;