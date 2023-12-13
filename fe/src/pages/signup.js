"use client";
import logopng from "../../public/sgnupht.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [signUp, setsignUp] = useState({});
  const router = useRouter();

  console.log(signUp);
  const handleSignup = async () => {
    try {
      await axios
        .post("http://localhost:8000/user", {
          name: signUp.name,
          age: signUp.age,
          email: signUp.email,
          password: signUp.password,
        })
        .then((res) => {
          if (res.data.message === "success") {
            router.push("/login");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="main">
        <Image className="imgcss" src={logopng} alt="logo" />
      </div>
      <div className="login">
        <div className="title2">
          Hi there! I've never seen you before. Who are you?
        </div>
        <div className="title3">
          やあ！今まで会ったことがありません。あなたは誰ですか？
        </div>

        <input
          className="input"
          placeholder="Name"
          onChange={(e) => {
            setsignUp((prev) => ({ ...prev, name: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Age"
          onChange={(e) => {
            setsignUp((prev) => ({ ...prev, age: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="E-mail"
          onChange={(e) => {
            setsignUp((prev) => ({ ...prev, email: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setsignUp((prev) => ({ ...prev, password: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <button className="bttn" onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Page;
