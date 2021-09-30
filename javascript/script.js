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
/*
function changebutton(){
        if(document.getElementById("burger-button").src == "images/icon-close.svg"){
            document.getElementById("burger-button").src= "images/icon-close.svg";
        }else{
            document.getElementById("burger-button").src= "images/icon-hamburger.svg";
        }
}*/
