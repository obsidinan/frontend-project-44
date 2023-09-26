import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const startOfProgression = getRandomInRange(1, 10);
  const arrayOfProgression = [startOfProgression];
  const lengthOfProgression = getRandomInRange(5, 15);
  const stepOfProgression = getRandomInRange(2, 5);
  const indexOfHiddenNumber = getRandomInRange(0, lengthOfProgression - 1);

  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrayOfProgression[i] = arrayOfProgression[i - 1] + stepOfProgression;
  }

  const answer = String(arrayOfProgression[indexOfHiddenNumber]);
  arrayOfProgression[indexOfHiddenNumber] = '..';

  const question = arrayOfProgression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
