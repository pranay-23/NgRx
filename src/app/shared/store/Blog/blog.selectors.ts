import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./blog.model";

const getBlogState=createFeatureSelector<Blogs>('blog');

export const getblog=createSelector(getBlogState,(state)=>{
    return state.bloglist;
})


export const getbloginfo=createSelector(getBlogState,(state)=>{
    return state;
})