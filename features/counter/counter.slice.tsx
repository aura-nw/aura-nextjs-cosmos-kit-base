import { createSlice, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface counterState {
  counter: number
}

const initialState: counterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.counter++
    },
    decrease: (state) => {
      state.counter--
    },
    changeByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    }
  }
})
const counterReducer = counterSlice.reducer

export const { increase, decrease, changeByAmount } = counterSlice.actions
export const increseAsync = (amount: number) => (dispatch: ThunkDispatch<any, any, any>) => {
  setTimeout(() => {
    dispatch(changeByAmount(amount))
  })
}
export const selectCounter = (state: RootState) => state.counter.counter
export default counterReducer
