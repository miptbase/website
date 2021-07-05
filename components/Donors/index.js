import React, { useState, useEffect } from "react";
import style from "./donors_.module.scss"

import Button from "../ui/Button";
import DonorsList from "../DonorsList";


const Donors = (props) => {
    const {donors, donorsPerson} = props;
    const initialDonors = 18;
    return (
        <section className={style.donors}>
            <div className={style.inner}>
                <h2 className={style.title}>
                    {donors.title}
                </h2>
                <div className={style.items}>
                    {donors.items.map((item, index) => (
                        <div
                            className={style.item}
                            key={index}
                        >
                            <p className={style['item-title']}>
                                {item.title}
                            </p>
                            <div className={style['item-text']}>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
                <DonorsList donors={donorsPerson.slice(0, initialDonors)}/>
                <div className={style.button}>
                    <Button
                        text={donors.show}
                        color='blue'
                    />
                </div>
            </div>
        </section>
    )
}

export default Donors