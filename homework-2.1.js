function isPrimeNumber(number) {
  if (number < 2 ) {
      return false;
  }

  if (number === 2) {
      return true;
  }

  for(i = 2; i < Math.sqrt(number) + 1; ++i) {
      if (number % i == 0) {
          return false;
      }
  }

  return true;
}


function getPrimeNumbersList(nubmersCount) {
  let result = [];
  let number = 2;
  while ( result.length < nubmersCount) {
      if (isPrimeNumber(number)) {
          result.push(number);
      }
      ++number;
  }
  return result;
}


function main() {
  let numbersCount = process.argv[2];

  if(numbersCount == undefined) {
      console.log("undefined numbers count");
      return;
  }

  numbersCount = parseInt(numbersCount)
  if(isNaN(numbersCount)) {
      console.log("numbers count not number");
      return;
  }

  primeNumbers = getPrimeNumbersList(nubmersCount);

  console.log(primeNumbers);
}

main();
