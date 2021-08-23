import React from "react";
import style from "./success_.module.scss";
import Image from "next/image";
import SVG from 'react-inlinesvg';
const shareUrl = `https://${process.env.NEXT_PUBLIC_DOMAIN}`;
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

const SuccessComponent = (props) => {
    const { content, image, share } = props;
    return (
        <section className={style.success}>
            <div className={style.part}>
                <h1 className={style.title}>{content.title}</h1>
                <div className={style.text}>{content.text}</div>
            </div>
            <div className={style.part}>
                <div className={style['background-container']}>
                    <div className={style['img-container']}>
                        <Image
                            src={`/${image.img}`}
                            alt='success'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center bottom'
                        />
                    </div>
                    <div className={style.logo}>
                        <SVG className={style['logo-img']} src={`/${image.logo}`} />
                    </div>
                    <h2 className={style['img-title']}>
                        {image.title}
                    </h2>
                </div>

                <div className={style.share}>
                    <h2 className={style['share-title']}>
                        {share.title}
                    </h2>
                    <div className={style.items}>
                        <FacebookShareButton url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[0].img}`} />
                            </div>
                        </FacebookShareButton>
                        <TelegramShareButton  url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[1].img}`} />
                            </div>
                        </TelegramShareButton>
                        <div className={style['share-link']}>
                            <SVG className={style['share-img']} src={`/${share.items[2].img}`} />
                        </div>
                        <VKShareButton  url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[3].img}`} />
                            </div>
                        </VKShareButton>
                        <WhatsappShareButton url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[4].img}`} />
                            </div>
                        </WhatsappShareButton>
                        <TwitterShareButton url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[5].img}`} />
                            </div>
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl}>
                            <div className={style['share-link']}>
                                <SVG className={style['share-img']} src={`/${share.items[6].img}`} />
                            </div>
                        </LinkedinShareButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessComponent