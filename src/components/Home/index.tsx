import React, { useEffect, useState } from "react";
import { Layout } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const HomeComponent = () => {
  return (
    <>
      <div className={cx(["wrapper-home"])}>
        <Layout></Layout>
      </div>
    </>
  );
};

export default HomeComponent;
