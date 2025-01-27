let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
});

let typingEffect = new Typed("#text",{
    strings:["Web Developer","Coder","SDE"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backdelay:1000,
});








