import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ChatBoxMessage.module.sass";
import generateClassName from "../../../../../../../../../Share/Helpers/Dom/generateClassName";
import Icon from "../../../../../../../../../Share/Components/Common/Icon/Icon";
import { IRootState } from "../../../../../../../../../Share/Store/Reducer";
import { useChatSocket } from "../../../../../../../Shared/Helpers/useChatSocket";
import deleteChatMessageAction from "../../../../../../../Shared/Store/Actions/deleteChatMessageAction";
import UploadProgress from "../UploadProgress/UploadProgress";

interface OwnProps {
  isOwned: boolean;
  children: string;
  date?: Date;
  seen?: boolean;
  image?: string | null;
  uploadFileId?: string;
  messageId: number;
}

type Props = React.HTMLProps<HTMLLIElement> & OwnProps;

const ChatBoxMessage: FunctionComponent<Props> = ({
  isOwned,
  children,
  date,
  seen,
  image,
  uploadFileId,
  messageId,
}: Props) => {
  const observer = useRef<IntersectionObserver>(null);
  const messageRef = useRef<HTMLLIElement>(null);
  const [mountImage, setMountImage] = useState(false);

  const chatUpload = useSelector(
    (state: IRootState) => state.chat.upload.byId[uploadFileId || "none"],
  );

  const dispatch = useDispatch();
  const { sendMessage, seenMessage } = useChatSocket();

  useEffect(() => {
    if (messageRef.current) {
      if (image) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        observer.current = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            if (!seen && !isOwned) {
              seenMessage({ MessageId: messageId });
            }
            setMountImage(true);
          } else {
            setMountImage(false);
          }
        });
        observer.current.observe(messageRef.current);
      } else if (!seen && !isOwned) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        observer.current = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            seenMessage({ MessageId: messageId });
          }
        });
        observer.current.observe(messageRef.current);
      }
    }
    return () => {
      if (observer.current && messageRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(messageRef.current);
        observer.current.disconnect();
      }
    };
  }, [seen]);

  useEffect(() => {
    if (chatUpload && chatUpload.progress === 100 && chatUpload.mediaId) {
      sendMessage({
        Message: "",
        ChatId: chatUpload.chatId,
        MediaId: chatUpload.mediaId,
      });

      dispatch(deleteChatMessageAction(chatUpload.fileId, chatUpload.chatId));
    }
  }, [chatUpload]);

  const renderMessageUploadImage = () => {
    if (!chatUpload) return null;
    return (
      <div className={style.uploadMessage}>
        <div
          className={style.message__content_image}
          style={{ backgroundImage: `url(${chatUpload.thumbnail})` }}
        />
        <UploadProgress percent={chatUpload.progress} />
      </div>
    );
  };

  const renderMessageImage = () => {
    if (chatUpload) {
      return renderMessageUploadImage();
    }

    if (image) {
      return mountImage ? (
        <div
          className={style.message__content_image}
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div style={{ height: 220 }} />
      );
    }

    return null;
  };

  const renderMessage = () => {
    return children;
  };

  return (
    <li ref={messageRef}>
      <div
        className={generateClassName([
          style.message,
          isOwned && style.owned,
          (image || chatUpload) && style.withImage,
        ])}>
        <div className={style.message__content}>
          {renderMessageImage()}
          {renderMessage()}
        </div>
        <span>
          {isOwned && <Icon name={seen ? "seen" : "tick"} />}
          {date
            ?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
            .replace("AM", "صبح")
            .replace("PM", "بعد از ظهر")}
        </span>
      </div>
    </li>
  );
};
export default React.memo(ChatBoxMessage);
