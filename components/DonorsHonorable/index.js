import React, { useState } from "react";
import style from "./donors-honorable_.module.scss";
import Image from "next/image";
import donorsPerson from '../../content/donors.json'
import donorsImages from '../../content/donorsImages.json'
import {useIsMobile} from "../../hooks/useIsMobile";
import Button from "../ui/Button";

const DonorsHonorable = (props) => {
    const { honorable } = props;
    const isMobile = useIsMobile();
    const [donorsVisible, setDonorsVisible] = useState(false);
    return (
        <section className={style['donors-honorable']}>
            <h2 className={style.title}>{honorable.title}</h2>
            {
                !isMobile &&
               <>
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
               </>
            }
            {
                isMobile &&
                <>
                    <div className={style['donors-top']}>
                        {donorsPerson.filter(donor =>
                          donor['Class'] === "A" && donorsImages.includes(`${donor['ID']}.png`) ||
                          donor['Class'] === "B" && donorsImages.includes(`${donor['ID']}.png`))
                          .slice(0, 9).map((donor)  => (
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
                    {
                        !donorsVisible &&
                          <div className={style['button-container']}>
                              <Button
                                color='blue'
                                text={honorable.buttonText}
                                width={'100'}
                                buttonFunction={() => {setDonorsVisible(true)}}
                              />
                          </div>
                    }
                    {
                        donorsVisible &&
                          <>
                              <div className={style['donors-top']}>
                                  {donorsPerson.filter(donor =>
                                    donor['Class'] === "A" && donorsImages.includes(`${donor['ID']}.png`) ||
                                    donor['Class'] === "B" && donorsImages.includes(`${donor['ID']}.png`))
                                    .slice(10).map((donor)  => (
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
                                          <div className={style['content-mini']}>
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
                          </>
                    }
                </>
            }
        </section>
    )
}

export default DonorsHonorable