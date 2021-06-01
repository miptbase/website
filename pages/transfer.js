import React, { Component } from 'react'
import Page from "../components/Page";
import Transfer from "../components/Transfer";
import {attributes} from '../content/home.md';

export default class TransferPage extends Component {
    render() {
        let {transfer} = attributes;
        return (
            <Page>
                <Transfer transfer={transfer}/>
            </Page>
        )
    }
}