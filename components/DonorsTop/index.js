import React from "react";
import style from "./donors-top_.module.scss";
import Image from "next/image";
import Button from "../ui/Button";

const DonorsTop = (props) => {
    const { top, scrollToDonation } = props;
    return (
        <section className={style['donors-top']}>
            <div>
                <h1 className={style.title}>{top.title}</h1>
                <div className={style.text}>{top.text}</div>
                <Button
                    text={top.buttonText}
                    color= 'orange'
                    buttonFunction={scrollToDonation}
                />
            </div>
            <div className={style.part}>
                <div className={style['background-container']}>
                    <Image
                        src={`/${top.image}`}
                        alt='donors-top'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center bottom'
                    />
                </div>
            </div>
        </section>
    )
}

export default DonorsTop