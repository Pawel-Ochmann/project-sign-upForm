const inputs = document.querySelectorAll('input');
inputs.forEach((e)=> {
   e.addEventListener('click', clearError)
})

const inputPass = document.querySelector('#password');
const inputPassConfirm = document.querySelector('#confirmPassword')

inputPass.addEventListener('focusout', checkPassword);
inputPassConfirm.addEventListener('focusout', checkPassword);


function checkPassword() {
    const password1 = inputPass.value;
    const password2 = inputPassConfirm.value;

    if (password1 && password1 === password2) {
        inputPass.classList.remove('error');
        inputPassConfirm.classList.remove('error')

        inputPass.classList.add('validPassword');
        inputPassConfirm.classList.add('validPassword');
    }
    else {
        inputPass.classList.add('error');
        inputPassConfirm.classList.add('error')

        inputPass.classList.remove('validPassword');
        inputPassConfirm.classList.remove('validPassword');
    }
}


const submitButton = document.querySelector('button');
submitButton.addEventListener('click', ()=> {

    inputs.forEach((e)=> {
        if (!e.valid) {
            e.classList.add('error')
        }
    })
})

function clearError() {
    this.classList.remove('error');
}
