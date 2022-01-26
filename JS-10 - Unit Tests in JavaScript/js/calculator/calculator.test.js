const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 2 to equal 5',() =>{
  expect(calculator.divide(10,2)).toBe(5);
});

test('divide 8 / 4 to equal 2',() =>{
  expect(calculator.divide(8,4)).toBe(2);
});

test('multiply 50 * 10 to equal 500',() =>{
  expect(calculator.multiply(50,10)).toBe(500);
});

test('multiply 7 * 9 to equal 63',() =>{
  expect(calculator.multiply(7,9)).toBe(63);
});