import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import logopng from "../../public/ht.png";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   axios.get("http://localhost:8000/users", {headers : {"x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU3MmVhMjc2NTk4MzNiZmVkZWQ3ODJlIiwiZW1haWwiOiJuZXd1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTcwMjAzMjUzNywiZXhwIjoxNzAyMDM5NzM3fQ.9shZw8BPUoVsj9WKIs6sNrsMw-l4cqO9lLOeUuLMv_o"}}).then((res) => console.log(res));
  //   // axios.post("http://localhost:8000/users", {}).then((res) => console.log(res));

  //   // fetch === axios
  // }, []);

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
          className="imgcss"
          src={logopng}
          alt="logo"
          // style={{ width: "100%", height: "40vh" }}
        />
      </div>
      <div className="main2">
        <div className="title2">Welcome</div>
        <div className="title">いらっしゃいませ</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link className="bttn" href="/signup">
            Sign up
          </Link>
          <Link className="bttn2" href="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

// css => class
// component => reuseable component #0952e3
