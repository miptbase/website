import React, {useRef} from 'react'
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqComponent from "../components/FaqComponent";
import {menu} from "../content/menu.json";
import {donation, seoMain} from '../content/home.json';
import { faq, seo } from '../content/faq.json';
import Head from "next/head";
import Donation from "../components/Donation";
import stats from "../content/stats.json";

const Faq = () => {
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
                <Header header={header} menu={menu} color='black' buttonColor='orange' scrollToDonation={toDonation}/>
                <FaqComponent faq={faq}/>
                <Donation donation={donation} refDonation={donationRef} stats={stats}/>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Faq
