import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class todoService{
    createTask=new Subject();

    onCreateTask(value:string){
        this.createTask.next(value);
    }
}

