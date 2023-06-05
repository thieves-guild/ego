import { createSlice } from "@reduxjs/toolkit";

const NOT_LOGGED_IN = 'Not logged In'
const LOGGED_IN = 'logged In'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    status: NOT_LOGGED_IN
  },
  reducers: {
    logIn: (state, action) => {

    },
    logOut: (state, action) => {
      
    }
  }
})