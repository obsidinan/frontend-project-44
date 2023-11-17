import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const generateExpression = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      throw new Error('Unknown state!');
  }
};

const getOperator = () => {
  const operationValues = ['*', '+', '-'];
  const operator = operationValues[getRandomInRange(0, 2)];
  return operator;
};

const generateRound = () => {
  const operator = getOperator();
  const randomNum1 = getRandomInRange(1, 30);
  const randomNum2 = getRandomInRange(1, 30);

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = String(generateExpression(operator, randomNum1, randomNum2));

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
