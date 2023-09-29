import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
