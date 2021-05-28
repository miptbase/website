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
