import { sample, random } from 'lodash';

const Operators = {
  'add': '+',
  'add_inverse': '-',
  'subtract': '-',
  'subtrace_inverse': '+',
  'divide': '/',
  'divide_inverse': '*',
  'multiply': '*',
  'multiply_inverse': '/'
};

class MathFacts {

  constructor() {
    this.operators = ['add'];
    this.numbers = [1, 2, 3, 4, 5, 6];
    this.digitCount = Array.from(Array(9), (v, i) => i + 1);
    this.questionCount = 10;
  }

  setParameters = (params = {}) => {
    this.operators = params.operators || ['add'];
    this.numbers = params.numbers || [1, 2, 3, 4, 5, 6];
    this.digitCount = params.digitCount || Array.from(Array(9), (v, i) => i + 1);
    this.questionCount = params.count || 10;
  }

  getMath = () => {
    return ['a', 'b'];
  }

  getMathSentances = () =>{
    let sentances = {};

    for (let i = 1; i <= this.questionCount; i++) {
      sentances[i] = this.buildSentance();
    }
    return sentances;
  }

  addition = () => {
    const answer = sample(this.numbers);
    const x = answer - random(0, answer);
    const y = answer - x;
    const question = [x, '+', y, '=', answer];

    return { question, answer };
  }

  subraction = () => {
    const answer = sample(this.numbers);
    const x = answer + random(0, answer);
    const y = answer + x ;

    return [x, '-', y, '=', answer];
  }

  buildSentance = () => {

    const operator = sample(Operators);
    let problem;

    switch (operator) {
      case 'add':
        problem = this.addition();

        break;

      default:
        problem = {question: [], answer: ''};
    }

    const { question, answer } = problem;

    return { question, answer };
  }
}

export default MathFacts;
