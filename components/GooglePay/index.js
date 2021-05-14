import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
// import "./style.css";

export default function GooglePay() {
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "example"
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant"
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US"
        }
    };

    const [buttonColor, setButtonColor] = useState("default");
    const [buttonType, setButtonType] = useState("buy");
    const [buttonSizeMode, setButtonSizeMode] = useState("static");
    const [buttonWidth, setButtonWidth] = useState(240);
    const [buttonHeight, setButtonHeight] = useState(40);

    return (
        <div>

            <div className="demo">
                <GooglePayButton
                    environment="TEST"
                    buttonColor={buttonColor}
                    buttonType={buttonType}
                    buttonSizeMode={buttonSizeMode}
                    paymentRequest={paymentRequest}
                    onLoadPaymentData={paymentRequest => {
                    }}
                    style={{ width: buttonWidth, height: buttonHeight }}
                />
            </div>
        </div>
    );
}
