import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [RouterLink,MatToolbarModule,MatButtonModule,NgIf],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent{

  constructor(public authService:AuthService){
    
  }

  onLogout(){
    alert("You have logged out.");
  }

}
