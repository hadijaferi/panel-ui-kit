import React from "react";
import Head from "next/head";
import MallContainer from "../../src/Modules/Mall/Container";

const index = () => {

  return (
    <>
      <Head>
        <title>good bye</title>
      </Head>
      <MallContainer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      namespacesRequired: ["mall"],
    },
  };
}

export default index;
