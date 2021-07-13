import React from 'react'
import Head from "next/head";

const Page = (props) => {
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
                <meta property="og:type" content="website" />
                <meta property="og:url" content="//miptbase.netlify.app/OpenGraph.jpg" />
                <meta property="og:image" content="//miptbase.netlify.app/OpenGraph.jpg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
            </Head>
            {props.children}
        </>

    )
}

export default Page
