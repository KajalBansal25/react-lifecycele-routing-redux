// export default (status) => {
//   return { type: "UPDATE_STATUS", payload: status };
// };

import { createAction } from "@reduxjs/toolkit";

export const changeStatus = createAction("UPDATE_STATUS");
export const fetchName = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    dispatch({ type: "UPDATE_NAME", payload: result[0].name });
  };
};

// redux toolkit has inbuilt middleware i.e. thunk ;to fetch the network api's or to perform async task
// the advantage of using action creator is,we are able to use the middleware automatically i.e thunk
