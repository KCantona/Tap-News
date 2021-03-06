import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Problem } from '../models/problem.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemsSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemsSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problem/${id}`)
                     .toPromise()
                     .then((res: Response) => res.json())
                     .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    let headers = new Headers({ 'content-type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    return this.http.post('/api/v1/problems', problem, options)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }

  // error hanlder
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.body || error);
  }

}
