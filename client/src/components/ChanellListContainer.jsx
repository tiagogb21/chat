import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import { RiHospitalFill } from "react-icons/ri";

const sideBar = () => {
  <section className="channel-list__sidebar">
    <article className="channel-list__sidebar__icon1">
      <article className="icon1__inner">
        <RiHospitalFill width="30" />
      </article>
    </article>
    ;
  </section>;
};

export default function ChanellListContainer() {
  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
