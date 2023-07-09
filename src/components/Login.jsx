import React from "react";
//redux
import { useSelector } from "react-redux";

const Login = () => {
  //เข้าถึงข้อมูลใน store ด้วย useSelector
//   const { userStore } = useSelector((state) => ({ ...state }));
  //   console.log(userStore);
  const all  = useSelector((state) => ({ ...state }));
    console.log(all);

  return (
    <div>
      <h1>Login</h1>
      {/* <p>data user : {userStore.value}</p>
      <br />
      {userStore.loading ? (
        <p>loading...</p>
      ) : (
        <p>ค่าเป็น false </p>
      )} */}
    </div>
  );
};

export default Login;
