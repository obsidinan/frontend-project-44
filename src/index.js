import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const engine = (rules, generateRound) => {
  const gamerName = greeting();
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');

    if (gamerAnswer !== answer) {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${gamerName}!`);
};

export default engine;
