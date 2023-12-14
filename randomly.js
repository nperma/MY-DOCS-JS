/**
 * @module QuestSystem
 * @param {number} value - The base value to be calculated.
 * @param {number} percent - The percentage to be applied to the value.
 * @param {number} radiusPercent - Optional, radius percentage for rounding the random value (default: 0).
 * @returns {number} - The generated random value.
 * © Nperma
 */
function calculateRandom(value, percent, radiusPercent = 0) {

  const minValue = Math.max(0.01 * percent * value, 100);
  
  const maxValue = value;
  
  const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;


  return radiusPercent > 0 ? Math.floor(randomValue * Math.min(radiusPercent * 0.01, 1)) : Math.floor(randomValue);
}

const price = 7500;
const percent = 10;
const radiusPercent = 39;

const result = calculateRandom(price, percent, radiusPercent);

console.log(result);
