import MathFacts from '../lib/MathFacts.js';

test('cat has an output1', () => {
  const lib = new MathFacts();

  expect(lib.wtf).toBe('WTF');

});

test('default number of questions is 10', () => {
  const lib = new MathFacts();

  lib.setParameters();
  expect(lib.questionCount).toBe(10);

});

test('addition', () => {
  const lib = new MathFacts();


  lib.setParameters();
  const {question, answer} = lib.addition();
 
  expect(lib.questionCount).toBe(10);

  expect( eval(question.slice(0, 3).join(''))).toBe(answer)

});
