let toggle = document.querySelector(".menu-toggle");
let menu_mobile = document.querySelector(".menu-mobile");

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
    menu_mobile.classList.toggle("active");
});

