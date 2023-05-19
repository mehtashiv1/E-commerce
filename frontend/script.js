const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showPass"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-text"),
    login = document.querySelector(".login-link");

    //js code to show/hide pass and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", () =>{
            pwFields.forEach(pwfield =>{
                if(pwfield.type === "password"){
                    pwfield.type = "text";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash","uil-eye")
                    })
                }else{
                    pwfield.type = "password";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye","uil-eye-slash")
                    })
                }
            } )
        } )
    } )
    // js code to appear sign/login form
    signUp.addEventListener("click", () => {
        container.classList.add("active");
    });
    login.addEventListener("click", () => {
        container.classList.remove("active");
    });

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

const ok = document.querySelector(".popup-btn");
ok.addEventListener("click", () => {
    container.classList.remove("active");
});
/*
const form = document.getElementById("form");
const rname = document.getElementById("rname");
const remail = document.getElementById("remail");
const pwd = document.getElementById("rpassword");
const pwd2 = document.getElementById("rpassword2");

form.addEventListener('button',e=>{
    e.preventDefault();

    validateInputs();
    openPopup();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = " ";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const rnameValue = rname.value.trim();
    const remailValue = remail.value.trim();
    const pwdValue = pwd.value.trim();
    const pwd2Value = pwd2.value.trim();

    if(rnameValue === '') {
        setError(rname, 'Name is required');
    }else{
        setSuccess(rname);
    }
    if(remailValue === '') {
        setError(remail, 'Email is required');
    }else if(!isValidEmail(remailValue)){
        setError(remail, 'Provide a valid email address');
    }
    else{
        setSuccess(remail);
    }
    if(pwdValue === '') {
        setError(pwd, 'Password is required');
    }else if(pwd.length < 8){
        setError(pwd, 'Password must be atleast 8 characters');
    }
    else{
        setSuccess(pwd);
    }
    if(pwd2Value === '') {
        setError(pwd2, 'Please confirm your password');
    }else if(pwd2Value !== pwdValue){
        setError(pwd2, "Passwords do not match");
    }
    else{
        setSuccess(pwd2);
    }
    
}
*/
const form = document.querySelector('.signup form');
const nameInput = document.getElementById('rname');
const emailInput = document.getElementById('remail');
const passwordInput = document.getElementById('rpassword');
const password2Input = document.getElementById('rpassword2');

form.addEventListener('submit', function(event) {
  let valid = true;

  // Validate name input
  if (!nameInput.value.trim()) {
    valid = false;
    nameInput.nextElementSibling.innerHTML = 'Please enter your name';
  } else {
    nameInput.nextElementSibling.innerHTML = '';
  }

  // Validate email input
  if (!emailInput.value.trim()) {
    valid = false;
    emailInput.nextElementSibling.innerHTML = 'Please enter your email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    valid = false;
    emailInput.nextElementSibling.innerHTML = 'Please enter a valid email';
  } else {
    emailInput.nextElementSibling.innerHTML = '';
  }

  // Validate password input
  if (!passwordInput.value.trim()) {
    valid = false;
    passwordInput.nextElementSibling.innerHTML = 'Please enter a password';
  } else if (passwordInput.value.trim().length < 8) {
    valid = false;
    passwordInput.nextElementSibling.innerHTML = 'Password must be at least 8 characters long';
  } else {
    passwordInput.nextElementSibling.innerHTML = '';
  }

  // Validate confirm password input
  if (!password2Input.value.trim()) {
    valid = false;
    password2Input.nextElementSibling.innerHTML = 'Please confirm your password';
  } else if (passwordInput.value !== password2Input.value) {
    valid = false;
    password2Input.nextElementSibling.innerHTML = 'Passwords do not match';
  } else {
    password2Input.nextElementSibling.innerHTML = '';
  }

  if (!valid) {
    event.preventDefault();
  }else{
    onclick="openPopup()";
  }
});

