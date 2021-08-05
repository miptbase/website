import React from 'react'
import { header } from '../content/header.json';
import { footer } from '../content/footer.json';
import Page from "../components/Page";
import Header from "../components/Header";
import SuccessComponent from "../components/SuccessComponent";
import Footer from "../components/Footer";
import {menu} from "../content/menu.json";
import { content, image, share } from '../content/success.json';

const Success = () => {
    return (
        <Page>
            <>
                <Header   header={header} menu={menu} color='black' goToMain={true}/>
                <SuccessComponent content={content} image={image} share={share}/>
                <Footer   footer={footer} menu={menu}/>
            </>
        </Page>
    )
}

export default Success