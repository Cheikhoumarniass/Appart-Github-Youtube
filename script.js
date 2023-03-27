let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.menu .menu_btn');
function openMenu(){
    closeBtn.style.display = "block";
    menu.style.width = '100%'
    document.body.style.overflow="hidden"
}
 function closeMenu(){
    closeBtn.style.display = "none";
    menu.style.width = '0%'
    document.body.style.overflow="auto"
 }
const imaMenu=document.getElementById("imaMenu")
console.log(imaMenu);
imaMenu.addEventListener("mousemove",function(){
    imaMenu.style.opacity='0.5'
    imaMenu.style.transformY=("scall" (2))
})
 
 