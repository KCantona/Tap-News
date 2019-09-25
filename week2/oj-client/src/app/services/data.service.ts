import { PROBLEMS } from '../mock-problems';
import { Problem } from '../models/problem.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  problems: Problem[] = PROBLEMS;

  constructor() { }

  getProblems(): Problem[] {
    return this.problems;
  }

  getProblem(id: number): Problem {
    return this.problems.find((problem) => problem.id === id);
  }

  addProblem(problem: Problem): void {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
