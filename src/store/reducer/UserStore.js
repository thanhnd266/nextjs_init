import { createSlice } from "@reduxjs/toolkit";

const UserStore = createSlice({
  name: "UserStore",
  initialState: {
   userDetail: null,
   userToken: null
  },
  reducers: {
    setUserDetail(state, action) {
      state.userDetail = action.payload.userDetail;
      state.userToken = action.payload.userToken;
    },
  },
});
export const { setUserDetail } = UserStore.actions;
export default UserStore.reducer;
