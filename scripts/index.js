class Controller{
    constructor(){
        this.menuToggle();
        this.hoverImageProject();
    }

    menuToggle(){
        let toggle = document.querySelector("#menu-toggle");
        let menu_mobile = document.querySelector("#menu-mobile");

        toggle.addEventListener("click", ()=>{
            toggle.classList.toggle("active");
            menu_mobile.classList.toggle("active");
        });
    }//Closing the menuToggle method. 

    hoverImageProject(){
        let img = document.querySelectorAll("[data-img]");
        let hover = document.querySelectorAll("[data-hover]");

        hover.forEach((item)=>{
            item.addEventListener("mouseover", ()=>{
                item.classList.toggle("hide");
            });
        });
        hover.forEach((item)=>{
            item.addEventListener("mouseout", ()=>{
                item.classList.toggle("hide");
            });
        });



    }
}

let controller = new Controller();



