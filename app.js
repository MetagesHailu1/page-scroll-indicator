let indicator = document.querySelector('.scroll-indicator  .progress');
//document.querySelector('.scroll-indicator  .progress');   (new concept)
let scrollHeight =
 document.documentElement.scrollHeight - document.documentElement.clientHeight;   //document.documentElement.something (new concept) 

window.addEventListener("scroll" , scroll);    //window.addEventListener("scroll" , scroll); (new concept)
function scroll(){

    let scrollTop= document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight)*100;
    indicator.style.width = `${scrolled}%`;
}