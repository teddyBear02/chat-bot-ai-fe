import { useEffect } from "react";
import PrivateLayout from "./PrivateLayout";
import { useSelector } from "react-redux";
import { selectAuth } from "@/stores/auth/auth.slice";
import { useRouter } from "next/router";
import { LayoutProps } from "@/models";
import { storageGet } from "@/helpers/appStorage";
import { StorageKey } from "@/constants";

const DefaultLayout = ({ children }: LayoutProps) => {
  const { push } = useRouter();

  const { user } = useSelector(selectAuth);

  useEffect(() => {
    const userStr = storageGet(StorageKey.USER);
    if (!user) {
      if (userStr && userStr.toString() !== "undefined") {
        const userData = JSON.parse(userStr);
        if (!userData) return;
      } else {
        push("/auth/login");
      }
    }
  }, [user]);

  return (
    <>
      <PrivateLayout>{children}</PrivateLayout>
    </>
  );
};

export default DefaultLayout;
