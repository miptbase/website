import React from 'react'
import style from "./donation_.module.scss"

import Form from '../Form'

const Donation = () => {

    return (
        <section className={style.donation}>
            <div className={style.form}>
                <Form />
            </div>
            <div className={style.image}>
                <img src='/img/donations.jpg'/>
            </div>
        </section>
    )
}

export default Donation