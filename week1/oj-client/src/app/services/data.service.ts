import { PROBLEMS } from '../mock-problems';
import { Problem } from '../models/problem.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
    return PROBLEMS.find((problem) => problem.id === id);
  }
}
