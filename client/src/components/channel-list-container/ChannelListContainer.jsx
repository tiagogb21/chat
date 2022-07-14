import React from "react";
import { useChatContext } from "stream-chat-react";
// import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import SideBar from "./SideBar";

const cookies = new Cookies();

const channelFilter = (channels, type) => {
  return channels.filter((channel) => channel.type === type);
};

export default function ChannelListContainer({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
  setToggleContainer,
}) {
  const { client } = useChatContext();

  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  const filters = {
    members: {
      $in: [client.userID],
    },
  };

  return (
    <section>
      <SideBar />
    </section>
  );
}
