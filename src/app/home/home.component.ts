import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewtaskComponent,ShowtaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  

}
