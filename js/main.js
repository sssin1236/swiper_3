const menu = ["ABOUT", "PORTFOLIO", "CONTACT", "VIDEO"];

const swiper = new Swiper("#swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    mousewheel: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function(index, className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    }
});


const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);

for(let el of navi){
    el.addEventListener("click", e=>{
        const isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd", activation);
    })
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}

const left = $(".left");
const right = $(".right");

left.on("mouseenter", function(e){
    classActive(this);
});

right.on("mouseenter", function(e){
    classActive(this);
});

function classActive(el){
    let isOn = $(el).hasClass("on");
    if(isOn) return;

    let target = $(el).attr("class").split(" ")[0];

    $(el).parent().find("article").removeClass("on");
    $(el).addClass("on");

    $(el).parent().find("article").find("div").removeClass("on");
    $(el).parent().find("article").find("#"+target).addClass("on");
}