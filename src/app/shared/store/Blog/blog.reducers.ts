import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addBlog, addBlogsuccess, delBlog, delBlogsuccess, loadBlog, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogsuccess } from "./blog.actions";
import { BlogModel } from "./blog.model";

const _blogReducer=createReducer(blogState,
    on(loadBlog,(state)=>{
        return{
            ...state
        }
    }),
    on(loadBlogSuccess,(state,action)=>{
        return{
            ...state,
            bloglist:[...action.bloglist],
            errorMsg:''
        }
    }),
    on(loadBlogFail,(state,action)=>{
        return{
            ...state,
            bloglist:[],
            errorMsg:action.Errortext
        }
    }),
    // on(addBlog,(state,action)=>{
    //     const _blog={...action.bloginput};
    //     _blog.id=state.bloglist.length+1;
    //     return{
    //         ...state,
    //         bloglist:[...state.bloglist,_blog]
    //     }
    // }),
    on(addBlogsuccess,(state,action)=>{
        const _blog={...action.bloginput};
        return{
            ...state,
            bloglist:[...state.bloglist,_blog]
        }
    }),
    on(updateBlogsuccess,(state,action)=>{
        const _blog={...action.bloginput};
        const updatedBlog=state.bloglist.map((blog)=>{
            return _blog.id===blog.id?_blog:blog
        });
        return{
            ...state,
            bloglist:updatedBlog
        }
    }),
    on(delBlogsuccess,(state,action)=>{        
        const updatedBlog=state.bloglist.filter((data:BlogModel)=>{
            return data.id!==(action.id).toString();
        });
        return{
            ...state,
            bloglist:updatedBlog
        }
    }),
    )

export function blogReducer(state:any,action:any){
    return _blogReducer(state,action);
}