import { createAction, props } from "@ngrx/store";

export const increment=createAction("increment");
export const decrement=createAction("decrement");
export const reset=createAction("reset");
export const rename=createAction("rename",props<{channel:string}>());
export const customincrement=createAction("customincrement",props<{value:number,action:string}>());