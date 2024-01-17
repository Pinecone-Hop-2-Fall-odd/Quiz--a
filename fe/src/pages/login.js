"use client";
import logopng from "../../public/htlogin.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { BACK_END_URL } from "@/common/back-end-url";

const Page = () => {
  const [loginData, setloginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await axios
        .post(
          `${BACK_END_URL}/login`,
          {
            email: loginData.email,
            password: loginData.password,
          },
          { headers: { "Access-Control-Allow-Origin": true } }
        )
        .then((response) => {
          if (response.data?.token) {
            localStorage.setItem("token", response.data.token);
            router.push("/main1");
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
        <div className="title2">Welcome back</div>
        <div className="title">おかえり</div>

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
          type="password"
          onChange={(e) => {
            setloginData((prev) => ({ ...prev, password: e.target.value }));
            console.log(e.target.value);
          }}
        />
        <Link className="bttn2" href="" onClick={handleLogin}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Page;
