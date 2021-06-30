import React from 'react'
import style from "./donation_.module.scss"

import Form from '../Form'

const Donation = (props) => {
    const {donation} = props;
    return (
        <section className={style.donation}>
            <div className={style.content}>
                <img src={donation.img} className={style.img}/>
                <h2 className={style.title}>
                    {donation.title}
                </h2>
                <p className={style.text}>
                    {donation.text}
                </p>
            </div>
            <div className={style.form}>
                <Form form={donation.form}/>
            </div>
        </section>
    )
}

export default Donation