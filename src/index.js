import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");

const tl = gsap.timeline()

    tl
    .from(['.box3', '.box2', '.box1'], {scaleY: 0, transformOrigin: 'top', duration: .75})
    .to(rule, {cssRule: {left: '100%'}, duration: .5}, .75)
    .to(['.box3'], {scaleX: 0, transformOrigin: 'left', duration: .5}, 2.25)
    .to(['.box2'], {scaleX: 0, transformOrigin: 'right', duration: .5}, 4)
    .fromTo('.leftBox', {x: '-100%', duration: .5}, {x: 0}, 5.15)
    .fromTo('.bgDiv', {opacity: 0}, {opacity: 1, duration: 3}, 5.5)
    .to('.box1', {clearProps: "transform"}, 4)
    // .to('.box1Text', {color: '#fff', scale: 1.2, duration: 3}, 5.5)


    const inside = document.querySelector('.inside');
    inside.addEventListener('click', function(e) {
        console.log('click inside1')            

        const inside = document.querySelector('.inside');
        const inside2 = document.querySelector('.inside2');
        const inside3 = document.querySelector('.inside3');
        const inside4 = document.querySelector('.inside4');

        inside.classList.remove("state-one");
        inside2.classList.remove("state-two");
        inside3.classList.remove("state-three");
        inside4.classList.remove("state-four");

        inside.classList.add("state-two");
        inside2.classList.add("state-three");
        inside3.classList.add("state-four");
        inside4.classList.add("state-one");


        console.log(inside)
        console.log(inside2)
        console.log(inside3)
        console.log(inside4)
    })

    const inside4 = document.querySelector('.inside4');
    inside4.addEventListener('click', function(e) {
        console.log('click inside4')

        const inside = document.querySelector('.inside');
        const inside2 = document.querySelector('.inside2');
        const inside3 = document.querySelector('.inside3');
        const inside4 = document.querySelector('.inside4');

        inside.classList.remove("state-two");
        inside2.classList.remove("state-three");
        inside3.classList.remove("state-four");
        inside4.classList.remove("state-one");

        inside.classList.add("state-three");
        inside2.classList.add("state-four");
        inside3.classList.add("state-one");
        inside4.classList.add("state-two");

        console.log(inside)
        console.log(inside2)
        console.log(inside3)
        console.log(inside4)
    })

    const inside3 = document.querySelector('.inside3');
    inside3.addEventListener('click', function(e) {
        console.log('click inside3')

        const inside = document.querySelector('.inside');
        const inside2 = document.querySelector('.inside2');
        const inside3 = document.querySelector('.inside3');
        const inside4 = document.querySelector('.inside4');

        inside.classList.remove("state-three");
        inside2.classList.remove("state-four");
        inside3.classList.remove("state-one");
        inside4.classList.remove("state-two");

        inside.classList.add("state-four");
        inside2.classList.add("state-one");
        inside3.classList.add("state-two");
        inside4.classList.add("state-three");

        console.log(inside)
        console.log(inside2)
        console.log(inside3)
        console.log(inside4)
    })

    const inside2 = document.querySelector('.inside2');
    inside2.addEventListener('click', function(e) {
        console.log('click inside2')

        const inside = document.querySelector('.inside');
        const inside2 = document.querySelector('.inside2');
        const inside3 = document.querySelector('.inside3');
        const inside4 = document.querySelector('.inside4');

        inside.classList.remove("state-four");
        inside2.classList.remove("state-one");
        inside3.classList.remove("state-two");
        inside4.classList.remove("state-three");

        inside.classList.add("state-one");
        inside2.classList.add("state-two");
        inside3.classList.add("state-three");
        inside4.classList.add("state-four");

        console.log(inside)
        console.log(inside2)
        console.log(inside3)
        console.log(inside4)
    })




















    const box1 = document.querySelector('.box1');
    box1.addEventListener('click', function(e) {
        console.log('click inside1')            

        const box1 = document.querySelector('.box1');
        const box4 = document.querySelector('.box4');
        const box5 = document.querySelector('.box5');
        const box6 = document.querySelector('.box6');

        box1.classList.remove("state-one");
        box4.classList.remove("state-two");
        box5.classList.remove("state-three");
        box6.classList.remove("state-four");

        box1.classList.add("state-two");
        box4.classList.add("state-three");
        box5.classList.add("state-four");
        box6.classList.add("state-one");
    })

    const box6 = document.querySelector('.box6');
    box6.addEventListener('click', function(e) {


        const box1 = document.querySelector('.box1');
        const box4 = document.querySelector('.box4');
        const box5 = document.querySelector('.box5');
        const box6 = document.querySelector('.box6');

        box1.classList.remove("state-two");
        box4.classList.remove("state-three");
        box5.classList.remove("state-four");
        box6.classList.remove("state-one");

        box1.classList.add("state-three");
        box4.classList.add("state-four");
        box5.classList.add("state-one");
        box6.classList.add("state-two");
        
    })

    const box5 = document.querySelector('.box5');
    box5.addEventListener('click', function(e) {

        const box1 = document.querySelector('.box1');
        const box4 = document.querySelector('.box4');
        const box5 = document.querySelector('.box5');
        const box6 = document.querySelector('.box6');

        box1.classList.remove("state-three");
        box4.classList.remove("state-four");
        box5.classList.remove("state-one");
        box6.classList.remove("state-two");

        box1.classList.add("state-four");
        box4.classList.add("state-one");
        box5.classList.add("state-two");
        box6.classList.add("state-three");
    })

    const box4 = document.querySelector('.box4');
    box4.addEventListener('click', function(e) {

        const box1 = document.querySelector('.box1');
        const box4 = document.querySelector('.box4');
        const box5 = document.querySelector('.box5');
        const box6 = document.querySelector('.box6');

        box1.classList.remove("state-four");
        box4.classList.remove("state-one");
        box5.classList.remove("state-two");
        box6.classList.remove("state-three");

        box1.classList.add("state-one");
        box4.classList.add("state-two");
        box5.classList.add("state-three");
        box6.classList.add("state-four");
    })

    window.addEventListener('click', e => {
        console.log(e.target)
    })



    