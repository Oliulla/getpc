import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const MonitorPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Monitor</title>
            </Head>
            <section>This is pc Monitor page</section>
        </>
    );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};