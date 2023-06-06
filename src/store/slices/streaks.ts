import { createSlice } from "@reduxjs/toolkit";

export const elementSlice = createSlice({
  name: 'element',
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