import type { RootState } from '../../store'

export const selectToken = (state: RootState) => state.user.token;
export const selectUser = (state: RootState) => state.user.user;