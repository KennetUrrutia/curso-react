import { createSlice } from 'Ï@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'name',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter ++
    },
  }
})
export const { increment, decrement, incrementByAmount } = todoSlice.actions