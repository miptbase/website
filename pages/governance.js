
import React, { useRef } from 'react'
import Page from "../components/Page";
import { seoMain, donation } from '../content/home.json';
import {header} from "../content/header.json";
import {menu} from "../content/menu.json";
import Header from "../components/Header";
import Donation from "../components/Donation";
import stats from "../content/stats.json";
import Footer from "../components/Footer";
import GovernanceTop from "../components/GovernanceTop";
import GovernanceMain from "../components/GovernanceMain";
import { footer } from "../content/footer.json";
import { top, board, seo, fund, company } from "../content/governance.json";
const Governance = () => {
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
                <GovernanceTop top={top}/>
                <GovernanceMain board={board} fund={fund} company={company}/>
                <Donation donation={donation} refDonation={donationRef} stats={stats}/>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Governance
