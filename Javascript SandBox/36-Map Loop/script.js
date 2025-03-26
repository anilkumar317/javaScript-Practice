const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dblNumbers = numbers.map((number) => number * 2);

// console.log(dblNumbers);

// same with ForEach

let dbldNumbers2 = [];

numbers.forEach((number) => {
  dbldNumbers2.push(number * 2);
});

// console.log(dbldNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// create an Array of company name

const companyNames = companies.map((company) => company.name);

// console.log(companyNames);

// create an Array with just company and category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// console.log(companyInfo);

// create an array of the object the name and the length of each company years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years ',
  };
});

// console.log(companyYears);

// chain map method

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

// console.log(squareAndDouble);

// chaining different methods

const evenDoubled = numbers
  .map((number) => number % 2 === 0)
  .map((number) => number * 4);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });

// console.log(squareAndDouble2);

// Chaining differnt multiple methods

const evenDoubled2 = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

// console.log(evenDoubled2);
