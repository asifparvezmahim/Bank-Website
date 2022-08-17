document.getElementById('btn-deposite').addEventListener('click', function () {

    //submit on deposit
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString)

    //new balance on deposite
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositTotal = previousDepositeTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;


    //total balance

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = '';


})