"use client";
import logopng from "../../public/logo2.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [loginData, setloginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    const { data } = await axios.post("http://localhost:3001/login", {
      email: loginData.email,
      password: loginData.password,
    });
    if (data?.user) {
      localStorage.setItem("uid", data.user.id);
      router.push("/");
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
        <Image
          src={logopng}
          alt="logo"
          style={{ width: "100%", height: "40vh" }}
        />
      </div>
      <div className="login">
        <input
          className="input"
          placeholder="E-mail"
          onChange={(e) => {
            setloginData((prev) => ({ ...prev, email: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Password"
          onChange={(e) => {
            setloginData((prev) => ({ ...prev, password: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <button className="bttn2" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Page;
