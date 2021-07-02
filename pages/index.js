import React, { Component } from 'react'
import { top, features, donors, goal, media, donation} from '../content/home.json';
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import { menu } from '../content/menu.json';
import { feedback } from '../content/feedback.json';
import donorsPerson from '../content/donors.json'

import HomeTop from "../components/HomeTop";
import Features from "../components/Features";
import Donation from "../components/Donation";
import Donors from "../components/Donors";
import Goal from "../components/Goal";
import Media from "../components/Media";
import Feedback from "../components/Feedback";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends Component {
    render() {
        return (
            <Page>
                <>
                    <Header   header={header} menu={menu}/>
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
                    <Footer   footer={footer} menu={menu} feedback={feedback}/>
                    {/*<Feedback feedback={feedback} />*/}
                </>
            </Page>
        )
    }
}
