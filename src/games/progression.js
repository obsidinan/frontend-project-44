import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (startOfProgression, lengthOfProgression, stepOfProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(startOfProgression + (stepOfProgression * i));
  }

  return progression;
};

const generateRound = () => {
  const startOfProgression = getRandomInRange(1, 10);
  const lengthOfProgression = getRandomInRange(5, 15);
  const stepOfProgression = getRandomInRange(2, 5);

  const progression = getProgression(startOfProgression, lengthOfProgression, stepOfProgression);
  const indexOfHiddenNumber = getRandomInRange(0, (lengthOfProgression - 1));

  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
