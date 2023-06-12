import { createSlice } from "@reduxjs/toolkit";

export const elementSlice = createSlice({
  name: 'element',
  initialState: [{}],
  reducers: {
    addElement: (state, action) => {
      return [...state, {
        title: action.payload.title,
        description: action.payload.description,
        percentage: action.payload.percentage
      }]
    },
    removeElement: (state, action) => {

    },
    editElement: (state, action) => {

    }
  }
})

export const {addElement, removeElement, editElement} = elementSlice.actions
export const elementReducer = elementSlice.reducer