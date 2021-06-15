import React, { Component } from 'react'
import Page from "../components/Page";
import Transfer from "../components/Transfer";
import {transfer} from '../content/home.json';

export default class TransferPage extends Component {
    render() {
        return (
            <Page>
                <Transfer transfer={transfer}/>
            </Page>
        )
    }
}