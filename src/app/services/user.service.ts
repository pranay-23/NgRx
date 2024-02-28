import { Injectable } from "@angular/core";
import { User } from "../Model/user";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class UserService{
    userName:User;

    users:User[]=[
    //     new User(1,'Pranay Shah','ps','12345'),
    //     new User(2,'Marry Jane','mj','12345'),
    //     new User(3,'Mark Vough','mv','12345'),
    //     new User(4,'Sarah King','sk','12345')
    ]
    user:User;

    constructor(private http:HttpClient,private router:Router){

    }

    getUsers(){
        this.http.get<User[]>('http://localhost:3000/Users').subscribe((data)=>{
            this.users=data;
        })

       return this.http.get<User[]>('http://localhost:3000/Users');
    }

    signUp(name:string,username:string,password:string){
        this.userName=this.users.find((data)=>{
            return data.username==username
        })
        
        if(this.userName===undefined){
            this.user={
                id:(this.users.length+1).toString(),
                name:name,
                username:username,
                password:password,
                hasAccess:false
            }
            this.http.post('http://localhost:3000/Users',this.user).subscribe((res)=>{
                console.log(res);
                
            });
            alert("Sign up done");
            this.router.navigateByUrl('/login');
        }
        else{
            alert("User already exists");
        }

        
        
    }


}