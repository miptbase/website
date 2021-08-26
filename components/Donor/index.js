import React from 'react'
import style from "./donor_.module.scss"
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { useIsMobile } from '../../hooks/useIsMobile';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DonorDetails from "../DonorDetails";
import DialogContent from "@material-ui/core/DialogContent";
import Image from 'next/image';
import { avatarPlaceholder, toBase64} from "../../scripts/placeholder";
import avatar from "../../public/media/avatar.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.56)',
    },
    paper: {
        borderRadius: '0.5rem',
        overflow: 'hidden',
        background: '#252F3C',
    },
    modalBody: {
        width: '24.2rem',
        height: '34.1rem',
        background: '#252F3C',
        padding: '2rem 2rem 2.5rem ',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        transform: 'translate3d(0, 0, 0)',
        webkitBackfaceVisibility: 'hidden'
    }
}));


const Donor = (props) => {
    const {name, description, img, company} = props;
    const classes = useStyles();
    const isMobile = useIsMobile();
    const [modal, setModal] = React.useState(false);

    return (
        <>
        {!isMobile
            && (
                <div className={style.donor} >
                    <div className={style.container}>
                        <div className={style.img}>
                            <Image
                                src={img ? `/${img}` : avatar}
                                alt={name}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='top center'
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                                placeholder="blur"
                                sizes="8vw"
                            />
                        </div>
                        <div className={style.info}>
                            <p className={style.name}>{name}</p>
                            <p className={style.company}>{company}</p>
                            <p className={style['details-company']}>{company}</p>
                            <div className={style['description']}>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>

                </ div>
            )}
            {isMobile
            && (
                <>
                <div className={style.donor} onClick={() => setModal(true)}>
                    <div className={style.img}>
                        <Image
                          src={img ? `/${img}` : avatar}
                          alt={name}
                          layout='fill'
                          objectFit='cover'
                          objectPosition='top center'
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                          placeholder="blur"
                        />
                    </div>
                    <div className={style.info}>
                        <p className={style.name}>{name}</p>
                        <p className={style.company}>{company}</p>
                    </div>
                </div>
                <Dialog
                    classes={{
                        root: classes.root,
                        label: classes.label,
                        paper: classes.paper
                    }}
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
                >
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                        <DonorDetails
                            donor={name}
                            company={company}
                            text={description}
                        />
                        <button
                            className={style.button}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setModal(false)}
                        >
                            Назад
                        </button>
                    </DialogContent>

                </Dialog>
               </>
            )}

        </>
    )
}

export default Donor