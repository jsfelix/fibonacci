export class Fibonacci {
  public *execute(input: number, current = 0, next = 1): Generator<number> {
    if (input === 0) return 0;
    yield current;
    yield* this.execute(input - 1, next, current + next);
    return undefined;
  }
}
