import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  state: boolean,
}

interface UserState {
  token: string | null,
  user: User | null
}

const initialState: UserState = {
  token: localStorage.getItem("token"),
  user: null
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
    },
    tokenStillValid: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;