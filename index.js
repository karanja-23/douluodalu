const menuBars = document.getElementById("menubars");
const myMenu = document.getElementById("mobilenavlinks");
const closeMenuBar = document.getElementById("close_icon")
menuBars.addEventListener('click', function(){
    myMenu.style.display = "block";
});
closeMenuBar.addEventListener('click', function(){
    myMenu.style.display = "none";
});