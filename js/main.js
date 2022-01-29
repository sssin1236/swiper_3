const menu = ["PROFILE", "PORTFOLIO", "CONTACT", "PREVIEW"];

const swiper = new Swiper("#swiper", {
    loop: false,
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
const left = $(".left");
const right = $(".right");

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

left.on("mouseenter", function(e){
    classActive(this);
});

right.on("mouseenter", function(e){
    classActive(this);
});


letter(".naver", "N", 5);
letter(".google", "G", 6);
letter(".kakao", "K", 5);



// 2번째 스와이퍼 탭 박스

const btns = document.querySelectorAll(".portfolio .tabBox li a");
const boxs = document.querySelectorAll(".tab .boxs>div");

btns.forEach((btn, index)=>{
    btn.addEventListener("click", e=>{

        for(let el of btns) el.classList.remove("on");
        btns[index].classList.add("on");

        for(let i of boxs) i.classList.remove("on");
        boxs[index].classList.add("on");
    });
});

//3번째 스와이퍼 폼요소

const contact = document.querySelector(".contact")
const forms = contact.querySelectorAll(".formBox .front");

forms.forEach((box, index)=>{
    box.addEventListener("click", e=>{
        forms[index].closest("article").classList.toggle("on");
    });
});

swiper.on("slideChangeTransitionEnd", e=>{
    let isOn = contact.classList.contains(".swiper-slide-active");

    if(!isOn){
        for(let el of forms) el.closest("article").classList.remove("on");
    }
})

//4번째 스와이퍼 클릭시 비디오 재생

const video = document.querySelector(".video");
const list = video.querySelectorAll(".list li");
const viewBox = video.querySelector(".viewBox");
const vid = viewBox.querySelector("video");

list.forEach((lis, index)=>{
    lis.addEventListener("click", e=>{
        let target = list[index].querySelector("video").getAttribute("src");
        let title = list[index].querySelector(".title h3").innerText;
        let sub_tit = list[index].querySelector(".title span").innerText;
        
        for(let li of list) li.classList.remove("on");
        list[index].classList.add("on");

        if(!target){
            alert("영상을 준비 중입니다.");
            return;
        }
        
        vid.setAttribute("src", target);
        viewBox.querySelector("h3").innerText = title;
        viewBox.querySelector("span").innerText = sub_tit;
    });
});



function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-custom-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}

function classActive(el){
    let isOn = $(el).hasClass("on");
    if(isOn) return;

    let target = $(el).attr("class").split(" ")[0];

    $(el).parent().find("article").removeClass("on");
    $(el).addClass("on");

    $(el).parent().find("article").find("div").removeClass("on");
    $(el).parent().find("article").find("#"+target).addClass("on");
}

function letter(selector, alpa, num){
    const elem = $(selector);
    const txt = elem.text().slice(alpa,[num]);

    $(selector).empty();

    for(let el of txt){
        elem.append(
            $("<span>")
            .text(el)
            .css({
                display: "inline-block"
            })
        )
    }
}