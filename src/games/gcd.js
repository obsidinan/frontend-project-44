/* eslint-disable no-param-reassign */
import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const generateRound = () => {
  const randomNum1 = getRandomInRange(1, 50);
  const randomNum2 = getRandomInRange(1, 50);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(findGcd(randomNum1, randomNum2));

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
