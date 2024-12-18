'use client'
import { sendEmail } from "@/service/sendEmail";
import Image from "next/image";

export default function Home() {

  const handleOnClick = () => {
    console.log('send email')
    sendEmail();
  }

  return (
    <div>
      <h1>Here is the home page!!!!</h1>
      <button onClick={handleOnClick}>Send Email</button>
    </div>
  );
}
