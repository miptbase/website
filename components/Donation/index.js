import React from 'react'
import style from "./donation_.module.scss"
import Image from "next/image";
import Form from '../Form'
import {useIsMobile} from "../../hooks/useIsMobile";

const Donation = (props) => {
    const isMobile = useIsMobile();
    const {donation, refDonation, stats} = props;
    const topQuartile = Number(stats.filter(item => item.Key === 'Top quartile')[0].Value.replace(/,/g, ''));
    return (
        <section className={style.donation}>
            <div className={style.content}>
                <div className={style.img}>
                    {
                        !isMobile &&
                            <Image
                                src={`/${donation.img}`}
                                alt='donation'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='left center'
                            />
                    }
                    {
                        isMobile &&
                            <Image
                                src={`/${donation.mobileImg}`}
                                alt='donation'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='left center'
                            />
                    }

                </div>

                <h2 className={style.title}>
                    {donation.title}
                </h2>
                <p className={style.text}>
                    {donation.text}
                </p>
            </div>
            <div className={style.form} ref={refDonation}>
                <Form formInfo={donation.form} topQuartile={topQuartile}/>
            </div>
        </section>
    )
}

export default Donation