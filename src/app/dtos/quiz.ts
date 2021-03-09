import {Question} from './question';

export class Quiz {
  constructor(
    public id: number,
    public quizTitle: string,
    public description: string,
    public questions: Question[]) {
  }
}
