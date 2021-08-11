import React, { useCallback } from "react";
import style from "./donors_.module.scss"
import Link from "next/link";

import Button from "../ui/Button";
import DonorsList from "../DonorsList";


const DonorsComponent = (props) => {
    const {donors, donorsPerson, stats} = props;
    const parseStat = useCallback((arr, key) =>{
        return  arr.filter(item => item.Key === key)[0].Value.replace(/,/g, '');
    },[])
    const name = (number, form1, form2, form3 ) => { // донор, донора, доноров
        const arrToString = String(number).split('');
        if (arrToString[arrToString.length - 1] === '1') {
            if (arrToString[arrToString.length - 2] === '1') {
                return form3
            } else {
                return form1
            }
        } else if (arrToString[arrToString.length - 1] === '2') {
            if (arrToString[arrToString.length - 2] === '1') {
                return form3
            } else {
                return form2
            }
        } else if (arrToString[arrToString.length - 1] === '3' || arrToString[arrToString.length - 1] === '4') {
            return form2
        }  else if (
            arrToString[arrToString.length - 1] === '5' ||
            arrToString[arrToString.length - 1] === '6' ||
            arrToString[arrToString.length - 1] === '7' ||
            arrToString[arrToString.length - 1] === '8' ||
            arrToString[arrToString.length - 1] === '9' ||
            arrToString[arrToString.length - 1] === '0'
        ) {
            return form3
        }
    }
    const totalDonors = parseStat(stats, "Total donors");
    const averageDonation = Math.round(Number(parseStat(stats, "Average donation")) / 1000);
    const totalDonations =  Math.round(Number(parseStat(stats, "Total donations")) / 100000) / 10;
    const topDonors = parseStat(stats, "Donors 100K+");
    const data = [
        {
            title: `${totalDonations} млн ₽`,
            text: donors.items[0].text
        },
        {
            title: `${averageDonation} 000 ₽`,
            text: donors.items[1].text
        },
        {
            title: `${topDonors} ${name(topDonors, 'донор', 'донора', 'доноров')}`,
            text: `${name(topDonors, 'вложил', 'вложили', 'вложили')} ${donors.items[2].text}`
        },
    ]
    return (
        <section className={style.donors}>
            <div className={style.inner}>
                <h2 className={style.title}>
                    {donors.title} {totalDonors} {name(totalDonors, 'донор', 'донора', 'доноров')}
                </h2>
                <div className={style.items}>
                    {data.map((item, index) => (
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
                <DonorsList donors={donorsPerson.filter(donor => donor['Top donor'] === "1")}/>
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

export default DonorsComponent