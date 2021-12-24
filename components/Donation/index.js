import React from 'react'
import style from "./donation_.module.scss"
import Form from '../Form'
import {useIsMobile} from "../../hooks/useIsMobile";
import SVG from 'react-inlinesvg';

const Donation = (props) => {
    const isMobile = useIsMobile();
    const {donation, refDonation, stats} = props;
    const topQuartile = Number(stats.filter(item => item.Key === 'Top-25% donor')[0].Value.replace(/,/g, ''));
    return (
        <section className={style.donation}>
            <div className={style.content}>
                <div className={style.img}>
                    {
                        !isMobile &&
                        <SVG className={style['icon-img']} src={`/${donation.img}`} />
                    }
                    {
                        isMobile &&
                        <SVG className={style['icon-img']}  src={`/${donation.mobileImg}`} />
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