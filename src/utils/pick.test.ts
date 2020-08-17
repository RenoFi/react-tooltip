import pick from "./pick";

describe("pick", () => {
  it("returns correct result", () => {
    expect(pick({ a: "a", b: "b", c: "c" }, "c")).toEqual({ c: "c" });
  });
});
