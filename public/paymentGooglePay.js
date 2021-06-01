const terminalkey = document.forms.TinkoffPayForm.terminalkey
const widgetParameters = {
    container: 'tinkoffWidgetContainer',
    terminalKey: terminalkey.value,
    paymentSystems: {
        GooglePay: {
            environment: "TEST",
            merchantId:  "12345678901234567890",
            merchantName: "Demo Merchant",
            buttonColor: "default",
            buttonType: "long",
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
    console.log('lkl;kjlk;lkj')
});