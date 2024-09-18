const menuBars = document.getElementById("menubars");
const myMenu = document.getElementById("mobilenavlinks");
const closeMenuBar = document.getElementById("close_icon")
menuBars.addEventListener('click', function(){
    myMenu.style.display = "block";
});
closeMenuBar.addEventListener('click', function(){
    myMenu.style.display = "none";
});

const loginbtn = document.getElementById("headercont3");
const loginContainer = document.getElementById("loginContainer");
const bodyContainer = document.getElementById("container");
const mobileLoginBtn = document.getElementById("mobileLogin");
loginbtn.addEventListener('click', function(){
    bodyContainer.style.display = "none";
    loginContainer.style.display = "block";
    
});
mobileLoginBtn.addEventListener('click', function(){    
    bodyContainer.style.display = "none";
    loginContainer.style.display = "block";
    
});


console.log("hello")