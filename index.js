// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));


console.log(drivers);
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));

function createFareMultiplier(multiplier) {
     return function(fare) {
        return fare * multiplier
     };
}
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));

const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12));

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction (drivers);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));







