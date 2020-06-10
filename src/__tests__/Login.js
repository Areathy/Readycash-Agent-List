const multiply = (x, y) => x * y;



test('Multiply function', () => {
  expect(multiply(10, 20)).toBe(200)
  expect(multiply(5, 20)).toBe(100)
})