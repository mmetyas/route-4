let mailInput = document.querySelector('#mailInput')
let password = document.querySelector('#password')
let btn = document.querySelector('.btn')
let alertData =document.querySelector('.alertData')



function validation(element) {

    // console.log(element.id);
    // console.log(element.value);

    let regex = {
        mailInput: /^([a-z0-9]+)@(gmail|yahoo)\.(com|eg)$/,
        password: /^[0-9]{3,10}$/
    }
    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.replace('d-block', 'd-none');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.replace('d-none', 'd-block');
    }
}
btn.addEventListener('click', function(){
    if(mailInput.value==='' || password.value=== ''){
        alertData.classList.replace('d-none', 'd-block');
    }else{
        window.location='home.html'
    }
})
