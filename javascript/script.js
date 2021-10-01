/*function for the burger menu*/
const toggle = document.getElementById("burger-links");
const menu = document.querySelector("#menu-links");
const mobileClose = document.getElementById("mobile-close");

toggle.addEventListener('click', function(){
    if(menu.classList.contains("menuLinks")){
        menu.classList.remove("menuLinks");
        toggle.classList.remove("active");
    }else{
        menu.classList.add("menuLinks");
        toggle.classList.add("active");
    }
});

mobileClose.addEventListener('click', function(){
    if(menu.classList.contains("menuLinks")){
        menu.classList.remove("menuLinks");
        mobileClose.classList.remove("active");
    }else{
        return;
    }
});
/*function to validate the form*/
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateEmail();
});
function validateEmail(){
    const inputEmail = email.value.trim();
    if(inputEmail === ''){
        sendErrorMessage(email, 'This must not be empty');
    }else if(!emailFormat(inputEmail)){
        sendErrorMessage(email, 'Whoops, make sure its an email');
    }else{
        sendSuccesfulMessage(email, 'Great job!');
    }
}
function sendErrorMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className = 'form-input error';
    span.innerText = message;
}
function sendSuccesfulMessage(input, message){
    const validateSuccess= input.parentElement;
    const span = validateSuccess.querySelector('span');
    validateSuccess.className = 'form-input success';
    span.innerText=message;
}
function emailFormat(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}