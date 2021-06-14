import React, { Component } from 'react'
import { attributes} from '../content/home.json';

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
                    <Media media={media}/>
                    <Feedback feedback={feedback} />
                </>
            </Page>
        )
    }
}
