import React from "react";
import { GetServerSideProps } from "next";
import MyAddressesContainer from "../../../src/Modules/Profile/Components/MyAddresses";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      Layout: ILayouts.PROFILE,
    },
  };
};
const MyAddresses = () => {
  return <MyAddressesContainer />;
};

export default MyAddresses;
