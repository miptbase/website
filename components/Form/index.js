import React, {useEffect, useState} from 'react'
import style from './form_.module.scss'

import Input from '../ui/Input'
import Check from '../ui/Check'
import Button from '../ui/Button'
import Value from '../ui/Value'

import GooglePay from '../GooglePay'

import cn from 'classnames'


let btnPay = 'google';
const Form = () => {

    const [isApplePay, setIsApplePay] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [activeValue, setActiveValue] = useState(null);
    const [activeMethod, setActiveMethod] = useState(null);

    const selectValue = value => {
        setActiveValue(value);
    };

    const selectMethod = method => {
        setActiveMethod(method);
    };
    useEffect((status) => {
        if (window.ApplePaySession) {
            setIsApplePay(true);
        }
    }, []);


    const formInputs = [
        {
            id: 1,
            placeholder: 'Ваше имя'
        },
        {
            id: 2,
            placeholder: 'Ваш Email'
        }
    ]

    const studentInputs = [
        {
            id: 1,
            placeholder: 'Факультет'
        },
        {
            id: 2,
            placeholder: 'Год окончания'
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

    return (
        <form className={style.form}>
            <div className={style.title}>
                Улучшим вместе жизнь студентов Физтеха!
            </div>
            {formInputs.map(formInput => (
                <div className={style.input} key={formInput.id}>
                    <Input
                        color='white'
                        placeholder={formInput.placeholder}
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
                >
                </Check>
            </div>

            <div className={isStudent ? [style.student + ' ' + style.student_active] : [style.student]}>

                {studentInputs.map(studentInput => (
                    <div className={style.input} key={studentInput.id}>
                        <Input
                            color='white'
                            placeholder={studentInput.placeholder}
                        />
                    </div>
                ))}
            </div>

            <div className={style.method}>
                {paymentMethod.map(method => (
                    <div
                        className={(activeMethod == method.name) ? [style.item + ' ' + style.item_active] : [style.item]}
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
                />
                </div>
            </div>

            <div className={style.buttons}>

                {/*{(isApplePay) ?*/}
                {/*    <button className={style.apple} lang="ru">*/}

                {/*    </button>*/}

                {/* : <div>*/}
                {/*<GooglePay />*/}
                {/*    </div>*/}
                {/*}*/}
                <Button
                    color='white'
                >
                </Button>

                <Button
                    text='Поддержать'
                    color='orange'
                    buttonFunction={(e) => {
                        e.preventDefault();
                    }}
                >
                </Button>
            </div>

            <div className={style.privacy}>
                Отправляя свое пожертвование, вы соглашаетесь с Политикой конфиденциальности, даёте своё согласие на обработку персональных данных и принимаете условия договора пожертвования.
            </div>


        </form>
    )
}

export default Form