import bg from "../assets/valentines-bg.svg";
import { useState } from "react";

function Hidden() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: url(${bg}) no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            background: rgba(255, 255, 255, 0.2); /* Transparent white */
            backdrop-filter: blur(15px) saturate(180%); /* Blurry glass effect */
            -webkit-backdrop-filter: blur(15px) saturate(180%);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 700px;
            width: 100%;
            transition: transform 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
            color: #d32f2f;
            margin-bottom: 20px;
          }
          .btn {
            background: linear-gradient(to right, #ff416c, #ff4b2b);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
          }
          .btn.yes{
            margin-bottom: 10px;
          }
          .btn:hover {
            background: linear-gradient(to right, #ff4b2b, #ff416c);
            transform: scale(1.05);
          }
          .message {
            font-size: 22px;
            color: #e91e63;
            font-weight: bold;
            animation: pop 0.5s ease-in-out;
            margin-bottom: 10px;
          }
          .mb-0 {
          margin-bottom: 0;
          }
          @keyframes pop {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .input-container {
            margin-top: 15px;
          }
          .input-box {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ff4b2b;
            border-radius: 10px;
            outline: none;
          }
          .display-message {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #ff416c;
          }
        `}
      </style>

      <div className="container">
        {!showQuestion ? (
          <>
            <div>
              <h1>My Valentine’s Message 💌</h1>
              <p className="message">
                From the moment I met you, my world became brighter.
                Your smile warms my heart, and your kindness inspires me every day.
                On this special day, I just want you to know how much you mean to me.
                Will you make my Valentine’s Day even more special? ❤️
              </p>
              <button className="btn" onClick={() => setShowQuestion(true)}>
                Continue 💕
              </button>
            </div>
          </>
        ) : !accepted ? (
          <>
            <h1>Will you be my Valentine? ❤️</h1>
            <button className="btn yes" onClick={() => setAccepted(true)}>
              Yes! 💖
            </button>
            <p className="message mb-0">Wala kang no choice</p>
          </>
        ) : (
          <p className="message mb-0">Yay! You made my day! 🥰</p>
        )}
      </div>
    </>
  );
}

export default Hidden;
