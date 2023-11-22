import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./features/login/Login";
import SideBar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./components/widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {user == null ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
