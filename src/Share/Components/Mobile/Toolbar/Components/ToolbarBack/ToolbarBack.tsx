import React, { FC } from "react";
import { useRouter } from "next/router";

export const ToolbarBack: FC = props => {
  const router = useRouter();
  return <div onClick={router.back}>{props.children}</div>;
};
