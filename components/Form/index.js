import React, {useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom';
import style from './form_.module.scss'

import Input from '../ui/Input'
import Check from '../ui/Check'
import Button from '../ui/Button'
import Value from '../ui/Value'
import {debounce} from 'lodash';
import cn from 'classnames'

const Form = (props) => {
    const { form } = props;
    const [isStudent, setIsStudent] = useState(false);
    const [activeValue, setActiveValue] = useState('2');
    const [activeMethod, setActiveMethod] = useState('Карта');
    const [selectedValue, setSelectedValue] = useState('40000');
    const [currentEmail, setCurrentEmail] = useState(null);
    const [currentName, setCurrentName] = useState(null);
    const [otherPlaceholder, setOtherPlaceholder] = useState('Другая сумма');
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
            tooltip: 'test test'
        },
        {
            id: 2,
            value: '40 000',
            tooltip: 'Этого хватит на месяц интернета для целой группы студентов'
        },
        {
            id: 3,
            value: '100 000',
            tooltip: 'test test test '
        },
    ]

    const [payPalButton, setPayPalButton] = useState(null);
    const [showPayPalButton, setShowPayPalButton] = useState(false);
    const createPayPalOrder = (data, actions) => {
      const {paymentId, value} = JSON.parse(localStorage.getItem('paymentData'));
      return actions.order.create({
        id: paymentId,
        purchase_units: [
          {
            amount: {
              value: value.replace(/ /, ''),
            },
          },
        ],
      });
    };
    useEffect(() => {
      document.getElementById('paypal-sdk').addEventListener('load', () => {
        const payPalButton = React.createElement(
          paypal.Buttons.driver("react", { React, ReactDOM }),
          {createOrder: createPayPalOrder},
        );
        setPayPalButton(payPalButton);
      })
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {result, id: paymentId} = await (await fetch('https://api.miptbase.org/id')).json();
        if (result === 'success') {
            localStorage.setItem('paymentData', JSON.stringify({
                paymentId,
                name: formData.get('name'),
                email: formData.get('email'),
                value: selectedValue,
            }));

            if (activeMethod === 'Перевод') {
                openTransfer();
            }

            if (activeMethod === 'Карта') {
                handlerClick();
            }

            if (activeMethod === 'PayPal') {
              setShowPayPalButton(true);
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

    const paymentSumm = Number(selectedValue.replace(/ +/g, '').trim());

    const hiddenForm = `      <form style="visibility: hidden; height: 0;" id='payForm' name="TinkoffPayForm" class="form" onsubmit="pay(this); return false;">
                    <div class="form__title"> Улучшим вместе жизнь студентов Физтеха!</div>
                <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="1624304256973DEMO"/>
                    <input class="tinkoffPayRow" type="hidden" name="frame" value="false" />
                        <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
                            <input class="tinkoffPayRow" type="text" name="amount" value=${paymentSumm}
                                   required />
                               
                                 
                                        <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика"
                                               name="name" value=${currentName} />
                                            <input class="tinkoffPayRow" type="text" placeholder="E-mail"
                                                   name="email"  value=${currentEmail} />
                                              
                                                    <input id='submitButton' class="tinkoffPayRow" type="submit" value="Оплатить" />
            </form>
            
                     <script type="text/javascript">
    const terminalkey = document.forms.TinkoffPayForm.terminalkey
    const widgetParameters = {
        container: 'tinkoffWidgetContainer',
        terminalKey: terminalkey.value,
        paymentSystems: {
            GooglePay: {
                environment: "TEST",
                merchantId: "12345678901234567890",
                buttonColor: "black",
                buttonType: "short",
                paymentInfo: function () {
                    return {
                        infoEmail: "E-mail для отправки информации о платеже",
                        paymentData: document.forms.TinkoffPayForm
                    }
                }
            },
            ApplePay: {
                buttonOptions: {
                    lang: 'ru',
                    color: 'black'
                },
                paymentInfo: function () {
                    return {
                        infoEmail: "E-mail для отправки информации о платеже",
                        paymentData: document.forms.TinkoffPayForm
                    }
                }
            },

        },
    };
    window.addEventListener('load', function () {
        initPayments(widgetParameters);
    });

</script>`

    function createHiddenForm() {
        return {__html: hiddenForm};
    }

    function CreatedForm() {
        return <div dangerouslySetInnerHTML={createHiddenForm()} />;
    }

    let submitButton;

    useEffect(() => {
        submitButton = document.getElementById('submitButton');
    });

    const handlerClick = () => {
        submitButton.click()
    }

    const payButtons = showPayPalButton
      ? payPalButton
      : <>
          <div className={style['pay-button']} id="tinkoffWidgetContainer"></div>
          <Button
              placeholder='Поддержать'
              color='orange'
              type='submit'
              text='Поддержать'
          />
        </>;
    return (
        <>
            <CreatedForm />


            <form onSubmit={onSubmit} className={style.form}>
                {formtransfer.map(formInput => (
                    <div className={style.input} key={formInput.id}>
                        <Input
                            color='white'
                            placeholder={formInput.placeholder}
                            name={formInput.name}
                            // onChange={onNameOrEmailChange}
                            ref={formInput.ref}
                            onInput=  {(e)=> {
                                if (formInput.name === 'name') {
                                    setCurrentName(e.target.value)
                                } else if (formInput.name === 'email') {
                                    setCurrentEmail(e.target.value)
                                }
                                }
                            }
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

                <div className={style['pay-container']}>
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
                        <div className={style['method-other']}>
                            ...
                        </div>
                    </div>

                    <div className={style.value}>
                        <div className={style['value-items']}>
                            {paymentValue.map(valueItem => (
                                <Value key={valueItem.id}
                                       mod='select'
                                       value={valueItem.value}
                                       functionValueActive = {()=> {setSelectedValue(`${valueItem.value}`); setActiveValue(`${valueItem.id}`)}}
                                       isSelected = {activeValue == valueItem.id}
                                />
                            ))}
                        </div>
                        <div className={style['custom-donate']}>
                            <Input
                                color='white'
                                mod='select'
                                placeholder = {otherPlaceholder}
                                onClick={()=> {setActiveValue('input')}}
                                isSelected = {activeValue === 'input'}
                                name="custom-donate-value"
                                onInput=  {(e)=> { setSelectedValue(e.target.value)}}
                                onFocus={() => setOtherPlaceholder('')}
                                onBlur={(e) => {setOtherPlaceholder('Другая сумма');
                                    if ((e.target.value) === '')
                                    {
                                        setActiveValue(0)
                                    }
                                }}
                            />
                        </div>


                    </div>

                    {activeValue != "input" && (
                        <div className={style.tooltip}>
                            {activeValue == 1 && (
                                paymentValue[0].tooltip
                            )}
                            {activeValue == 2 && (
                                paymentValue[1].tooltip
                            )}
                            {activeValue == 3 && (
                                paymentValue[2].tooltip
                            )}
                        </div>
                    )}
                </div>
                <div className={style.buttons}>
                    {payButtons}
                </div>

                <div className={style.privacy}>
                    Отправляя свое пожертвование, вы соглашаетесь с <a className={style.link} href='/'>Политикой конфиденциальности</a>, даёте своё согласие на обработку персональных данных и принимаете условия договора пожертвования.
                </div>


            </form>
        </>
    )
}

export default Form