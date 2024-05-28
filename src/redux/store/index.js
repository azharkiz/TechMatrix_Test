import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../epics";
import addReduce from "../reducer/addReduce";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    locations: addReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

epicMiddleware.run(rootEpic);

export default store;
