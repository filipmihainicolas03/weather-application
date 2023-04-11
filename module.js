

export const weekDayNames = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
/**
  * @param {number} dateUnix Unix date in seconds
  * @param {number} timezone Timezone shift from UTC in seconds
  * @returns {string} Date String. formate: "Sunday 10, Jan"
  */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayName[date.getUTCDay()];
    const monthName = monthName[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}
/**
  * @param {number} timeUnix
  * @param {number} timezone
  * @returns {string}
  */


export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours(); 
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`; 
}

/**
  * @param {number} timeUnix Unix date in seconds
  * @param {number} timezone Timezone shift from UTC in seconds
  * @returns {string} Time string. formate: "HH/AM/PM"
  */


export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours(); 
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${period}`;
}

export const aqiText = {
  1: {
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable"
  },
  3: {
    level: "Moderate",
    message: "Members of sensitive groups may experience health effects"
  },
  4: {
    level: "Poor",
    message: "Everyone may begin to experience health effects"
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions"
  }
}