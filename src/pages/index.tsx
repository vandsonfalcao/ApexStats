import React from "react";
import { Home } from "../components/Home";
import { HomeContextProvider } from "../context/HomeContext";

export default function Index() {
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  );
}
