import React from "react";
import style from "./donors-honorable_.module.scss";
import Image from "next/image";
import donorsPerson from '../../content/donors.json'
import donorsImages from '../../content/donorsImages.json'
const DonorsHonorable = (props) => {

    const { honorable } = props;
    console.log('donorsImages',donorsImages);
    return (
        <section className={style['donors-honorable']}>
            <h2 className={style.title}>{honorable.title}</h2>
                <div className={style['donors-top']}>
                    {donorsPerson.filter(donor =>
                        donor['Class'] === "A" && donorsImages.includes(`${donor['ID']}.png`) ||
                        donor['Class'] === "B" && donorsImages.includes(`${donor['ID']}.png`))
                        .map((donor)  => (
                        <div className={style.item} key={donor.ID}>
                            <div className={style['donor-img']}>
                                <Image
                                    src={`/media/donors/${donor.ID}.png`}
                                    alt={donor['Donor']}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='left center'
                                    loading='eager'
                                />
                            </div>
                            <div className={style.content}>
                                <div className={style.name}>
                                    {donor['Donor']}
                                </div>
                                <div className={style.text}>
                                    {donor['Text']}
                                </div>
                                <div className={style.text}>
                                    {
                                        `${donor.Department != "" &&  donor.Department != "-" ? donor.Department : ''}
                                        ${donor.Year != "" && donor.Year != "-" ? donor.Year : ''}`
                                    }
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.donors}>
                    {donorsPerson.filter(donor =>
                        donor['Class'] === "A" && !(donorsImages.includes(`${donor['ID']}.png`)) ||
                        donor['Class'] === "B" && !(donorsImages.includes(`${donor['ID']}.png`)) ||
                        donor['Class'] !== "A" && donor['Class'] !== "B"
                    )
                        .map((donor)  => (
                            <div className={style.item} key={donor.ID}>
                                <div className={style.content}>
                                    <div className={style.name}>
                                        {donor['Donor']}
                                    </div>
                                    <div className={style.text}>
                                        {
                                            `${donor.Department != "" &&  donor.Department != "-" ? donor.Department : ''}
                                        ${donor.Year != "" && donor.Year != "-" ? donor.Year : ''}`
                                        }
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>

        </section>
    )
}

export default DonorsHonorable