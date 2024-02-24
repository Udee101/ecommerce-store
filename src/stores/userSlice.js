import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload
      state.isAuthenticated = true
    }
  }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer
