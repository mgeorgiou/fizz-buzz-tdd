import Solution from './Solution'

describe('fizzBuzz Solution', () => {
  it('displays the input when the number is not fizzbuzz', () => {
    expect(Solution({ input:'' })).toBe('');
    expect(Solution({ input:'1' })).toBe('1');
    expect(Solution({ input:'2' })).toBe('2');
    expect(Solution({ input:'-1' })).toBe('-1');
    expect(Solution({ input:'-2' })).toBe('-2');
  })

  it('displays Fizz when the number is 3', () => {
    expect(Solution({input:'3'})).toBe('Fizz')
  })

  it('displays Buzz when the number is 5', () => {
    expect(Solution({input:'5'})).toBe('Buzz')
  })

  it('displays Fizz when the number is modulo of 3', () => {
    expect(Solution({input:'6'})).toBe('Fizz')
  })

  it('displays Buzz when the number is modulo of 5', () => {
    expect(Solution({input:'10'})).toBe('Buzz')
  })

  it('displays FizzBuzz when the number is modulo of both 3 & 5', () => {
    expect(Solution({input:'15'})).toBe('FizzBuzz')
  })
})
