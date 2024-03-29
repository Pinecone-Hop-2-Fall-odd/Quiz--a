"use client";

import { useSearchParams } from "next/navigation";
import qzph from "../../../public/ttn.png";
import logopng from "../../../public/ht4.png";
import logopng2 from "../../../public/htpf.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACK_END_URL } from "@/common/back-end-url";
import Link from "next/link";

// searchParams => quizId
const Page = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [answerStyle, setAnswerStyle] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState([]);
  const [quizAnswer, setQuizAnswer] = useState();
  const [num, setNum] = useState(0);
  const [final, setFinal] = useState(0);
  const params = useSearchParams();
  const urlID = params.get("category");
  console.log(urlID);

  async function getData() {
    if (urlID) {
      const { data: response } = await axios.get(
        `${BACK_END_URL}/quiz/${urlID}`
      );
      console.log("response.quizzes", response.quizzes);
      setQuizQuestion(response.quizzes);
    }
  }
  console.log("quizQuestion", quizQuestion);

  useEffect(() => {
    try {
      getData();
    } catch {
      alert("aldaatai huselt");
    }
  }, [urlID]);

  // axios => quizId

  // const i = 1;
  // const data2 = [
  //   [{ question: "Titans are:" }],
  //   [{ question: "Who is the main protagonist of the story?" }],
  //   [{ question: "How many seasons are there of AoT?" }],
  //   [{ question: "Whom did Eren lost?" }],
  //   [{ question: "Name the three districts?" }],
  //   [{ question: "The walls of the districts were:" }],
  //   [{ question: "Mikasa joined:" }],
  //   [{ question: "How many years did the walls protected humans?" }],
  //   [{ question: "What were the Titans doing?" }],
  //   [{ question: "Historia became the queen by killing her:" }],
  // ];

  // const datas = [
  //   [
  //     { answer: "Animals", isCorrect: false },
  //     { answer: "Aliens", isCorrect: false },
  //     { answer: "Gaint Humans", isCorrect: true },
  //     { answer: "Pets", isCorrect: false },
  //   ],
  //   [
  //     { answer: "Erwin Smith", isCorrect: false },
  //     { answer: "Mikasa ackerman", isCorrect: false },
  //     { answer: "Eren Yeager", isCorrect: true },
  //     { answer: "Jean Kirstein", isCorrect: false },
  //   ],
  //   [
  //     { answer: "1", isCorrect: false },
  //     { answer: "2", isCorrect: false },
  //     { answer: "3", isCorrect: false },
  //     { answer: "4", isCorrect: true },
  //   ],
  //   [
  //     { answer: "His sister", isCorrect: false },
  //     { answer: "His brother", isCorrect: false },
  //     { answer: "His father", isCorrect: false },
  //     { answer: "His mother", isCorrect: true },
  //   ],
  //   [
  //     { answer: "Maria, Rose, and Hina", isCorrect: true },
  //     { answer: "Saria, Rose, and Sina", isCorrect: false },
  //     { answer: "Maria, Tulip, and Sina", isCorrect: false },
  //     { answer: "Maria, Rose, and Sina", isCorrect: false },
  //   ],
  //   [
  //     { answer: "10-meters tall", isCorrect: false },
  //     { answer: "20-meters tall", isCorrect: false },
  //     { answer: "40-meters tall", isCorrect: false },
  //     { answer: "50-meters tall", isCorrect: true },
  //   ],
  //   [
  //     { answer: "Police", isCorrect: false },
  //     { answer: "Military", isCorrect: false },
  //     { answer: "Detective agency", isCorrect: true },
  //     { answer: "A restaurant", isCorrect: false },
  //   ],
  //   [
  //     { answer: "50 years", isCorrect: false },
  //     { answer: "100 years", isCorrect: true },
  //     { answer: "150 years", isCorrect: false },
  //     { answer: "500 years", isCorrect: false },
  //   ],
  //   [
  //     { answer: "Drinking all the water", isCorrect: false },
  //     { answer: "Eating animals", isCorrect: false },
  //     { answer: "Eating humans", isCorrect: true },
  //     { answer: "None of these", isCorrect: false },
  //   ],
  //   [
  //     { answer: "Brother", isCorrect: false },
  //     { answer: "Mother", isCorrect: false },
  //     { answer: "Father", isCorrect: true },
  //     { answer: "Sister", isCorrect: false },
  //   ],
  // ];

  useEffect(() => {
    if (window) {
      const id = localStorage.getItem("uid");
      setId(id);
      axios
        .get(`${BACK_END_URL}/user`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((response) => setData(response.data.data.name));
    }
  }, [id]);

  if (num == 10) {
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
        <Link href="/quiz">Make new quiz</Link>
        <Link href="/login">Log out</Link>
      </div>
    </div>
    <div className="dv3">
    <div className="final">
      {final}/{quizQuestion.length}
    </div>
    <button className="bttn" href="/main1">Back to main page</button>
    </div>
  </div>)
  }

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setFinal((prev) => (prev += 1));
    }
    setAnswerStyle(true);
    setNum(num + 1)
  }
  console.log(final)
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
          <Link href="/quiz">Make new quiz</Link>
          <Link href="/login">Log out</Link>
        </div>
      </div>
      <div className="dv">
        <div className="quiz2">
          <Image
            src={quizQuestion[num]?.image}
            alt=""
            width={200}
            height={50}
            className="imgcss2"
          />
          {/* {?.map((data) => { */}
          <div> {quizQuestion[num]?.question} </div>
          {/* })} */}
        </div>
        <div className="quiz">
          {quizQuestion[num]?.answers.map((data) => {
            return (
              <button
                onClick={() => handleAnswer(data.isCorrect)}
                className={"btn3"}
              >
                {data.answer}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
