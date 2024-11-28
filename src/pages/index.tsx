import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeadAppTitle from "@/components/HeadAppTitle";
import { NextPageWithLayout } from "@/models";
import HomeComponent from "@/components/Home";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeadAppTitle title="Home" />
      <HomeComponent />
    </>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;
