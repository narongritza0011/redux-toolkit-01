import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "it store",
  user: [],
  loading: false,
};

export const itSlice = createSlice({
  name: "itStore",
  initialState: initialState,
  reducers: {},
});

//export ฟังชั่น ออกไปใช้
// export const { login, logout } = itSlice.actions;
export default itSlice.reducer;
