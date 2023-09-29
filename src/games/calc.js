import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const expression = (operator, randomNum1, randomNum2) => {
  switch (operator) {
    case '*':
      return String(randomNum1 * randomNum2);
    case '+':
      return String(randomNum1 + randomNum2);
    case '-':
      return String(randomNum1 - randomNum2);
    default:
      return '0';
  }
};

const generateRound = () => {
  const arrayOfOperations = ['*', '+', '-'];

  const operator = arrayOfOperations[getRandomInRange(0, 2)];
  const randomNum1 = getRandomInRange(1, 30);
  const randomNum2 = getRandomInRange(1, 30);

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = expression(operator, randomNum1, randomNum2);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
