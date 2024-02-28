import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [DemoComponent,FormsModule,MatInputModule,
    MatFormFieldModule,MatButtonModule,MatIconModule,MatDatepickerModule,
    MatNativeDateModule,MatCardModule,NgIf],
  templateUrl: './age.component.html',
  styleUrl: './age.component.css'
})
export class AgeComponent {

  firstName:String='';
  middleName:String='';
  lastName:String='';

  @ViewChild('dobInput') dateOfBirth:ElementRef
  @ViewChild('currAge') currAge:ElementRef
  @ViewChild(DemoComponent,{static:true}) demoComp:DemoComponent
  @ViewChildren('fullName') fullName:QueryList<ElementRef>
  @ViewChild('name') name:ElementRef


  isSubmitted:boolean=false;

  onSubmit(){
    this.name.nativeElement.innerText+=" "+this.firstName+" "+this.middleName+" "+this.lastName;
    this.isSubmitted=true;
  }

  canExit(){
    if(this.firstName || this.middleName || this.lastName && !this.isSubmitted){
      return confirm("You have unsaved changes. Do you want to continue navigating?")
    }else{
      return true;
    }
  }

  showAge(event){
    // console.log(this.dateOfBirth.nativeElement.value);
    // let birthYear=new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currYear=new Date().getFullYear();
    let age=currYear-event.value.getFullYear();
    this.currAge.nativeElement.innerText=`You are ${age} years old`;
    
  }
}
