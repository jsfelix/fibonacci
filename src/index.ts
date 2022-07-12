import { Fibonacci } from "./entities/Fibonacci";

async function main() {
  const args = process.argv;
  const num = +args[args.length - 1];
  if (isNaN(num)) throw new Error("not a number");
  const fibonacci = new Fibonacci();
  const res: number[] = [];
  for await (const f of fibonacci.execute(num)) {
    res.push(f);
  }
  console.log(res.join(" "));
}

main();
