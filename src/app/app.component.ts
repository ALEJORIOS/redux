import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './counter/counter.actions';

interface AppStore {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rivers-grove';
  counter: number;

  constructor(private store: Store<AppStore>) {
    this.counter = 10;
    this.store.subscribe(state => {
      this.counter = state.counter;
    })
  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }
  
  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
