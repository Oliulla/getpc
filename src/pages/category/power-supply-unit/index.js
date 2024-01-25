import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const PowerSupplyUnitPage = () => {
    return (
        <>
            <Head>
                <title>GetPC | Power-supply-unit</title>
            </Head>
            <section>This is pc Power-supply-unit page</section>
        </>
    );
};

export default PowerSupplyUnitPage;

PowerSupplyUnitPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};