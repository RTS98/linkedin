import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../api/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please add your full name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoUrl: profilePicture,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePicture,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          value={name}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={profilePicture}
          type="text"
          placeholder="Profile Picture Url"
          onChange={(e) => setProfilePicture(e.target.value)}
        ></input>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={login}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
