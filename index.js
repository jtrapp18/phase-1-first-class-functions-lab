// Code your solution in this file!
const returnFirstTwoDrivers = scuberDrivers => scuberDrivers.slice(0, 2)
const returnLastTwoDrivers = scuberDrivers  => scuberDrivers.slice(scuberDrivers.length-2, scuberDrivers.length)
const selectingDrivers  = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => function(fare) {return multiplier*fare}
const fareDoubler = fare => createFareMultiplier(2)(fare)
const fareTripler = fare => createFareMultiplier(3)(fare)
const selectDifferentDrivers = (drivers, cb) => cb(drivers)