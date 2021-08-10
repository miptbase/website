import React from 'react'
import Head from "next/head";
import {seo} from "../../content/home.json";
import { useRouter } from 'next/router';

const Page = (props) => {
    const {pathname} = useRouter();
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta property="og:title" content="Базовый жизненный стандарт для студентов МФТИ" />
                <meta name="og:description" content={seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url"
                    content={`https://${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`} />
                <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_DOMAIN}/OpenGraph.jpg`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>
            {props.children}
        </>

    )
}

export default Page
