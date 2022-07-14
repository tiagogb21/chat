import React from "react";
// import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import SideBar from "./SideBar";

const cookies = new Cookies();

export default function ChannelListContainer() {
  return (
    <section>
      <SideBar />
    </section>
  );
}
