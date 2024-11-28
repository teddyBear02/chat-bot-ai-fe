import React from "react";
import HeadAppTitle from "@/components/HeadAppTitle";
import LoginComponent from "@/components/Auth/LoginComponent";

const LoginPage = () => {
  return (
    <>
      <HeadAppTitle title="Login" />
      <LoginComponent />
    </>
  );
};

export default LoginPage;
