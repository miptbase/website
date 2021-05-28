import Head from "next/head"
import { Component } from 'react'
import { attributes} from '../content/home.md';

import HomeTop from "../components/HomeTop";
import Features from "../components/Features";
import Donation from "../components/Donation";
import Donors from "../components/Donors";
import Goal from "../components/Goal";
import Media from "../components/Media";
import Feedback from "../components/Feedback";

export default class Home extends Component {
    render() {
        let {top, features, donors, goal, media, feedback} = attributes;
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
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

                </Head>
                <HomeTop
                    title={top.title}
                    content={top.content}
                    img={top.img}
                />
                <Features
                    features={features}
                />
                <Goal goal={goal}/>
                <Media media={media}/>
                <Donors donors={donors}/>
                <Donation/>
                <Feedback feedback={feedback} />
            </>
        )
    }
}
