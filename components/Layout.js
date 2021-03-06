import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title, header, footer }) {
    const showHeader = typeof header === 'undefined' ? true : header;
    const showFooter = typeof footer === 'undefined' ? true : footer;

    return (
        <div className='w-5/6 m-auto'>
            <Head>
                <title>
                    {(title ? title + ' | ' : '') + '#100DaysOfCloud'}
                </title>
                <link rel='icon' href='/favicon.png' />
            </Head>
            {showHeader && <Header />}
            <div>{children}</div>
            {showFooter && <Footer />}
        </div>
    );
}
