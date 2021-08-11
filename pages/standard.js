import React, { useRef } from 'react'
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import { seoMain, donation } from '../content/home.json';
import Page from "../components/Page";
import Header from "../components/Header";
import Donation from "../components/Donation";
import ErrorComponent from "../components/ErrorComponent";
import Footer from "../components/Footer";
import {menu} from "../content/menu.json";
import {seo, standard, compositionStandard, standardGoal, distribution } from '../content/standard.json';
import stats from "../content/stats.json";
import StandardComponent from "../components/StandardComponent";
import CompositionStandard from "../components/CompositionStandard";
import StandardGoal from "../components/StandardGoal";
import StandardDistribution from "../components/StandardDistribution";
import Head from "next/head";

const Standard = () => {
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
                <Header header={header} menu={menu} scrollToDonation={toDonation}/>
                <StandardComponent standard={standard}/>
                <CompositionStandard composition={compositionStandard} />
                <StandardGoal goal={standardGoal}/>
                <StandardDistribution distribution={distribution}/>
                <Donation donation={donation} refDonation={donationRef} stats={stats}/>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Standard