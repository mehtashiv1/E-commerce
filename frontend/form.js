window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(user.email){
            location.replace('/')
        }
    }
}

//form 
let formBtn = document.querySelector('.submit-btn');
formBtn.addEventListener('click', () =>{
    let fullname = document.querySelector('#name') || null;
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number') || null; 
    let tac = document.querySelector('#tc') || null;

    //form validation
    if(fullname!=null){
        if(fullname.value.length < 3){ //signup page
            showFormError('name must be atleast 3 letter long')
        }else if(!email.value.length){
            showFormError('enter your email')
        }else if(password.value.length < 8){
            showFormError('password must be 8 letters long')
        }else if(Number(number) || number.value.length < 10){
            showFormError('enter a valid phone number')
        }else if(!tac){
            showFormError('you must agree with our terms and conditions')
        }else{
            sendData('/signup', {
                name: fullname.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.value,
            })
        }
    }else{ //login page
        if(!email.value.length || !password.value.length){
            showFormError('Fill all the inputs')
        }else{
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})