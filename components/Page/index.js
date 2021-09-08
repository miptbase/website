import React, { useEffect } from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';
import smoothscroll from 'smoothscroll-polyfill';


const Page = (props) => {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);
    const { pageTitle, pageDescription, innerPatch } = props;
    const { pathname } = useRouter();
    const pagePathName = pathname === '/[inner]' ? `/${innerPatch}` : pathname
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>*/}
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta property="og:type" content="website" />
                <meta property="og:url"
                    content={`https://${process.env.NEXT_PUBLIC_DOMAIN}${pagePathName}`} />
                <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_DOMAIN}/OpenGraph.jpg`} />
                <meta property="og:description" content={pageDescription} />
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <title>{pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {props.children}
        </>

    )
}

export default Page
