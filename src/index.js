import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");

const tl = gsap.timeline()

    tl
    .from(['.box3', '.box2', '.box1'], {scaleY: 0, transformOrigin: 'top', duration: .75})
    .to(rule, {cssRule: {left: '100%'}, duration: .5}, .75)
    .to(['.box3'], {scaleX: 0, transformOrigin: 'left', duration: .5}, 2.25)
    .to(['.box2'], {scaleX: 0, transformOrigin: 'right', duration: .5}, 4)
    .to(['.scene'], {opacity: 1}, 3)
    .to(['.box1'], {backgroundColor: "transparent"}, 3)
    .fromTo('.leftBox', {x: '-100%', duration: .5}, {x: 0}, 3)
    .fromTo('.bgDiv', {opacity: 0}, {opacity: 1, duration: 3}, 2)
    .to('.main', {background: '#485563',
        background: '-webkit-linear-gradient(to right, #29323c, #485563)', 
        background: 'linear-gradient(to right, #29323c, #485563)', duration: 1}, 4)
    .to('.box1', {clearProps: "transform"}, 4)


    let rotateX = 0
    const cube = document.querySelector('.cube');
    cube.addEventListener('click', (event)=>{
        event.preventDefault();
        
        cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX -90) + 'deg)';
        rotateX = rotateX - 90;
        console.log(rotateX);
    })


    // working on scroll
    // let rotateX = 0
    // window.onscroll = function() {
    //     const cube = document.querySelector('.cube');        
        
    //     if (this.oldScroll < this.scrollY) {
    //         cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX - 90) + 'deg)';
    //         rotateX = rotateX - 90;
    //         console.log(rotateX);
    //     } else {
    //         cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX + 90) + 'deg)';
    //         rotateX = rotateX + 90;
    //         console.log(rotateX);
    //     }
    //     console.log(rotateX)
    //     this.oldScroll = this.scrollY;
    // }

//     function rotateCube(event) {
//         event.preventDefault();
//         console.log('start')
//         const cube = document.querySelector('.cube'); 
//         if (this.oldScroll < this.scrollY) {
//             cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX - 90) + 'deg)';
//             rotateX = rotateX - 90;
//         } else {
//             cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX + 90) + 'deg)';
//             rotateX = rotateX + 90;
//         }
//         console.log(rotateX)
//         this.oldScroll = this.scrollY;

//         console.log('koniec')
//     }

// window.addEventListener('scroll', throttle(rotateCube, 1000));



let contactLeftValue = "100%"
const contactNavBtn = document.querySelector('.contactNavBtn');
contactNavBtn.addEventListener('click', () => {

    const contactContainer = document.querySelector('.contactContainer');
    if(contactLeftValue === "20%"){
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
    } else {
        contactContainer.style['left'] = "20%";
        contactLeftValue = "20%";
    }    
})

const homeNavBtn = document.querySelector('.homeNavBtn');
homeNavBtn.addEventListener('click', () => {
    const cube = document.querySelector('.cube');
    cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
    rotateX = 0
})

const processNavBtn = document.querySelector('.processNavBtn');
processNavBtn.addEventListener('click', () => {
    const cube = document.querySelector('.cube');
    cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
})

const portfolioNavBtn = document.querySelector('.portfolioNavBtn');
portfolioNavBtn.addEventListener('click', () => {
    const cube = document.querySelector('.cube');
    cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
})

const whyWeNavBtn = document.querySelector('.whyWeNavBtn');
whyWeNavBtn.addEventListener('click', () => {
    const cube = document.querySelector('.cube');
    cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
    rotateX = -270
})