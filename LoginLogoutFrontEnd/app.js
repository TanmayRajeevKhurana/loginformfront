const signin_btn = document.querySelector('#signin-button');
const register_btn = document.querySelector('#register-button');
const container = document.querySelector('.container');

register_btn.addEventListener('click',()=>{
    container.classList.add('register-mode');
});


signin_btn.addEventListener('click',()=>{
    container.classList.remove('register-mode');
});