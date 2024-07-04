import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducerAndMiddlewares";
import { TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";



export const store=configureStore({
    reducer,
    devTools: process.env.NODE_ENV !=="production"
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector
export const useAppDispatch=useDispatch<AppDispatch>
