"use client";
import qzph from "../../public/ttn.png";
import logopng from "../../public/ht4.png";
import logopng2 from "../../public/htpf.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [answerStyle, setAnswerStyle] = useState(false);
  const datas = [
    { answer: "Animals", isCorrect: false },
    { answer: "Aliens", isCorrect: false },
    { answer: "Gaint Humans", isCorrect: true },
    { answer: "Pets", isCorrect: false },
  ];
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
          <h3 className="title2">Good luck</h3>
        </div>
        <div className="ht1">
          <div>Make new quiz</div>
          <Link href="/login">Log out</Link>
        </div>
      </div>
      <div className="dv">
        <div className="quiz">
          <Image src={qzph} alt="ttn" className="imgcss2"></Image>
          Titans are:
        </div>
        <div className="quiz">
          {datas.map((data) => {
            return (
              <button
                onClick={() => setAnswerStyle(true)}
                className={`${
                  answerStyle
                    ? `${data.isCorrect ? "btnCorrect" : "btnWrong"}`
                    : "btn3"
                } `}
              >
                {data.answer}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <button className="bttn4">Next Question</button>
      </div>
    </div>
  );
};

export default Page;
