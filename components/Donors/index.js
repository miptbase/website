import React, { useState, useEffect } from "react";
import style from "./donors_.module.scss"

import Button from "../ui/Button";
import DonorsList from "../DonorsList";
import Feature from "../Feature";

const Donors = (props) => {
    const {donors} = props;
    const initialDonors = 15;
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore)
    }

    const numberOfItems = showMore ? donors.person.length : initialDonors
    const buttonText = showMore ? donors.hide : donors.show

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
                <DonorsList donors={donors.person.slice(0, numberOfItems)}/>
                {donors.person.length > initialDonors &&
                    <div className={style.button}>
                        <Button
                            text={buttonText}
                            color='blue'
                            buttonFunction={handleClick}
                        />
                    </div>
                }
            </div>
        </section>
    )
}

export default Donors