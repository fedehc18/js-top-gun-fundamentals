console.log('HELLO PEOPLE')


/* Primitive data types */

/* Strings */
const userName = "Maria";
/* String ('maria')*/

const trueValue = String(true);
console.log(typeof trueValue);

const personName = 'Federico';
const character = personName.charAt(0)
/* console.log(character) */
//console.log


const nameAndLocation = personName.concat(', Medellin')
personName[0] = 'Z';

const personLastName = 'Herrera';
const personLastNameToUpperCase = personLastName.toUpperCase();
const city = 'MEDELLIN';
const cityLowerCase = city.toLowerCase();
const greetings = 'hey you';
const greetingsToTrim = greetings.trim();

const fullName = personName + ' ' + personLastName;

const newName = `Maria ${personLastName}`;
/*console.log('ol'.length)*/

const myInteger = 40;
const negativeInteger = -40;
const myFloating = 40.55;
const myNegativeFloating = -40.55;
const hexadecimal = 0xfff;
const myBinary = 0010001;
const integerToExponencial = myInteger.toExponential(3);
const myIntegerToString = myInteger.toString();
const myNumDecimals = myInteger.toFixed(2);
const myAbsolute = Math.abs(negativeInteger);
const myRandomNumber = Math.floor(Math.random() * 9999);
const numBig = 999999999999999
const myGreatNumber = BigInt(5645564)
/* Math.abs(myGreatNumber) type error*/

const userIsMarried = true;

const userHasChildren = null;


console.log(typeof userHasChildren);

const mySymbol = Symbol('ID');
const myNewSymbol = Symbol('dog')
const mySymbol2 = Symbol.for('userName');




//console.log(Object.getOwnPropertyNames(user));
//console.log(mySymbol2 === Symbol.for('userName'))





const user = {
    [mySymbol]: 56456,
    [myNewSymbol]: 'firulais',
    userName: 'Maria',
    age: 20


}


const isUserMarried = 'isUserMarried';
delete globalThis.alert;
user.address = 'calle 49 #30';
user['genre'] = 'female';
user[isUserMarried] = false;



Object.defineProperty(user, 'hasChildren', {
    value: true,
    configurable: false


});

delete user.age;
console.log(user);

//falsy values
// false
// 0
// -0
//0n
//''
//null
//undefined
//NaN


const candidate = {
  name: "Carlos",
  age: 15,
  pointAverage: 18,
};

function isAgeRight(age) {
  const MAX_AGE = 40;
  const MIN_AGE = 18;

  if (typeof age !== "number") {
    console.log("Error: it has to be a number");
    return false
  }

  if (age && age < MIN_AGE) {
    console.log(
      `The user is ${MIN_AGE - age} years younger than the minimum age limit`
    );
    return false
  } else if (age > MAX_AGE) {
    console.log(
      `The user is ${age - MAX_AGE} years older than the maximun age limit`
    );
    return false
  }
  console.log("user is available fot the scholarship");
  return true
}

function isPointAverageRight(pointAverage) {
  const MIN_AVERAGE = 17;
  const MAX_AVERAGE = 20;

  let isRightAverage = true;

  if (pointAverage > MAX_AVERAGE) {
    console.log("There is an issue with the point average");
    isRightAverage = false;
  } else if (pointAverage < MIN_AVERAGE) {
    console.log(
      `point average is ${
        MIN_AVERAGE - pointAverage
      } is less than the minimun required`
    );
    isRightAverage = false;
  }

  return isRightAverage;
}

function canTheUserHasTheScholarship(userCandidate) {
  if (
    !userCandidate.hasOwnProperty("age") ||
    !userCandidate.hasOwnProperty("pointAverage")
  ) {
    return "Some data is missing";
  }

  return (isPointAverageRight(userCandidate.pointAverage) && isAgeRight(userCandidate.age)) 
                        ? `${userCandidate.name} got the scholarship` 
                        : `${userCandidate.name} did not get the scholarship`;
}

console.log("**********************");
console.log(canTheUserHasTheScholarship(candidate));

//console.log(isAgeRight(candidate.age))








/*console.log(personName)
console.log(nameAndLocation)*/