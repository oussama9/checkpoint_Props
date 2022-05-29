import React from "react";
import Profile from "./profile/Profile";
import userImg from "./images/user.jpg";
import userImg2 from "./images/user2.jpg";
import "./App.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="John Doe"
        bio="Hello , my name is John Doe and i like web development"
        profession="Full-Stack js Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="Jane Doe"
        bio="Hello , my name is Jane Doe and i like music , i write songs , teach and play the piano"
        profession="Music Teacher"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg2}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
