// Code your solution here
const findMatching =  (drivers, driverName) => drivers.filter(name => driverName.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, startsWith) => drivers.filter(name => name.slice(0, startsWith.length) === startsWith)

const matchName = (drivers, driverName) => drivers.filter(driver => driver.name === driverName)
