var jacobobject = {
 firstname: "Jacob",
 lastname: "Straub",
 age: 20,
 LikesTravel: true,
 favoritemovies: ["batman","spider-man2"]
}
var weather2 = {
    temperature: 70,
    conditions: "rainy.",
    sunriseTime: "7:01 AM",
    sunsetTime: "8:00 PM.",
    highTemperatures: [84, 80, 86, 80, 90, 91],
    lowTemperatures: [54, 54, 64, 57, 68, 66],
}

var highaverage = (weather2.highTemperatures[0] + weather2.highTemperatures[1] + weather2.highTemperatures[2] + weather2.highTemperatures[3] + weather2.highTemperatures[4] + weather2.highTemperatures[5]) / 6;
var lowaverage = (weather2.lowTemperatures[0] + weather2.lowTemperatures[1] + weather2.lowTemperatures[2] + weather2.lowTemperatures[3] + weather2.lowTemperatures[4] + weather2.lowTemperatures[5]) / 6;
var highaveragerounded = Math.round(highaverage);
var lowaveragerounded = Math.round(lowaverage);

console.log("It is currently", weather2.temperature, "degrees outside and", weather2.conditions, "The sun rose at", weather2.sunriseTime, "and will set tonight at", weather2.sunsetTime);
console.log("The high temperature for today is", weather2.highTemperatures[0], "and the low temperature for today will be", weather2.lowTemperatures[0]);
console.log("The average high temperature for this week is", highaveragerounded, "and the average low temperature for this week is", lowaveragerounded);

// var fullname = firstname +" " + lastname;
// var fullname =`${firstname} ${lastname}`;
// var temparray = [97, 55, 62, 82, 79, 91, 74, 86];
// var myweather = `my favorite temperature is ${temparray[1]} degrees`;
// var moviearray=["spiderman"];
// console.log(moviearray[0]);
// console.log(moviearray[1]);

// console.log(firstname);
// console.log(temparray[1]);
// console.log(lastname);
// console.log(age);
// console.log(LikesTravel);
// console.log(fullname);
// console.log(myweather);
// console.log(temparray.length);
console.log(jacobobject.firstname)
console.log(jacobobject.favoritemovies[1])
console.log(jacobobject.LikesTravel)
// months.splice(55,1,'may');

