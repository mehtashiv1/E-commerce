const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

//login
const loginButton = document.getElementById('login-btn');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
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


//login
loginButton.addEventListener('click', () => {
  const email = emailField.value;
  const password = passwordField.value;

  fetch('http://localhost:5500/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
            window.location.href = 'http://localhost:5500/index';
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error(error));
});
