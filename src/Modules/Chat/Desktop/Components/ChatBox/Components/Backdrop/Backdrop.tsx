import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Backdrop.module.sass";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import { IRootState } from "../../../../../../../Share/Store/Reducer";
import setChatUploadConfirmAction from "../../../../../Shared/Store/Actions/setChatUploadConfirmAction";
import setChatUploadRejectAction from "../../../../../Shared/Store/Actions/setChatUploadRejectAction";

interface OwnProps {
  currentChatRoomId: number;
}

type Props = OwnProps;

const Backdrop: FunctionComponent<Props> = ({ currentChatRoomId }) => {
  const uploadData = useSelector((state: IRootState) =>
    Object.values(state.chat.upload.byId).find(
      value => value.chatId === currentChatRoomId && !value.confirmed,
    ),
  );

  const dispatch = useDispatch();

  const confirm = () => {
    if (uploadData) {
      dispatch(setChatUploadConfirmAction(uploadData.fileId, uploadData.file));
    }
  };

  const reject = () => {
    if (uploadData) {
      dispatch(setChatUploadRejectAction(uploadData.fileId));
    }
  };

  if (uploadData) {
    return (
      <div className={style.backdrop}>
        {uploadData.thumbnail ? (
          <img
            src={uploadData.thumbnail || ""}
            className={style.backdrop__previewContainer}
          />
        ) : (
          <div className={style.backdrop__previewContainer}>loading ...</div>
        )}
        <div className={style.backdrop__controlButtons}>
          <button onClick={() => reject()}>
            <Icon name="x" size="largest" />
          </button>
          <button onClick={() => confirm()}>
            <Icon name="tick" size="largest" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Backdrop;
