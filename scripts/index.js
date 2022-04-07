class Controller{
    constructor(){
        this.menuToggle();
        this.hoverImageProject();
        this.hoverImageKnowledge();
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

    hoverImageKnowledge(){
        let img = document.querySelectorAll("[data-hoverKnowledge]");

        img.forEach((item)=>{
            item.addEventListener("mouseover", ()=>{
                item.classList.toggle("hide")
                this.changeTextKnowledge(item)
            })
        })
    
        img.forEach((item)=>{
            item.addEventListener("mouseout", ()=>{
                item.classList.toggle("hide")
                this.changeTextKnowledge(item)
            })
        })
    }

    changeTextKnowledge(item){
        let img = Object.values(item.dataset)[0];
        let msg = document.querySelector(".msg");
        let texts = document.querySelectorAll("[data-textKnowledge]");
        texts.forEach((text) =>{
            let textValue = Object.values(text.dataset)[0];
            if(img == textValue){
                text.classList.toggle("show");
                msg.classList.toggle("hide");
            }
        })
    }
}

let controller = new Controller();



