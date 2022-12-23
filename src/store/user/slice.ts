import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number,
  given_name: string,
  family_name: string,
  picture: string,
  email: string,
  role: string,
  state: boolean,
  name: string
}

interface UserState {
  user: User | null,
  roles: string[],
  isAuthenticated:boolean
}

const initialState: UserState = {
  user: null,
  roles: [],
  isAuthenticated:false
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action.payload)
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.roles = action.payload.roles;
    },
    logOut: (state, action) => {
      
      state.user = null;
      state.isAuthenticated = false
      state.roles = []
    },
    tokenStillValid: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;