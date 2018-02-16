import MathFacts from '../lib/MathFacts.js';


test('default number of questions is 10', () => {
  const lib = new MathFacts();

  lib.setParameters();
  expect(lib.questionCount).toBe(10);

});

test('build 10 math questions', () =>{
  const lib = new MathFacts();
  let mathSentances = lib.getMathSentances();
  let count = Object.keys(mathSentances).length;
  expect(count).toBe(10);
  expect(count).toBe(lib.questionCount);

  const newCount = 100;
  lib.setParameters({count:newCount});
  expect(newCount).toBe(lib.questionCount);

  mathSentances = lib.getMathSentances();
  count = Object.keys(mathSentances).length;

  expect(count).toBe(lib.questionCount);


})

test('addition', () => {
  const lib = new MathFacts();


  lib.setParameters();
  const {question, answer} = lib.addition();
 
  expect(lib.questionCount).toBe(10);

  expect( eval(question.slice(0, 3).join(''))).toBe(answer)

});
