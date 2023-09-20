import Head from "next/head";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <Head>
        <title>GetPC | Not Found Page</title>
        <meta name="Error" description="Boilagbe | Not Found Page" />
      </Head>
      <>
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p>
        <Link
          href="/"
          className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </>
    </div>
  );
};

export default ErrorPage;
