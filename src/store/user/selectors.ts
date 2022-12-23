import type { RootState } from '../../store'


export const selectUser = (state: RootState) => state.user.user;
export const selectUserRole = (state: RootState) => state.user.roles;
export const selectUserAuthenticated = (state: RootState) => state.user.isAuthenticated;
