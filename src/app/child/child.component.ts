import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public hideState: boolean;

  constructor(public _state: StateService) {
  }

  ngOnInit() {
    this._state.getState().subscribe(state => {
      this.hideState = state;
    })

  }

}
