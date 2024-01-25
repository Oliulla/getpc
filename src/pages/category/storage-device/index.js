import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const StorageDevicePage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Storage Device</title>
            </Head>
            <section>This is pc Storage device page</section>
        </>
    );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};