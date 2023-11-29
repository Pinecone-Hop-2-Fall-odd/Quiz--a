import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Image from "../../public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const s1 = {
    backgroundImage: "aqua",
    width: "100%",
    height: "100vh",
  };
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => console.log(res));
  }, []);
  return (
    <div style={s1}>
      <Image src="logo.png" alt="logo" width="64px" height="64px" />
    </div>
  );
}
