import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs");
  }

  createBlogs(bloginput:BlogModel){
    return this.http.post("http://localhost:3000/Blogs",bloginput).pipe((
      tap(()=>{
        this.http.get<BlogModel>("http://localhost:3000/Blogs");
      })
    ))
  }
  
  updateBlogs(bloginput:BlogModel){
    return this.http.put("http://localhost:3000/Blogs/"+bloginput.id,bloginput);
  }

  delBlogs(blogid:number){
    return this.http.delete("http://localhost:3000/Blogs/"+blogid.toString());
  }

}
