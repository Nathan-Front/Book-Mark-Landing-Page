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

// My original code for catching the active class and changing the feature content
// you can delete this
/*
function changeImage(){
        const firstButton = document.getElementById('simple-bookmark');
        const secondButton = document.getElementById('speedy-search');
        const thirdButton = document.getElementById('easy-share');
        const images = document.getElementById('images');


        firstButton.addEventListener('click', function(){
            firstImage();
        });
        secondButton.addEventListener('click', function(){
            secondImage();
        });
        thirdButton.addEventListener('click', function(){
            thirdImage();
        });
        function firstImage(){
            images.src = 'images/illustration-features-tab-1.svg';
            document.getElementById("feature-title").innerText = "Bookmark in one click";
            document.getElementById("feature-text").innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
            
        }
        function secondImage(){
            images.src = 'images/illustration-features-tab-2.svg';
            document.getElementById("feature-title").innerText = "Intelligent search";
            document.getElementById("feature-text").innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
            document.getElementById("speedy-search").style.border = "border-bottom: 3px solid red";
            activeSecond.classList.add("active");
        }
        function thirdImage(){
            images.src = 'images/illustration-features-tab-3.svg';
            document.getElementById("feature-title").innerText = "Share your bookmarks";
            document.getElementById("feature-text").innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
            thirdButton.className = 'border-bottom-color bottom-focus2';
       }
}
*/

const firstButton = document.getElementById('simple-bookmark').onclick = featuresClick;
const secondButton = document.getElementById('speedy-search').onclick = featuresClick;
const thirdButton = document.getElementById('easy-share').onclick = featuresClick;
const images = document.getElementById('images');

// Get the container of all button of Feature
var featuresButton = document.getElementById("feature-links");
// Get all the button of Feature
var featuresButtonCount = featuresButton.getElementsByClassName("border-bottom-color");

function featuresClick() {
    const clickedButton = this.id;
// Loop through the buttons and add the active class to the current/clicked button + text contents
for (var i = 0; i < featuresButtonCount.length; i++) {
    featuresButtonCount[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
        // Statements to display the feature contents on clicked button 
        if(clickedButton === 'simple-bookmark'){
            images.src = 'images/illustration-features-tab-1.svg';
            document.getElementById("feature-title").innerText = "Bookmark in one click";
            document.getElementById("feature-text").innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    
        }else if(clickedButton === 'speedy-search'){
            images.src = 'images/illustration-features-tab-2.svg';
            document.getElementById("feature-title").innerText = "Intelligent search";
            document.getElementById("feature-text").innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
            
        }else if(clickedButton === 'easy-share'){
            images.src = 'images/illustration-features-tab-3.svg';
            document.getElementById("feature-title").innerText = "Share your bookmarks";
            document.getElementById("feature-text").innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        }
      }
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  // To stop the page from reloading when button was clicked  
  }return false;
}   


