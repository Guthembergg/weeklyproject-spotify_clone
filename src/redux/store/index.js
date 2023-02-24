import mainReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: mainReducer });

export default store;
