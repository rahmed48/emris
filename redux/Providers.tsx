"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
// import { reduxStore } from "@/lib/redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
