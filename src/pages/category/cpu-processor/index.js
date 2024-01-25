import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const CPUOrProcessorPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | CPU-Processor</title>
            </Head>
            <section>This is pc cpu-processor page</section>
        </>
    );
};

export default CPUOrProcessorPage;

CPUOrProcessorPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};