import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  let i = 1;
  const end = Math.sqrt(number);

  while (i <= end) {
    i += 1;
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomInRange(1, 50);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
