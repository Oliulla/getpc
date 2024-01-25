import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const PcBuilderPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Pc-builder</title>
            </Head>
            <section>This is pc builder page</section>
        </>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
