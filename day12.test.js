const { add, multiple } = require(`./day12`);

test(`test add function`, () => {
  expect(add(10, 5)).toBe(15);
});

test(`test multiple function`, () => {
  expect(multiple(10, 5)).toBe(50);
});
