import React, {useCallback, useRef} from 'react'
import Page from "../components/Page";
import DonorsTop from "../components/DonorsTop";
import {seo, top, quote, honorable, proBono } from '../content/donorsPage.json';
import { seoMain, donation } from '../content/home.json';
import {header} from "../content/header.json";
import {menu} from "../content/menu.json";
import Header from "../components/Header";
import Donation from "../components/Donation";
import stats from "../content/stats.json";
import Footer from "../components/Footer";
import {footer} from "../content/footer.json";
import DonorsQuote from "../components/DonorsQuote";
import DonorsHonorable from "../components/DonorsHonorable";
import DonorsProBono from "../components/DonorsProBono";
const Donors = () => {
    const donationRef = useRef();
    const parseStat = useCallback((arr, key) =>{
        return  arr.filter(item => item.Key === key)[0].Value.replace(/,/g, '');
    }, []);

    const toDonation = () => {
        donationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const totalDonations = Math.round(Number(parseStat(stats, "Total donations")) / 1000000);

    return (
        <Page
            pageTitle={seo.title ? seo.title : seoMain.title}
            pageDescription={seo.description ? seo.description : seoMain.description}
        >
            <>
                <Header header={header} menu={menu} scrollToDonation={toDonation} buttonColor='black' color='black'/>
                <DonorsTop top={top} scrollToDonation={toDonation} totalDonations={totalDonations} />
                <DonorsQuote quote={quote} />
                <DonorsHonorable honorable={honorable}/>
                <DonorsProBono proBono={proBono} />
                <Donation donation={donation} refDonation={donationRef} stats={stats}/>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Donors
