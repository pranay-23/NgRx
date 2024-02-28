import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { BlogComponent } from './blog/blog.component';
import { AgeComponent } from './age/age.component';
import { LoginComponent } from './login/login.component';
import { canActivate } from './services/auth.guard';
import { BlogdisplayComponent } from './blogdisplay/blogdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"counter",loadComponent:()=>import('./counter/counter.component').then((m)=>m.CounterComponent)},
    {path:"blog",component:BlogComponent,canActivate:[canActivate],},
    {path:"blog/:id",component:BlogdisplayComponent},
    {path:"age",component:AgeComponent,canDeactivate:[(comp:AgeComponent)=>{return comp.canExit()}]},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"**",component:PagenotfoundComponent},
];
