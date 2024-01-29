import RootLayout from "@/components/Layouts/RootLayout";
import HomeComponent from "@/components/__onetime_used/__home/__Home_Component";
// import { loadSSGData } from "@/lib/loadSSGData";
import Head from "next/head";
import React from "react";

const HomePage = ({ products, categories }) => {
  // console.log(products, categories)

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
  // Fetch products
  const res1 = await fetch("http://localhost:3000/api/product?limit=6");
  const { data: products } = await res1.json();
  // const { products } = productData ?? {};

  // Fetch categories
  const res2 = await fetch("http://localhost:3000/api/category");
  const { data: categories } = await res2.json();
  // const { categories } = catData ?? {};

  return { props: { products, categories } };
}
