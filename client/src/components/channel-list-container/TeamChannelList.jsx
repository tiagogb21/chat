import React from "react";
import Connection from "./Connection";

const TeamChannelList = ({
  setToggleContainer,
  children,
  error,
  loading,
  type,
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  const checkType = type === "team" ? "Channels" : "Messages";

  if (!error) {
    return (
      <Connection text="Connection error, please wait a moment and try again." />
    );
  }

  if (loading) {
    return <Connection text={`${checkType} ...loading`} />;
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        <AddChannel
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
          type={type === "team" ? "team" : "messaging"}
          setToggleContainer={setToggleContainer}
        />
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
