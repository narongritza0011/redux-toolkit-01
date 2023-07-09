import { useState } from "react";
//redux  สำหรับเปลี่ยนค่าใน store
import { useDispatch } from "react-redux";
import { login, logout } from "../store/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    _id: "64a5bc59ce72ba76a13a6038",
    first_name: "dew",
    last_name: "kumpakping",
    email: "admin@gmail.com",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhNWJjNTljZTcyYmE3NmExM2E2MDM4IiwiaWF0IjoxNjg4OTAzNDk3LCJleHAiOjE2ODg5MTA2OTd9.Z1aLumBJi2eZFIas81C-LC-I5y4-uO23aQsASPp9n1s",
    role: "admin",
  });

  const handleLogin = () => {
    dispatch(login(user));
  };

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Home;
