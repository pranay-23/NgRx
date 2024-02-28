import { blogReducer } from "../Blog/blog.reducers";
import { counterReducer } from "../counter.reducers";

export const AppState={
    counter:counterReducer,
    blog:blogReducer
}