import React from "react";

function PaymentPayPal() {
    const createOrder = (data, actions) =>{
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
}

export default PaymentPayPal;