import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const RamsPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Ram</title>
            </Head>
            <section>This is pc ram page</section>
        </>
    );
};

export default RamsPage;

RamsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};