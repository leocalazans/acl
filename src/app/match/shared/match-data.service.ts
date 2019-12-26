import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { match } from './match';

@Injectable({
  providedIn: 'root'
})
export class matchDataService {
  private matchSource = new BehaviorSubject({ match: null, key: '' });
  currentmatch = this.matchSource.asObservable();

  constructor() { }

  changematch(match: match, key: string) {
    this.matchSource.next({ match: match, key: key });
  }
}