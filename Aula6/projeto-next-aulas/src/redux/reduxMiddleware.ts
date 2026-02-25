import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  console.log("Previous State:", store.getState());
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

export default loggerMiddleware;
