import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";

const getCounterState=createFeatureSelector<CounterModel>('counter');

export const getcounter=createSelector(getCounterState,(state)=>{
    return state.counter;
})
export const getchannelname=createSelector(getCounterState,(state)=>{
    return state.channelName;
})