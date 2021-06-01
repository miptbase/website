
    const terminalkey = document.forms.TinkoffPayForm.terminalkey
    const widgetParameters = {
    container: 'tinkoffWidgetContainer',
    terminalKey: terminalkey.value,
    paymentSystems: {
    ApplePay: {
    // buttonOptions: "Опции кнопки Apple Pay",
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
        console.log('po[po[po[po')
})