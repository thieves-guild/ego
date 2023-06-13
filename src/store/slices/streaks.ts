import { createSlice } from "@reduxjs/toolkit";

export const streakSlice = createSlice({
  name: 'streak',
  initialState: [{}],
  reducers: {
    createStreak: (state, action) => {
      return [...state, {
        title: action.payload.title,
        description: action.payload.description,
        percentage: action.payload.percentage
      }]
    },
    removeStreak: (state, action) => {

    },
    editStreak: (state, action) => {

    }
  }
})

export const {createStreak, removeStreak, editStreak} = streakSlice.actions
export const streakReducer = streakSlice.reducer