import sinon from "sinon";
import { Fibonacci } from "./Fibonacci";
let sandbox: sinon.SinonSandbox;
let fibonacci: Fibonacci;
let spy: sinon.SinonSpiedInstance<Fibonacci>;

describe("Fibonacci", () => {
  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    fibonacci = new Fibonacci();
    spy = sandbox.spy(fibonacci);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should calc Fibonacci", async () => {
    const [...results] = fibonacci.execute(5);
    expect(spy.execute.callCount).toEqual(6);
    const { args } = spy.execute.getCall(2);
    const expectedResults = [0, 1, 1, 2, 3];
    const expectedParams = Object.values({
      input: 3,
      current: 1,
      next: 2,
    });
    expect(args).toStrictEqual(expectedParams);
    expect(results).toStrictEqual(expectedResults);
  });
});
