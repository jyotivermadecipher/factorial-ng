import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FactorialService {
  constructor(private http: HttpClient) {
  }

  calculatefactorial(data): Observable<any> {
    return this.http.get(environment.apiUrl + 'getFactorial?number=' + data);
  }

}
