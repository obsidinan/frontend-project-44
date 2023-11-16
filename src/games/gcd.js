/* eslint-disable no-param-reassign */
import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateRound = () => {
  const randomNum1 = getRandomInRange(1, 50);
  const randomNum2 = getRandomInRange(1, 50);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(findGcd(randomNum1, randomNum2));

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
