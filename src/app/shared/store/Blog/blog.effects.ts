import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { ADD_BLOG, LOAD_BLOG, addBlog, addBlogsuccess, delBlog, delBlogsuccess, loadBlog, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogsuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class BlogEffects{
    constructor(private action$:Actions,private service:MasterService){

    }

    _loadblog=createEffect(()=>
    this.action$.pipe(
        ofType(loadBlog),
        exhaustMap((action)=>{            
            return this.service.getAllBlogs().pipe(
                map((data)=>{
                    return loadBlogSuccess({bloglist:data});
                }),
                catchError((_error)=>of(loadBlogFail({Errortext:_error.message})))
            )
        })
    )
    );
    _addblog=createEffect(()=>
    this.action$.pipe(
        ofType(addBlog),
        exhaustMap((action)=>{            
            return this.service.createBlogs(action.bloginput).pipe(
                map((data)=>{
                    return addBlogsuccess({bloginput:action.bloginput});
                }),
                catchError((_error)=>of(loadBlogFail({Errortext:_error.message})))
            )
        })
    )
    );

    _updateblog=createEffect(()=>
    this.action$.pipe(
        ofType(updateBlog),
        exhaustMap((action)=>{            
            return this.service.updateBlogs(action.bloginput).pipe(
                map((data)=>{
                    return updateBlogsuccess({bloginput:action.bloginput});
                }),
                catchError((_error)=>of(loadBlogFail({Errortext:_error.message})))
            )
        })
    )
    );

    _delblog=createEffect(()=>
    this.action$.pipe(
        ofType(delBlog),
        exhaustMap((action)=>{            
            return this.service.delBlogs(action.id).pipe(
                map(()=>{
                    return delBlogsuccess({id:action.id});
                }),
                catchError((_error)=>of(loadBlogFail({Errortext:_error.message})))
            )
        })
    )
    );
}