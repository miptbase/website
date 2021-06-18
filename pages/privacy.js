import React, { Component } from 'react'
import {privacy} from '../content/inner.md';
import Page from "../components/Page";
import InnerPage from "../components/InnerPage";

export default class Home extends Component {
    render() {
        return (
            <Page>
                <>
                    <InnerPage>
                        <>
                            {privacy}
                        </>
                    </InnerPage>
                </>
            </Page>
        )
    }
}