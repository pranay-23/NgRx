import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

export const canActivate=()=>{
    const authServ=inject(AuthService)
    const router=inject(Router)

    if(authServ.isAuthenticated() && authServ.hasAccess){
        return true;
    }
    else if(authServ.isAuthenticated() && !authServ.hasAccess){
        alert("You dont have access");
        return false;
    }
    else{
        alert("You are not logged in")
        router.navigate(['/login']);
        return false;
    }
}