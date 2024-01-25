import RootLayout from "@/components/Layouts/RootLayout";
import HomeComponent from "@/components/__onetime_used/__home/__Home_Component";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>GetPC | Home</title>
      </Head>
      <section>
        <HomeComponent />
      </section>
    </>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
