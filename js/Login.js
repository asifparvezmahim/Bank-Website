document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const passWord = passwordField.value;
    console.log(email, passWord);


    //check e-mail and password
    if (email === 'asifmahim58@gmail.com' && passWord === 'secret') {
        window.location.href = 'bank.html'
    }

    else {
        alert('Not a valid password');
    }

})
