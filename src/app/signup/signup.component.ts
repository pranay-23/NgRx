import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { User } from '../Model/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormField,MatInputModule,MatButtonModule,MatIconModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  hide=true;
  hide2=true
  name='';
  username='';
  password='';
  confirmpassword='';

  constructor(private service:UserService,private router:Router){

  }

  onSignUp(){
    if(this.name=='' || this.username=='' || this.password=='' || this.confirmpassword==''){
      alert("Fill all the details");
    }else{
      if(this.password===this.confirmpassword){
        this.service.signUp(this.name,this.username,this.password);
      }else{
        alert("Please enter the same password");
      }
    }
    
    
  }
}
