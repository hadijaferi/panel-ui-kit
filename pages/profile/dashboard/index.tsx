import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      Layout: ILayouts.PROFILE,
    },
  };
};

const DashboardPage: FC = () => {
  return (
    <div className="card">
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
      <br /> new line
    </div>
  );
};

export default DashboardPage;
