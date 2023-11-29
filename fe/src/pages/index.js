import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import logopng from "../../public/logo2.png";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => console.log(res));
  }, []);

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
      <div className="main2">
        <div className="title">Welcome</div>
        <div style={{display:"flex", gap:"20px"}}>
          <button className="bttn">Sign up</button>
          <button className="bttn2">Log in</button>
        </div>
      </div>
    </div>
  );
}

// css => class
// component => reuseable component #0952e3
