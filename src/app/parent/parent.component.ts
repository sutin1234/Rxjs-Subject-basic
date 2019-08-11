import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  stateHide: boolean;
  constructor(public _state: StateService) { }

  ngOnInit() {
  }
  onToggle(){

    this.stateHide = !this.stateHide;
    this._state.setState(this.stateHide);
  }

}
