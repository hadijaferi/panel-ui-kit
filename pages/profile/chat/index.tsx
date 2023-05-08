import React, { FC } from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import getDeviceTypeWithUser from "../../../utils/getDeviceTypeWithUser";
import { DeviceTypes } from "../../../src/infrastructure/Models/Theme/IDeviceTypes";

const ChatDesktopContainer = dynamic(
  () => import("../../../src/Modules/Chat/Desktop/Desktop"),
  {
    ssr: false,
  },
);

const ChatMobileContainer = dynamic(
  () => import("../../../src/Modules/Chat/Mobile/ChatMobileContainer"),
  {
    ssr: false,
  },
);

interface IChatPageProps {
  isMobile: boolean;
}

const ChatPage: FC<IChatPageProps> = props => {
  if (props.isMobile) {
    return <ChatMobileContainer />;
  }
  return <ChatDesktopContainer />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const isMobile = getDeviceTypeWithUser(context.req) === DeviceTypes.Mobile;

  return {
    props: {
      Layout: isMobile ? ILayouts.DEFAULT : ILayouts.PROFILE,
      isMobile,
    },
  };
};

export default ChatPage;
