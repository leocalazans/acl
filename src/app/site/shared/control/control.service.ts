import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()


export class ControlService{
  constructor(){}

  private hasdash = new BehaviorSubject<boolean>(false);
  castdash = this.hasdash.asObservable();
  
  showdash(hasdash){
    let inSession = sessionStorage.getItem('logged');

    if(inSession == 'true'){
      this.hasdash.next(true);
    }else{
      this.hasdash.next(hasdash);
      sessionStorage.setItem('logged', hasdash);
    }

  }
  
}