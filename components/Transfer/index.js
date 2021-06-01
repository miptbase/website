import React, {useEffect} from 'react'
import style from "./transfer_.module.scss"

const Transfer = (props, sum, id) => {
    const {transfer} = props;
    const summ = 3000;
    const paymentId = 'test'
    const name = 'test name'
    useEffect(() => {
        let params = (new URL(window.location.href)).searchParams;
        console.log(params.get("name"));
    }, []);



    const QRCodeValue =
        `ST00012
        |Name=${transfer.valueName}
        |PersonalAcc=${transfer.valuePersonalAcc}
        |BankName=${transfer.valueBankName}
        |BIC=${transfer.valueBIC}
        |CorrespAcc=${transfer.valueCorrespAcc}
        |KPP=${transfer.valueKPP}
        |PayeeINN=${transfer.valuePayeeINN}
        |lastName=${name}
        |Purpose=${transfer.valuePurpose}${paymentId}
        |Sum=${summ}
        `

    const generatorQR = `https://api.qrserver.com/v1/create-qr-code/?data=
    ${QRCodeValue}&amp;size=400x400"`
    return (
        <nav className={style.transfer}>
            <div className={style.title}>
                <div className={style.items}>
                    <div className={style.item}>
                        <div className={style.name}>
                            {transfer.Purpose}
                        </div>
                        <div className={style.value}>
                            {transfer.valuePurpose}
                        </div>

                        <div className={style.name}>
                            {transfer.name}
                        </div>
                        <div className={style.value}>
                            {transfer.valueName}
                        </div>

                        <div className={style.name}>
                            {transfer.PayeeINN}
                        </div>
                        <div className={style.value}>
                            {transfer.valuePayeeINN}
                        </div>

                        <div className={style.name}>
                            {transfer.KPP}
                        </div>
                        <div className={style.value}>
                            {transfer.valueKPP}
                        </div>

                        <div className={style.name}>
                            {transfer.BIC}
                        </div>
                        <div className={style.value}>
                            {transfer.valueBIC}
                        </div>

                        <div className={style.name}>
                            {transfer.BankName}
                        </div>
                        <div className={style.value}>
                            {transfer.valueBankName}
                        </div>

                        <div className={style.name}>
                            {transfer.CorrespAcc}
                        </div>
                        <div className={style.value}>
                            {transfer.valueCorrespAcc}
                        </div>

                        <div className={style.name}>
                            {transfer.PersonalAcc}
                        </div>
                        <div className={style.value}>
                            {transfer.valuePersonalAcc}
                        </div>
                    </div>
                </div>
                <div className={style.code}>
                    <img src={generatorQR} alt="" title="" />
                </div>

            </div>
        </nav>
    )
}

export default Transfer
