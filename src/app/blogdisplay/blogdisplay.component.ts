import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel, Blogs } from '../shared/store/Blog/blog.model';
import { Store } from '@ngrx/store';
import { getbloginfo } from '../shared/store/Blog/blog.selectors';
import { MasterService } from '../shared/master.service';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blogdisplay',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,],
  templateUrl: './blogdisplay.component.html',
  styleUrl: './blogdisplay.component.css'
})
export class BlogdisplayComponent implements OnInit{
  id:any;
  bloginfo!:BlogModel[]
  currBlog!:BlogModel
  title:string
  description:any

  constructor(private router:ActivatedRoute,private store:Store<{blog:BlogModel}>,private service:MasterService,
    private route:Router){
    
  }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
  
    this.service.getAllBlogs().subscribe((item)=>{
      this.currBlog=item.find((blog)=>blog.id==this.id)
    })
    
  }

  goBack(){
    this.route.navigate(['/blog']);
  }

}
