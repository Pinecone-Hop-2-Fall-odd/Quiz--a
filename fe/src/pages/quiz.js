"use client";
import logopng from "../../public/qzht.png";
import logopng2 from "../../public/htpf.png";
import plus from "../../public/plus.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BACK_END_URL } from "@/common/back-end-url";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// const categories = [
//   { _id: "123", title: "Anime" },
//   { _id: "124", title: "Sport" },
// ];

// const hello = {
//   question: "",
// 0: { answer: "", isCorrect: false },
// 1: { answer: "", isCorrect: false },
// 2: { answer: "", isCorrect: false },
// 3: { answer: "", isCorrect: false },
// };

const Page = () => {
  const [id, setId] = useState("");
  const router = useRouter();
  const [data, setData] = useState("");
  const [categories, setCategories] = useState([]);
  const [quiz, setQuiz] = useState({
    image: "",
    category: "",
    question: "",
    0: { answer: "", isCorrect: false },
    1: { answer: "", isCorrect: false },
    2: { answer: "", isCorrect: false },
    3: { answer: "", isCorrect: false },
  });
  const [checkBox, setCheckBox] = useState();

  // const [cte]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async () => {
    getAllCategories();
    try {
      await axios
        .post(
          `${BACK_END_URL}/category`,
          {
            category: quiz.category,
          },
          {
            headers: { "x-access-token": localStorage.getItem("token") },
          }
        )
        .then((res) => {
          if (res.data.message === "success") {
            // router.push("/");
          }
        });
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };

  console.log("quiz gfh", quiz);
  const handleSave = async () => {
    try {
      const res = await axios.post(
        `${BACK_END_URL}/quiz`,
        {
          image: quiz.image,
          category: quiz.category,
          question: quiz.question,
          answers: [
            {
              answer: quiz[0].answer,
              isCorrect: quiz[0].isCorrect,
            },
            {
              answer: quiz[1].answer,
              isCorrect: quiz[1].isCorrect,
            },
            {
              answer: quiz[2].answer,
              isCorrect: quiz[2].isCorrect,
            },
            {
              answer: quiz[3].answer,
              isCorrect: quiz[3].isCorrect,
            },
          ],
        },
        {
          headers: { "x-access-token": localStorage.getItem("token") },
        }
      );
      if (res.data.message === "success") {
        setQuiz({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCategories = async () => {
    const result = await axios.get(`${BACK_END_URL}/categories`);
    setCategories(result.data.data);
  };

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

  useEffect(() => {
    getAllCategories();
  }, []);

  function handleInputvalue(index, value) {
    setQuiz((prev) => ({
      ...prev,
      [index]: { ...prev[index], answer: value },
    }));
  }
  function handleCheckBox(index) {
    setQuiz((prev) => ({
      ...prev,
      [index]: { ...prev[index], isCorrect: true },
    }));

    Object.keys(quiz)
      .filter(
        (key) =>
          key !== "question" &&
          key != index &&
          key !== "category" &&
          key !== "image"
      )
      .forEach((key) => {
        setQuiz((prevData) => ({
          ...prevData,
          [key]: { ...prevData[key], isCorrect: false },
        }));
      });
  }
  function category(value) {
    console.log("value", value);
    setQuiz((prev) => ({ ...prev, category: `${value}` }));
  }

  function handleImage(value) {
    setQuiz((prev) => ({ ...prev, image: `${value}` }));
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
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
          <h3 className="title2"></h3>
        </div>
        <div className="ht1">
          <Link href="/main1">Back to home page</Link>
          <Link href="/login">Log out</Link>
        </div>
      </div>
      <div className="body1">
        <div className="category">
          <select
            className="sel"
            onChange={(e) => {
              category(e.target.value);
            }}
          >
            <option>...</option>
            {categories.map((category) => {
              return <option value={category._id}>{category.category}</option>;
            })}
          </select>
          <React.Fragment>
            <Image
              className="plus"
              src={plus}
              alt="logo"
              onClick={handleClickOpen}
            />

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>Add category</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="categoryName"
                  // label="Email Address"
                  // type="email"
                  fullWidth
                  variant="standard"
                  onChange={(e) => {
                    category(e.target.value);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAdd}>Add</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </div>
        <div className="body2">
          <input
            value={quiz?.question || ""}
            className="input1"
            placeholder="Question"
            onChange={(e) => {
              setQuiz((prev) => ({ ...prev, question: e.target.value }));
            }}
          />
          <input
            className="input1"
            value={quiz.image}
            placeholder="Image url"
            onChange={(e) => {
              handleImage(e.target.value);
            }}
          />
        </div>
        <div className="body2">
          <div className="div2">
            <input
              value={quiz[0]?.answer || ""}
              className="input1"
              placeholder="Answer1"
              onChange={(e) => handleInputvalue(0, e.target.value)}
            />
            <input
              value={0}
              type="checkBox"
              className="chkbx"
              checked={checkBox == 0}
              onChange={(e) => {
                setCheckBox(e.target.value);
                handleCheckBox(0);
              }}
            />
          </div>
          <div className="div2">
            <input
              value={quiz[1]?.answer || ""}
              className="input1"
              placeholder="Answer2"
              onChange={(e) => {
                handleInputvalue(1, e.target.value);
              }}
            />
            <input
              value={1}
              type="checkBox"
              className="chkbx"
              checked={checkBox == 1}
              onChange={(e) => {
                setCheckBox(e.target.value);
                handleCheckBox(1);
              }}
            />
          </div>
          <div className="div2">
            <input
              value={quiz[2]?.answer || ""}
              className="input1"
              placeholder="Answer3"
              onChange={(e) => {
                handleInputvalue(2, e.target.value);
              }}
            />
            <input
              value={2}
              type="checkBox"
              className="chkbx"
              checked={checkBox == 2}
              onChange={(e) => {
                setCheckBox(e.target.value);
                handleCheckBox(2);
              }}
            />
          </div>
          <div className="div2">
            <input
              value={quiz[3]?.answer || ""}
              className="input1"
              placeholder="Answer4"
              onChange={(e) => {
                handleInputvalue(3, e.target.value);
              }}
            />
            <input
              value={3}
              type="checkBox"
              className="chkbx"
              checked={checkBox == 3}
              onChange={(e) => {
                setCheckBox(e.target.value);
                handleCheckBox(3);
              }}
            />
          </div>
        </div>
        <button className="bttn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
