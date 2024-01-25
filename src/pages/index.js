import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>GetPC | Home</title>
      </Head>
      <section>This is home page</section>
    </>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
