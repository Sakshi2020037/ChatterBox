import React, { useEffect, useRef } from "react";
import "./chat.css";
import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  console.log(text);

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Abc Xyz</span>
            <p>User Description</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consectetur voluptate, accusantium praesentium quod animi
              reprehenderit fugiat suscipit omnis quis autem velit iure repellat
              voluptatem expedita neque quia aspernatur nesciunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consectetur voluptate, accusantium praesentium quod animi
              reprehenderit fugiat suscipit omnis quis autem velit iure repellat
              voluptatem expedita neque quia aspernatur nesciunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consectetur voluptate, accusantium praesentium quod animi
              reprehenderit fugiat suscipit omnis quis autem velit iure repellat
              voluptatem expedita neque quia aspernatur nesciunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UcpJ40pFimSAqfBj4Sdu85aDRF1gpZDVRA&s"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consectetur voluptate, accusantium praesentium quod animi
              reprehenderit fugiat suscipit omnis quis autem velit iure repellat
              voluptatem expedita neque quia aspernatur nesciunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consectetur voluptate, accusantium praesentium quod animi
              reprehenderit fugiat suscipit omnis quis autem velit iure repellat
              voluptatem expedita neque quia aspernatur nesciunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
