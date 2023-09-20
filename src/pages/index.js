import RootLayout from "@/components/RootLayout";
import React from "react";

const HomePage = () => {
  return <div>This is home page</div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
