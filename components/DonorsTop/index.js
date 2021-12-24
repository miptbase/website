import React from "react";
import style from "./donors-top_.module.scss";
import Image from "next/image";
import Button from "../ui/Button";

const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
};

const DonorsTop = (props) => {
    const { top, scrollToDonation, totalDonations } = props;
    const differentInMonths = monthDiff(new Date('2021-01-28T00:00:00'), new Date());

    return (
        <section className={style['donors-top']}>
            <div>
                <h1 className={style.title}>
                    {top.title}
                    <br />
                    {totalDonations}
                    {top.titleSecond}
                    {differentInMonths}
                    {top.titleThird}
                </h1>
                <div className={style.text}>{top.text}</div>
                <div className={style['button-desktop']}>
                  <Button
                    text={top.buttonText}
                    color= 'orange'
                    buttonFunction={scrollToDonation}
                  />
                </div>
              <div className={style['button-mobile']}>
                <Button
                  text={top.buttonTextMobile}
                  color= 'orange'
                  buttonFunction={scrollToDonation}
                  width='100'
                />
              </div>

            </div>
            <div className={style.part}>
                <div className={style['background-container']}>
                    <Image
                        src={`/${top.image}`}
                        alt='donors-top'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center bottom'
                        sizes='48vw'
                    />
                </div>
            </div>
        </section>
    )
}

export default DonorsTop