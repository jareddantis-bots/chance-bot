/**
 * Flips a coin.
 * @return 'Heads!' or 'Tails!'
 */
export function flipCoin() {
  const result = Math.random() > 0.5 ? 'Heads!' : 'Tails!';
  return result;
}
