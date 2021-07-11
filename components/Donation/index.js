import React from 'react'
import style from "./donation_.module.scss"
import Image from "next/image";
import Form from '../Form'

const Donation = (props) => {
    const {donation, refDonation} = props;
    return (
        <section className={style.donation}>
            <div className={style.content}>
                <div className={style.img}>
                    <Image
                        src={`/${donation.img}`}
                        alt='donation'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='left center'
                    />
                </div>

                <h2 className={style.title}>
                    {donation.title}
                </h2>
                <p className={style.text}>
                    {donation.text}
                </p>
            </div>
            <div className={style.form} ref={refDonation}>
                <Form formInfo={donation.form}/>
            </div>
        </section>
    )
}

export default Donation