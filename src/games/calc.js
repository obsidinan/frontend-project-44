import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const expression = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return String(number1 * number2);
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    default:
      return '0';
  }
};

const getOperator = () => {
  const arrayOfOperations = ['*', '+', '-'];
  const operator = arrayOfOperations[getRandomInRange(0, 2)];
  return operator;
};

const generateRound = () => {
  const operator = getOperator();
  const randomNum1 = getRandomInRange(1, 30);
  const randomNum2 = getRandomInRange(1, 30);

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = expression(operator, randomNum1, randomNum2);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
