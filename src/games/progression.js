import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const startOfProgression = getRandomInRange(1, 10);
  const arrayOfProgression = [startOfProgression];
  const lengthOfProgression = getRandomInRange(5, 15);
  const stepOfProgression = getRandomInRange(2, 5);

  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrayOfProgression[i] = arrayOfProgression[i - 1] + stepOfProgression;
  }

  return arrayOfProgression;
};

const generateRound = () => {
  const progression = generateProgression();
  const indexOfHiddenNumber = getRandomInRange(0, (progression.length - 1));

  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
