import React, { FunctionComponent } from "react";
// import Link from "next/link";
import { useSelector } from "react-redux";
import style from "./ChatBoxHeader.module.sass";
// import Button from "../../../../../../../Share/Components/Common/Button/Button";
// import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import IsTypingAnimation from "./IsTypingAnimation/IsTypingAnimation";
import { IChatState } from "../../../../../Shared/Models/Store/IChatState";
import { IRootState } from "../../../../../../../Share/Store/Reducer";

interface OwnProps {
  currentChatRoomId: IChatState["currentChatId"];
}

type Props = OwnProps;

const ChatBoxHeader: FunctionComponent<Props> = ({ currentChatRoomId }) => {
  const user = useSelector((state: IRootState) => {
    const clientId = state.chat.clientInfo.Id;
    const userId = state.chat.chats.byId[currentChatRoomId].Users.filter(
      _user => _user.Id !== clientId,
    )[0].Id;
    return state.chat.users.byId[userId];
  });

  const renderStatus = () => {
    if (user.IsTyping) {
      return (
        <>
          در حال نوشتن
          <IsTypingAnimation />
        </>
      );
    }
    return user.IsOnline ? "آنلاین" : "آفلاین";
  };
  return (
    <div className={style.chatBoxHeader}>
      <img
        alt="Profile"
        src={user.ProfileImage?.FileThumbnailUrl}
        className={[style.avatar, "avatar"].join(" ")}
      />
      <div className={style.details}>
        <p>{`${user.FirstName} ${user.LastName}`}</p>
        <span>{renderStatus()}</span>
      </div>
      {/* <Link href="/">
        <Button theme="bordered" className={style.toVitrinButton}>
          ورود به ویترین
          <Icon name="left" />
        </Button>
       </Link> */}
    </div>
  );
};

export default ChatBoxHeader;
