// Months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobor",
  "November",
  "December",
];

// Days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get items
const deadlineText = document.querySelector(".giveaway__deadline");
const remainsTime = document.querySelectorAll(".time h4");

// Get giveaway
const dateTime = new Date();
const newYear = dateTime.getFullYear();
const newMonth = dateTime.getMonth();
const newDate = dateTime.getDate();
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let deadlineTime = new Date(newYear, newMonth, newDate + 4, 10, 15, 0); // 24 hours format

const deadlineMonth = months[deadlineTime.getMonth()];
const deadlineDate = deadlineTime.getDate();
const deadlineDay = days[deadlineTime.getDay()];
const deadlineHour = deadlineTime.getHours();
const deadlineMinutes = deadlineTime.getMinutes();

// Add giveaway deadling time at html docs
deadlineText.textContent = `Giveaway times end at ${deadlineDay}, ${deadlineDate} ${deadlineMonth} ${deadlineHour}:${deadlineMinutes}PM`;

const deadline = deadlineTime.getTime();

// Time remains
const timeRemains = () => {
  const present = new Date().getTime();

  const timeDiff = deadline - present; // milisecs
  // console.log(timeDiff)

  // Convert all dates values into miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Get al dates from timeDiff
  const remainsDays = Math.floor(timeDiff / oneDay);
  const remainsHours = Math.floor((timeDiff % oneDay) / oneHour);
  const remainsMinutes = Math.floor((timeDiff % oneHour) / oneMinute);
  const remainsSecs = Math.floor((timeDiff % oneMinute) / 1000);

  // Set reemains times in html docs
  const remainsTimesArray = [
    remainsDays,
    remainsHours,
    remainsMinutes,
    remainsSecs,
  ];

  // Format
  function zeroFormat(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  remainsTime.forEach(
    (item, index) => (item.innerText = zeroFormat(remainsTimesArray[index]))
  );

  // Clear interval
  if (timeDiff < 0) {
    clearInterval(count);
    remainsTime.forEach((item) => (item.innerText = "0"));
    deadlineText.innerText = `Sorry this giveaway is done!`;
  }
};

const count = setInterval(timeRemains, 1000);

// Run
timeRemains();
