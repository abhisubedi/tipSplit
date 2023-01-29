import { calcTipPerPerson } from "./utils";

test("Should calculate total with tip", () => {
  const total = calcTipPerPerson(200, 10, 2);
  expect(total).toBe("10.00");
});
