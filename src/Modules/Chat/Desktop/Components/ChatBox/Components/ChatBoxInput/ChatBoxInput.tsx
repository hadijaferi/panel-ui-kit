import React, { FunctionComponent, useRef, useState } from "react";
import style from "./ChatBoxInput.module.sass";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../../../Share/Components/Common/Button/Button";
import { IChatState } from "../../../../../Shared/Models/Store/IChatState";
import { useChatSocket } from "../../../../../Shared/Helpers/useChatSocket";
import { IBaseProps } from "../../../../../../../Share/Models/IBaseProps";
import generateClassName from "../../../../../../../Share/Helpers/Dom/generateClassName";

const minMaxRows = { minRows: 1, maxRows: 5 };
const handleInputResize = (event: React.FormEvent<HTMLTextAreaElement>) => {
  const textAreaLineHeight = 21;
  const { minRows, maxRows } = minMaxRows;
  const previousRows = event.currentTarget.rows;
  event.currentTarget.rows = minRows;
  const currentRows = Math.floor(
    event.currentTarget.scrollHeight / textAreaLineHeight,
  );
  if (currentRows === previousRows) event.currentTarget.rows = currentRows;
  if (currentRows >= maxRows) {
    event.currentTarget.rows = maxRows;
    event.currentTarget.scrollTop = event.currentTarget.scrollHeight;
  }
  return { currentRows, maxRows };
};

interface OwnProps extends IBaseProps{
  currentChatRoomId: IChatState["currentChatId"];
}

type Props = OwnProps;

let typingTimer: NodeJS.Timeout | undefined;
let timer: NodeJS.Timeout | undefined;

const ChatBoxInput: FunctionComponent<Props> = ({ currentChatRoomId, className } ) => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { isTyping, sendMessage, uploadFile } = useChatSocket();
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { currentRows, maxRows } = handleInputResize(event);
    setValue(event.currentTarget.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
    if (timer === undefined) {
      timer = setInterval(() => {
        isTyping({ ChatId: currentChatRoomId });
      }, 1000);
    }
    if (typingTimer !== undefined) {
      clearTimeout(typingTimer);
    }
    typingTimer = setTimeout(() => {
      if (timer) {
        clearInterval(timer);
      }
      timer = undefined;
    }, 1000);
  };

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ ChatId: currentChatRoomId, Message: value });
    }
    setValue("");
    setRows(minMaxRows.minRows);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form
      className={generateClassName([
        style.chatBoxInputForm,
        className
      ])}
      name="chat_input_form"
      id="chat_input_form">
      <textarea
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="chat_input"
        id="chat_input"
        rows={rows}
        placeholder="پیام خود را اینجا بنویسید ..."
      />

      <Button
        theme="iconic"
        className={style.chatBoxInputForm__button}
        onClick={handleSendMessage}>
        <input
          type="file"
          name="chatFileInput"
          id="chatFileInput"
          accept="image/*"
          className={style.inputUpload}
          onChange={event => {
            if (event.target.files?.length) {
              uploadFile(event.target.files[0], currentChatRoomId);
              event.target.value = "";
            }
          }}
        />
        <Icon name="m-image" size="largest"/>
      </Button>

      <Button
        theme="iconic"
        className={style.chatBoxInputForm__button}
        onClick={handleSendMessage}>
        <Icon
          name="send"
          size="largest"
          className={style.chatBoxInputForm__button_send}
        />
      </Button>
    </form>
  );
};

export default ChatBoxInput;
