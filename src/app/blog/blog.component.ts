import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../shared/store/Blog/blog.model';
import { NgFor, NgIf } from '@angular/common';
import { getblog, getbloginfo } from '../shared/store/Blog/blog.selectors';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { addBlog, delBlog, loadBlog, updateBlog } from '../shared/store/Blog/blog.actions';
import { HttpClientModule } from '@angular/common/http';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule,HttpClientModule,MatTableModule,
    MatSortModule,MatPaginatorModule,MatButtonModule,MatIconModule,MatInputModule,
    MatFormFieldModule,FormsModule,MatSortModule,MatSort,RouterLink,RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  blogForm:FormGroup;
  addBlog:boolean=false;
  editing:boolean=false;
  currentId:number;
  bloginfo!:Blogs;
  dataSource!:MatTableDataSource<any>
  displayedColumns:string[]=['id','title','description','edit','delete','view']

  @ViewChild(MatSort) sort:MatSort;

  constructor(private store:Store<{blog:BlogModel}>,private router:Router){

  }

  bloglist!:BlogModel[];
  ngOnInit(): void {
    this.store.dispatch(loadBlog())
    this.store.select(getbloginfo).subscribe((item)=>{
      // this.bloglist=item;
      this.bloginfo=item;
      this.dataSource=new MatTableDataSource(item.bloglist);
      this.dataSource.sort=this.sort;

    })

    this.blogForm=new FormGroup({
      title:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    })
  }

  onAdd(){
    this.addBlog=true;
  }

  saveBlog(){
    if(this.blogForm.valid){
      const _blogInput:BlogModel={
        id:(this.bloginfo.bloglist.length+1).toString(),
        title:this.blogForm.value.title as string,
        description:this.blogForm.value.description as string 
      }
      if(this.editing){
        _blogInput.id=(this.currentId).toString();
        this.store.dispatch(updateBlog({bloginput:_blogInput}))        
      }else{
        this.store.dispatch(addBlog({bloginput:_blogInput}))
      }
      
      // this.blogClose();
    }
  }
  blogClose(){
    this.addBlog=false;
    this.blogForm.controls['title'].setValue(null);
    this.blogForm.controls['description'].setValue(null);
  }

  editBlog(id:any){
    this.currentId=id;
    let currentData=this.bloginfo.bloglist.find((p)=>{
      return p.id===id
    });
    this.blogForm.controls['title'].setValue(currentData.title);
    this.blogForm.controls['description'].setValue(currentData.description);
    this.editing=true;
    this.addBlog=true;
  }

  delBlog(id:any){
    if(confirm("Are you sure")){
      this.store.dispatch(delBlog({id:id}));
    }
    
  }


  
}
