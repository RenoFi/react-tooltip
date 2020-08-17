import omit from "./omit";

describe("omit", () => {
  it("returns correct result", () => {
    expect(omit({ a: "a", b: "b", c: "c" }, "a", "b")).toEqual({ c: "c" });
  });
});
