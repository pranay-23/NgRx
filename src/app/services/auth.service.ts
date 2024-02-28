import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../Model/user";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    isLogged:boolean=false;
    hasAccess:boolean=false;
    

    constructor(private userService:UserService){
    }

    checkUserAccess(user:User){
        if(this.isLogged){
            return user.hasAccess;
        }else{
            return false;
        }
    }

    login(username:string,password:string){
        let user=this.userService.users.find((u)=>
            u.username===username && u.password===password)

        if(user===undefined){
            this.isLogged=false;
        }else{
            this.isLogged=true;
            this.hasAccess=this.checkUserAccess(user);
        }
        return user;
    }

    logout(){
        this.isLogged=false;
    }

    isAuthenticated(){
        return this.isLogged;
    }

    
}