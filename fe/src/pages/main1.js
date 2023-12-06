"use client";
import logopng from "../../public/htmain.png";
import logopng2 from "../../public/htpf.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    if (window) {
      const id = localStorage.getItem("uid");
      setId(id);
      axios
        .get(`http://localhost:8000/user/${id}`)
        .then((response) => setData(response.data.data.name));
    }
  }, [id]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="head">
        <div className="ht2">
          <div className="ht3">
            <Image className="imgcss3" src={logopng2} alt="pf" />
            <div>{data}</div>
          </div>
        </div>
        <div className="ht">
          <Image className="imgcss2" src={logopng} alt="logo" />
          <h3 className="title2">Choose your quiz</h3>
        </div>
        <div className="ht1">
          <div>Make new quiz</div>
          <Link href="/login">Log out</Link>
        </div>
      </div>
      <div>
      <Link className="an" href="/anm">
          1. Anime
        </Link>
      </div>
    </div>
  );
};

export default Page;
