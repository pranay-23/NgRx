import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, rename, reset } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {

  constructor(private store:Store<{counter:CounterModel}>){

  }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(rename({channel:"Hello Pranay"}))
  }
}
