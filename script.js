'use strict';
const home=document.querySelector(".home");
const profile=document.querySelector(".profile");
const contact=document.querySelector(".contact");
const close=document.querySelector(".close");
const overlay=document.querySelector(".overlay");
const btncloseModal=document.querySelector(".close-modal");
home.addEventListener('click',function(){
    document.querySelector(".homeContent").classList.remove('hidden'); 
    document.querySelector(".window").classList.remove('hidden');
});
profile.addEventListener('click',function(){
    document.querySelector(".profileContent").classList.remove('hidden'); 
    document.querySelector(".window").classList.remove('hidden');
});
contact.addEventListener('click',function(){
    document.querySelector(".contactContent").classList.remove('hidden'); 
    document.querySelector(".window").classList.remove('hidden');
});
function closeWindow(){
    document.querySelector(".window").classList.add('hidden');
}
close.addEventListener("click",closeWindow);

 



