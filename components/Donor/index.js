import React, {useState, useEffect} from 'react'
import style from "./donor_.module.scss"
import { useMediaQuery } from 'react-responsive'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DonorDetails from "../DonorDetails";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Image from 'next/image'


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.56)',
    },
    paper: {
        borderRadius: '0.5rem',
        overflow: 'hidden'
    },
    modalBody: {
        width: '24.2rem',
        height: '34.1rem',
        background: '#2D83E8',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}));



const Donor = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(
        { maxWidth: 1024 }
    )
    const {name, description, img, company, text} = props;
    const [modal, setModal] = React.useState(false);

    return (
        <>
        {!isMobile
            && (
                <div className={style.donor} >
                    <div className={style.flipper}>
                        <div className={style.front}>
                            <div className={style.img}>
                                <Image src={`/${img}`} alt={name} layout='fill' objectFit='cover' objectPosition='top center'
                                />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>{name}</p>
                                <p className={style.company}>{company}</p>
                            </div>
                        </div>
                        <div className={style.back}>
                            <p className={style['back-name']}>{name}</p>
                            <p className={style['back-company']}>{company}</p>
                            <p className={style['back-description']}>{description}</p>
                        </div>
                    </div>
                </ div>
            )}
            {isMobile
            && (
                <>
                <div className={style.donor} onClick={() => setModal(true)}>
                    <div className={style.img}>
                        <Image src={`/${img}`} alt={name} layout='fill'  objectFit='cover' objectPosition='top center'/>
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
                            text={text}
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