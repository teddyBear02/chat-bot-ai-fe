import React from "react";
import RegisterComponent from "@/components/Auth/RegisterComponent";
import HeadAppTitle from "@/components/HeadAppTitle";

const RegisterPage = () => {
  return (
    <>
      <HeadAppTitle title="Register" />
      <RegisterComponent />
    </>
  );
};

export default RegisterPage;
