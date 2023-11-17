const getRandomInRange = (min = 0, max = 10) => Math.floor(min + Math.random() * (max - min + 1));

export default getRandomInRange;
