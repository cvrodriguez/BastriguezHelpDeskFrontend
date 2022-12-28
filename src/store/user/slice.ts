import { createSlice } from "@reduxjs/toolkit";

type User = {
  user_id: number,
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
  isAuthenticated:boolean,
  usersList: User[]
  userResponsable: User | null,
  userAssignedTo: User | null,
  userDetail: User | null
}

const initialState: UserState = {
  usersList:[],
  user: null,
  userResponsable:null,
  userAssignedTo:null,
  userDetail:null,
  roles: [],
  isAuthenticated:false
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
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
    usersFetched: (state, action) => {
      state.usersList = action.payload;
    },
    userResponsableFetched:(state, action) =>{
      state.userResponsable = action.payload
    },
    userAssignedFetched:(state, action) =>{
      state.userAssignedTo = action.payload
    },
    userByIdFetched:(state, action) =>{
      state.userDetail = action.payload
    }
  },
});

export const { loginSuccess, logOut, tokenStillValid, usersFetched,userResponsableFetched, userAssignedFetched, userByIdFetched } = userSlice.actions;

export default userSlice.reducer;