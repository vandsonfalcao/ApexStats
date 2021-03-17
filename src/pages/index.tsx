import React from "react";
import { Home } from "../components/Home";
import { HomeContextProvider } from "../context/HomeContext";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>ApexStats</title>
      </Head>
      <HomeContextProvider>
        <Home />
      </HomeContextProvider>
    </>
  );
}
