import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import todoReducer from "./reducer/todo";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, todo: todoReducer },
});

export default store;
