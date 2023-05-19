let userIcon = document.querySelector('#user-account');
let userPopIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () => userPopIcon.classList.toggle('active'));
let text = userPopIcon.querySelector('p');
let actionBtn = userPopIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if(user != null){
    text.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => logout());
}else{
    text.innerHTML = 'login to your account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href = '/login');
}
const logout = () => {
    sessionStorage.clear()
    location.reload();
}