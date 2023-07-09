import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      // เข้าถึงค่าใน initialState เช่น ใช้ state.value
      // รับค่าเข้ามาใช้ action.payload
      state.value = "hello world in login";
      state.user = action.payload;
      state.loading = true;
    },
    logout: (state) => {
      // เข้าถึงค่าใน initialState
      state.value = "";
      // เคลียค่าใน state
      state.user = null;
      state.loading = false;
    },
  },
});

//export ฟังชั่น ออกไปใช้
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
