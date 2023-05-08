import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import TimeAgo from "react-timeago";
import { motion } from "framer-motion";
import style from "./ChatRoom.module.sass";
import tempProfile from "../../../../../../../Resources/image/defaultAvatar.jpg";
import generateClassName from "../../../../../../../Share/Helpers/Dom/generateClassName";
import { IRootState } from "../../../../../../../Share/Store/Reducer";
import setCurrentChatAction from "../../../../../Shared/Store/Actions/setCurrentChatAction";

const persianStrings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: "پیش",
  suffixFromNow: "پیش",
  seconds: "1 دقیقه",
  minute: "1 دقیقه",
  minutes: "%d دقیقه",
  hour: "1 ساعت",
  hours: "%d ساعت",
  day: "1 روز",
  days: "%d روز",
  month: "1 ماه",
  months: "%d ماه",
  year: "1 سال",
  years: "%d سال",
  wordSeparator: " ",
};

const formatter = buildFormatter(persianStrings);

interface IProps {
  id: number;
  isSelected: boolean;
}

const ChatRoom: FunctionComponent<IProps> = ({ id, isSelected }) => {
  const chatRoomData = useSelector(
    (state: IRootState) => state.chat.chats.byId[id],
  );
  const dispatch = useDispatch();

  return (
    <motion.div
      layout
      animate
      className={generateClassName([style.user, isSelected && style.active])}
      onClick={() => dispatch(setCurrentChatAction(id))}>
      <img
        src={chatRoomData.ProfileImage?.FileThumbnailUrl || tempProfile}
        alt="IMG"
        className={[style.user__image, "avatar"].join(" ")}
      />
      <div className={style.user__details}>
        <p className={style.user__details_name}>
          {chatRoomData.Title ?? "ناشناس"}
          {!!chatRoomData.UnreadMessageCount && (
            <span className={style.user__details_unreadCount}>
              {chatRoomData.UnreadMessageCount}
            </span>
          )}
          <span className={style.user__details_lastMessageTime}>
            <TimeAgo
              date={chatRoomData.LastMessage?.CreatedDate}
              formatter={formatter}
            />
          </span>
        </p>
        <span className={style.user__details_lastMessage}>
          {chatRoomData.LastMessage?.Attachment?.length ? (
            <img
              className={style.miniThumbImage}
              src={chatRoomData.LastMessage?.Attachment[0].FileMiniThumbnailUrl}
            />
          ) : (
            chatRoomData.LastMessage?.Text
          )}
        </span>
      </div>
    </motion.div>
  );
};

export default React.memo(ChatRoom);
