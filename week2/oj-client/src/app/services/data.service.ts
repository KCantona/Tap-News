import { PROBLEMS } from '../mock-problems';
import { Problem } from '../models/problem.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getProblems(): Problem[] {
    this.http.get("api/v1/problems")
      .toPromise()
      .then(res: Response) => {
        this.problemSource.asObservable();
      }

  }

  getProblem(id: number): Problem {
    return this.problems.find((problem) => problem.id === id);
  }

  addProblem(problem: Problem): void {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
