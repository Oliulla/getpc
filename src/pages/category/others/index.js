import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const OthersComponentsPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Others</title>
            </Head>
            <section>This is pc Others page</section>
        </>
    );
};

export default OthersComponentsPage;

OthersComponentsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};