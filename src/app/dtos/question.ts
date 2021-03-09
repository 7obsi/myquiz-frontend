import {Answer} from './answer';

export class Question {
  constructor(
    public id: number,
    public questionText: string,
    public answers: Answer[]) {
  }
}
