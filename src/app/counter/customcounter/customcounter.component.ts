import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';
import { getchannelname } from '../../shared/store/counter.selector';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [FormsModule,MatInputModule,MatSelectModule,MatButtonModule,MatButton],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit{

  constructor(private store:Store<{counter:CounterModel}>){

  }
  counterInput!:number;
  actionType='add';
  channelName='';
  onIncrement(){
    this.store.dispatch(customincrement({value:+this.counterInput,action:this.actionType}));
  }
  ngOnInit(): void {
    this.store.select(getchannelname).subscribe(data=>{
      this.channelName=data;
    })
  }
}
