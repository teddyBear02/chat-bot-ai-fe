import React from "react";
import { Provider } from "react-redux";
import { store } from "./";

export default function StoreProviders({ children }: any) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
