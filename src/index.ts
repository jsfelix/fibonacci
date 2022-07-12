import { Fibonacci } from './entities/Fibonacci';

async function main() {
  const args = process.argv;
  const num = +args[args.length - 1];
  if (Number.isNaN(num)) throw new Error('not a number');
  const fibonacci = new Fibonacci();
  const [...res] = fibonacci.execute(num);
  console.log(res.join(' '));
}

main();
