"use client";
import logopng from "../../public/htmain.png";
import logopng2 from "../../public/htpf.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { BACK_END_URL } from "@/common/back-end-url";

const Page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (window) {
      const id = localStorage.getItem("uid");
      setId(id);
      axios
        .get(`${BACK_END_URL}/user`, {
          headers: { "x-access-token": localStorage.getItem("token") },
        })
        .then((response) => setData(response.data.data.name));
    }
  }, [id]);

  const getAllCategories = async () => {
    const result = await axios.get(`${BACK_END_URL}/categories`);
    setCategories(result.data.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

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
          <Link href="/quiz">Make new quiz</Link>
          <Link href="/login">Log out</Link>
        </div>
      </div>
      <div>
        {categories.map((category) => {
          return (
            <Link className="an" href={`/main?category=${category._id}`}>
              <div value={category._id}>{category.category}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
