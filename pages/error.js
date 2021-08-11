import React, { useRef } from 'react'
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import {donation, seoMain} from '../content/home.json';
import Page from "../components/Page";
import Header from "../components/Header";
import Donation from "../components/Donation";
import ErrorComponent from "../components/ErrorComponent";
import Footer from "../components/Footer";
import {menu} from "../content/menu.json";
import {seo, content, image } from '../content/error.json';
import stats from "../content/stats.json";

const Error = () => {
    const donationRef = useRef();
    const toDonation = () => {
        donationRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <Page
            pageTitle={seo.title ? seo.title : seoMain.title}
            pageDescription={seo.description ? seo.description : seoMain.description}
        >
            <>
                <Header header={header} menu={menu}  scrollToDonation={toDonation}/>
                <ErrorComponent content={content} image={image} scrollToDonation={toDonation}/>
                <Donation donation={donation} refDonation={donationRef} stats={stats}/>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Error