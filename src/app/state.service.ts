import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state = new Subject<boolean>();

  constructor() {
    this.state.next(false);
  }
  setState(newState: boolean){
    this.state.next(newState);
  }

  getState(){
    return this.state;
  }

}
