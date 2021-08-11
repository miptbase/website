import React from 'react'
import style from "./layout_.module.scss"
import cn from "classnames";
import Header from "../Header";
import {header} from "../../content/header.json";
import {menu} from "../../content/menu.json";
import Footer from "../Footer";
import {footer} from "../../content/footer.json";
import Page from "../Page";

export default function Layout({ children, pageTitle, pageDescription, innerPatch, ...props }) {
    return (
        <Page
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            innerPatch={innerPatch}
        >
            <>
                <Header header={header} menu={menu} color='black'/>
                <section className={cn(style.layout, style[ `${innerPatch}` ])}>
                    <div className={style.content}>{children}</div>
                </section>
                <Footer footer={footer} menu={menu}/>
            </>
        </Page>
    )
}