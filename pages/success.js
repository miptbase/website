import React from 'react'
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import Page from "../components/Page";
import Header from "../components/Header";
import SuccessComponent from "../components/SuccessComponent";
import Footer from "../components/Footer";
import {menu} from "../content/menu.json";
import { seoMain } from '../content/home.json';
import { seo, content, image, share } from '../content/success.json';
import Head from "next/head";

const Success = () => {
    return (
        <Page
            pageTitle={seo.title ? seo.title : seoMain.title}
            pageDescription={seo.description ? seo.description : seoMain.description}
        >
            <>
                <Header   header={header} menu={menu} color='black' goToMain={true}/>
                <SuccessComponent content={content} image={image} share={share}/>
                <Footer   footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Success