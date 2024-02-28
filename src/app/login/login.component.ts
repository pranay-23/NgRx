import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  hide=true;
  @ViewChild('username') username:ElementRef
  @ViewChild('password') password:ElementRef

  constructor(private authServ:AuthService,
    private router:Router,private activatedRoute:ActivatedRoute,
    private userServ:UserService){

  }

  ngOnInit(): void {
      this.activatedRoute.queryParamMap.subscribe((queries)=>{
        const logout=Boolean(queries.get('logout'))
        if(logout){
          this.authServ.logout()
        }
      })

      this.userServ.getUsers()
  }

  onLogin(){
    const username=this.username.nativeElement.value;
    const password=this.password.nativeElement.value;  

    const user=this.authServ.login(username,password);
    if(user===undefined){
      alert("Wrong credentials! Try again");
    }else{
      alert("Welcome! "+user.name+" You are logged in");
      this.router.navigate(['']);
    }
  }


}
