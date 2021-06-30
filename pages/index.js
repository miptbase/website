import React, { Component } from 'react'
import { top, features, donors, goal, media, feedback, donation} from '../content/home.json';
import donorsPerson from '../content/donors.json'

import HomeTop from "../components/HomeTop";
import Features from "../components/Features";
import Donation from "../components/Donation";
import Donors from "../components/Donors";
import Goal from "../components/Goal";
import Media from "../components/Media";
import Feedback from "../components/Feedback";
import Page from "../components/Page";

export default class Home extends Component {
    render() {
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
                    <Donors donors={donors} donorsPerson={donorsPerson}/>
                    <Media media={media}/>
                    <Donation donation={donation}/>
                    {/*<Feedback feedback={feedback} />*/}
                </>
            </Page>
        )
    }
}
