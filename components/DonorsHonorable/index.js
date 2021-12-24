import React, { useState } from "react";
import style from "./donors-honorable_.module.scss";
import Image from "next/image";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import donorsPerson from '../../content/donors.json'
import donorsImages from '../../content/donorsImages.json'
import avatar from "../../public/media/avatar-2.svg"
import avatarMobile from "../../public/media/avatar-3.svg"
import {useIsMobile} from "../../hooks/useIsMobile";
import Button from "../ui/Button";
import { avatarPlaceholder, toBase64} from "../../scripts/placeholder"

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
                         (donor['Name'] != "" &&
                         donor['Class'] === "A"))
                         .map((donor)  => (
                           <div className={style.item} key={donor.ID}>
                               <div className={style['donor-img']}>
                                   <Image
                                     src={
                                         donorsImages.includes(`${donor['ID']}.png`) ?
                                           `/media/donors/${donor.ID}.png` : avatar
                                     }
                                     alt={donor['Name']}
                                     layout='fill'
                                     objectFit='cover'
                                     objectPosition='left center'
                                     blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                                     placeholder="blur"
                                     sizes='4vw'
                                   />
                               </div>
                               <div className={style.content}>
                                   <div className={style.name}>
                                       {donor['Name']}
                                   </div>
                                   <div className={style.text}>
                                       <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                                           {donor['Description']}
                                       </ReactMarkdown>
                                   </div>
                               </div>
                           </div>
                         ))}
                   </div>
                   <div className={style.donors}>
                       {donorsPerson.filter(donor =>
                         donor['Name'] !== "" && donor['Class'] === "B"
                       )
                         .map((donor)  => (
                           <div className={style.item} key={donor.ID}>
                               <div className={style.content}>
                                   <div className={style.name}>
                                       {donor['Name']}
                                   </div>
                                   <div className={style.text}>
                                       <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                           {donor['Description']}
                                       </ReactMarkdown>
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
                          donor['Name'] != "" &&
                          donor['Class'] === "A"
                        )
                          .slice(0, 9).map((donor)  => (
                            <div className={style.item} key={donor.ID}>
                                <div className={style['donor-img']}>
                                    <Image
                                      src={
                                          donorsImages.includes(`${donor['ID']}.png`) ?
                                            `/media/donors/${donor.ID}.png` : avatarMobile
                                      }
                                      alt={donor['Name']}
                                      layout='fill'
                                      objectFit='cover'
                                      objectPosition='left center'
                                      loading='eager'
                                      blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                                      placeholder="blur"
                                      sizes='8vw'
                                    />
                                </div>
                                <div className={style.content}>
                                    <div className={style.name}>
                                        {donor['Name']}
                                    </div>
                                    <div className={style.text}>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                            {donor['Description']}
                                        </ReactMarkdown>
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
                                  donor['Name'] !==  "" &&
                                  donor['Class'] === "A"
                                )
                                  .slice(10).map((donor)  => (
                                    <div className={style.item} key={donor.ID}>
                                        <div className={style['donor-img']}>
                                            <Image
                                              src={
                                                  donorsImages.includes(`${donor['ID']}.png`) ?
                                                    `/media/donors/${donor.ID}.png` : avatarMobile
                                              }
                                              alt={donor['Name']}
                                              layout='fill'
                                              objectFit='cover'
                                              objectPosition='left center'
                                              blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                                              placeholder="blur"
                                              sizes='8vw'
                                            />
                                        </div>
                                        <div className={style.content}>
                                            <div className={style.name}>
                                                {donor['Name']}
                                            </div>
                                            <div className={style.text}>
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {donor['Description']}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                  ))}
                            </div>
                            <div className={style.donors}>
                                {donorsPerson.filter(donor =>
                                  donor['Class'] === "B"
                                )
                                  .map((donor)  => (
                                    <div className={style.item} key={donor.ID}>
                                        <div className={style['content-mini']}>
                                            <div className={style.name}>
                                                {donor['Name']}
                                            </div>
                                            <div className={style.text}>
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {donor['Description']}
                                                </ReactMarkdown>
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