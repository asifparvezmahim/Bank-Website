document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmmountString = withdrowField.value;
    const newWithdrowAmmount = parseFloat(newWithdrowAmmountString);

    //clear field
    withdrowField.value = '';


    if (isNaN(newWithdrowAmmount)) {
        alert("Enter a valid number");
        return;
    }


    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousTotalWithdrowString = withdrowTotalElement.innerText;
    const previousTotalWithdrow = parseFloat(previousTotalWithdrowString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrowAmmount > previousBalanceTotal) {
        alert('Oooppppssss!!!! You Do Not Have Sufficient Balance');
        return;
    }

    const currentwithdrowTotal = previousTotalWithdrow + newWithdrowAmmount;
    withdrowTotalElement.innerText = currentwithdrowTotal;

    //new balance
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmmount;
    balanceTotalElement.innerText = newBalanceTotal;





})