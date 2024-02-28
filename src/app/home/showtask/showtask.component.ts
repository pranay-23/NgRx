import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { todoService } from '../../services/todo.service';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-showtask',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './showtask.component.html',
  styleUrl: './showtask.component.css'
})
export class ShowtaskComponent implements OnInit{
  tasks:string[] =["task1","task2","task3"]

  constructor(private taskServ:todoService){

  }
  ngOnInit(): void {
      this.taskServ.createTask.subscribe((value:string)=>{
        this.tasks.push(value);
      });
  }

  del(id:number){
    console.log(id);
    this.tasks.splice(id,1);
  }

  comp(id:number){
    document.querySelectorAll(".items")[id].classList.toggle("done");
  }
}
