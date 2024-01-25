import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const MotherboardPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Motherboard</title>
            </Head>
            <section>This is pc motherboard page</section>
        </>
    );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};