import React, { Component } from 'react'
import { attributes} from '../content/home.md';

import HomeTop from "../components/HomeTop";
import Features from "../components/Features";
import Donation from "../components/Donation";
import Donors from "../components/Donors";
import Goal from "../components/Goal";
import Media from "../components/Media";
import Feedback from "../components/Feedback";
import Transfer from "../components/Transfer";
import Page from "../components/Page";

export default class Home extends Component {
    render() {
        let {top, features, donors, goal, media, feedback, transfer} = attributes;
        return (
            <Page>
                <>
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
                    <Transfer transfer={transfer}/>
                </>
            </Page>
        )
    }
}
