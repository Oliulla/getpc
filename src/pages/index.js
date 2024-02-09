import RootLayout from "@/components/Layouts/RootLayout";
import HomeComponent from "@/components/__onetime_used/__home/HomeMainComponent";
import { loadSSGData } from "@/lib/loadSSGData";
import Head from "next/head";
import React from "react";

const HomePage = ({ products, categories }) => {

  return (
    <>
      <Head>
        <title>GetPC | Home</title>
      </Head>
      <section>
        <HomeComponent ssgData={{ products, categories }} />
      </section>
    </>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const products = await loadSSGData("product?limit=6")

  const categories = await loadSSGData("category")

  return { props: { products, categories } };
}
