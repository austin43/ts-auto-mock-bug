import { createMock } from "ts-auto-mock";

interface Interface {
  a: string;
  b: number;
}

describe("a mock that", () => {
  let mock: Interface;

  beforeEach(() => {
    mock = createMock<Interface>();
  });

  it("should work", () => {
    expect(mock.a).toBe("");
  });
});
