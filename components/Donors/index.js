import React, { useState, useEffect } from "react";
import style from "./donors_.module.scss"
import Link from "next/link";

import Button from "../ui/Button";
import DonorsList from "../DonorsList";


const Donors = (props) => {
    const {donors, donorsPerson} = props;
    console.log('donorsPerson filter', donorsPerson.filter(donor => donor.Top === "1"));
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
                <DonorsList donors={donorsPerson.filter(donor => donor.Top === "1")}/>
                <div className={style.button}>

                    <Button
                        color='blue'
                        buttonFunction={(e) => e.preventDefault()}
                    >
                        <Link href={'/donors'}>
                            <a className={style.link}>
                                {donors.show}
                            </a>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Donors