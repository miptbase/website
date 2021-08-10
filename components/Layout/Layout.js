import React from 'react'
import Head from 'next/head'
import style from "./layout_.module.scss"
import cn from "classnames";
import {compositionStandard, distribution, seo, standard, standardGoal} from "../../content/standard.json";
import Header from "../Header";
import {header} from "../../content/header.json";
import {menu} from "../../content/menu.json";
import StandardComponent from "../StandardComponent";
import CompositionStandard from "../CompositionStandard";
import StandardGoal from "../StandardGoal";
import StandardDistribution from "../StandardDistribution";
import Donation from "../Donation";
import {donation} from "../../content/home.json";
import stats from "../../content/stats.json";
import Footer from "../Footer";
import {footer} from "../../content/footer.json";
import Page from "../Page";

export default function Layout({ children, pageTitle, pageDescription, customClass, ...props }) {
    console.log(customClass);
    return (
        <Page>
            <>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                </Head>
                <Header header={header} menu={menu} color='black'/>
                <section className={cn(style.layout, style[ `${customClass}` ])}>
                    <div className={style.content}>{children}</div>
                </section>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}