import { combineReducers } from "@reduxjs/toolkit";
import { memoListSlice } from "./slices/memoListSlice";

const rootReducer = combineReducers({
  memoList: memoListSlice.reducer,
});

export default rootReducer;
