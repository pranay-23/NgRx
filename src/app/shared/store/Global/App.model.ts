import { BlogModel, Blogs } from "../Blog/blog.model";
import { CounterModel } from "../counter.model";

export interface AppState{
    counter:CounterModel,
    blog:Blogs
}