import React, {useEffect, useRef, useState} from 'react'
import { useRouter } from 'next/router'
import style from './form_.module.scss'

import Input from '../ui/Input'
import Check from '../ui/Check'
import Button from '../ui/Button'
import Value from '../ui/Value'
import {debounce} from 'lodash';

const Form = () => {
    const router = useRouter()

    const [isStudent, setIsStudent] = useState(false);
    const [activeValue, setActiveValue] = useState(null);
    const [activeMethod, setActiveMethod] = useState(null);
    const selectValue = value => {
        setActiveValue(value);
    };

    const selectMethod = method => {
        setActiveMethod(method);
    };
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);

    const formtransfer = [
        {
            id: 1,
            placeholder: 'Ваше имя',
            name: 'name',
            ref: nameInputRef,
        },
        {
            id: 2,
            placeholder: 'Ваш Email',
            name: 'email',
            ref: emailInputRef,
        }
    ]

    const studenttransfer = [
        {
            id: 1,
            placeholder: 'Факультет',
            name: 'faculty',
        },
        {
            id: 2,
            placeholder: 'Год окончания',
            name: 'graduate-year',
        }
    ]

    const paymentMethod = [
        {id: 1, name: 'Карта'},
        {id: 2, name: 'Перевод'},
        {id: 3, name: 'PayPal'},
    ]

    const paymentValue = [
        {
            id: 1,
            value: '5000',
        },
        {
            id: 2,
            value: '40 000',
        },
        {
            id: 3,
            value: '100 000',
        },
    ]


    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {result, id: paymentId} = await (await fetch('http://miptbaseback.4129.ru/id')).json();
        if (result === 'success') {
            localStorage.setItem('paymentData', JSON.stringify({
                paymentId,
                name: formData.get('name'),
                value: formData.get('custom-donate-value'),
            }));
            if (activeMethod === 'Перевод') {
                openTransfer();
            }
        } else {
            console.log('error occured');
        }
    };


    // const DEBOUNCE_MS = 3000;
    // const onNameOrEmailChange = debounce(async () => {
    //     const name = nameInputRef.current.value;
    //     const email = emailInputRef.current.value;
    //     const dataToSend = {
    //         event: 'Identify',
    //         name: name,
    //         email: email,
    //     };
    //     localStorage.setItem("name", name);
    //     localStorage.setItem("email", email);
    //
    //     const response = await (await fetch('http://miptbaseback.4129.ru/log', {
    //         method: 'POST',
    //         body: JSON.stringify(dataToSend),
    //     })).json();
    // }, DEBOUNCE_MS);

    const openTransfer = () => {
        window.open('/transfer');
    }

    return (
        <>

            <form onSubmit={onSubmit} className={style.form}>
                <div className={style.title}>
                    Улучшим вместе жизнь студентов Физтеха!
                </div>
                {formtransfer.map(formInput => (
                    <div className={style.input} key={formInput.id}>
                        <Input
                            color='white'
                            placeholder={formInput.placeholder}
                            name={formInput.name}
                            // onChange={onNameOrEmailChange}
                            ref={formInput.ref}
                        />
                    </div>
                ))}

                <div className={style.check}>
                    <Check
                        color='white'
                        text='Я учился/учусь в МФТИ'
                        id='isStudent'
                        checkChild={true}
                        functionCheck={()=> setIsStudent(!isStudent)}
                        name='member'
                    >
                    </Check>
                </div>

                <div className={isStudent ? [style.student + ' ' + style.student_active] : [style.student]}>

                    {studenttransfer.map(studentInput => (
                        <div className={style.input} key={studentInput.id}>
                            <Input
                                color='white'
                                placeholder={studentInput.placeholder}
                                name={studentInput.name}
                            />
                        </div>
                    ))}
                </div>

                <div className={style.method}>
                    {paymentMethod.map(method => (
                        <div
                            className={(activeMethod === method.name) ? [style.item + ' ' + style.item_active] : [style.item]}
                            key={method.id}
                            onClick={()=> {selectMethod(`${method.name}`)}}
                        >
                            {method.name}
                        </div>
                    ))}
                </div>

                <div className={style.value}>

                    {paymentValue.map(valueItem => (
                        <Value key={valueItem.id}
                               mod='select'
                               value={valueItem.value}
                               functionValueActive = {()=> {selectValue(`${valueItem.value}`); }}
                               isSelected = {activeValue == valueItem.value}
                        />
                    ))}
                    <div>
                        <Input
                            color='white'
                            mod='select'
                            placeholder='Другая сумма'
                            functionClick = {()=> {selectValue('input'); }}
                            isSelected = {activeValue === 'input'}
                            name="custom-donate-value"
                        />
                    </div>
                </div>

                <div className={style.buttons}>
                    <Input
                        placeholder='Поддержать'
                        color='orange'
                        type='submit'
                        value='Поддержать'
                    />
                </div>

                <div className={style.privacy}>
                    Отправляя свое пожертвование, вы соглашаетесь с Политикой конфиденциальности, даёте своё согласие на обработку персональных данных и принимаете условия договора пожертвования.
                </div>


            </form>
        </>
    )
}

export default Form