import type { RootState } from '../../store'


export const selectUser = (state: RootState) => state.user.user;
export const selectUserRole = (state: RootState) => state.user.roles;
export const selectUserAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUsersList = (state: RootState) => state.user.usersList;
export const selectUserDetail = (state: RootState) => state.user.userDetail;
