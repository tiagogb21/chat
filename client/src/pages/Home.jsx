import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChanellListContainer, ChanellContainer } from "../components";

import "../App.css";

const client = StreamChat.getInstance(process.env.API_KEY);

export default function Home() {
  return (
    <>
      <h1>Medical Pager Chat App</h1>
      <section className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChanellListContainer />
          <ChanellContainer />
        </Chat>
      </section>
    </>
  );
}
