import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { todoService } from '../../services/todo.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  value:string='';

  constructor(private taskServ:todoService){

  }

  addTask(){
    this.taskServ.onCreateTask(this.value);
  }
}
