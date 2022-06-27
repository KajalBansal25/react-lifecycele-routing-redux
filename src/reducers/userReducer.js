import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
// import { changeStatus } from "../actionCreator/actions";

const initialState = {
  name: "kajal",
  age: 23,
  status: "coder",
};

// method 1
// export default (state = initialState, action) => {
//   {
//     if (action.type === "UPDATE_AGE") {
//       return { ...state, age: action.payload };
//     }
//     return state;
//   }
// };

// method 2
// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_AGE", (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(changeStatus, (state, action) => {
//     state.status = action.payload;
//   });
// });

export const fetchUserName = createAsyncThunk("fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res2 = await res.json();
  return res2[Math.floor(Math.random() * 10)].name;
});

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchUserName.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
    [fetchUserName.pending]: (state, action) => {
      state.name = "Loading...";
    },
    [fetchUserName.rejected]: (state, action) => {
      state.name = "try again";
    },
  },
});

export const { updateName, updateAge, updateStatus } = userReducer.actions;
export default userReducer.reducer;
