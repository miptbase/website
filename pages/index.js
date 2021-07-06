import React, { useRef } from 'react'
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
import style from "../components/Goal/goal_.module.scss";
import Button from "../components/ui/Button";


const Home = () => {
    const donationRef = useRef();
    const toDonation = () => {
        donationRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <Page>
            <>
                <Header   header={header} menu={menu} scrollToDonation={toDonation}/>
                <HomeTop
                    scrollToDonation={toDonation}
                    top={top}
                />
                <Features
                    features={features}
                />
                <Goal goal={goal} scrollToDonation={toDonation}/>
                <Donors donors={donors} donorsPerson={donorsPerson}/>
                <Media media={media}/>
                <Donation donation={donation} refDonation={donationRef}/>
                <Footer   footer={footer} menu={menu} feedback={feedback}/>
                {/*<Feedback feedback={feedback} />*/}
            </>
        </Page>
    )
}

export default Home
