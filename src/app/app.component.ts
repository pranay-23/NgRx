import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from './counter/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './counter/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './counter/customcounter/customcounter.component';
import { CounterComponent } from './counter/counter.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { MatInput } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuHeaderComponent,BlogComponent,HomeComponent,RouterLink,
  NgFor,HttpClientModule,MatInput,MatFormFieldModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Project';
  constructor(private userServ:UserService){

  }
  ngOnInit(): void {
      this.userServ.getUsers();
  }
}
