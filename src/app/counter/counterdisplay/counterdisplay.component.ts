import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getcounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit,OnDestroy{
  constructor(private store:Store<{counter:CounterModel}>){

  }
  counterDis!:number;
  channelName='';
  counterSub!:Subscription;
  ngOnInit(): void {
    this.store.select(getcounter).subscribe(data=>{
      this.counterDis=data;
    })
  }
  ngOnDestroy(): void {
    if(this.counterSub){
      this.counterSub.unsubscribe();
    }
  }
}
