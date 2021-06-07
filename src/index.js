import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");
const underTopFaceRule = CSSRulePlugin.getRule(".under_face_top::after");


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
    // const cube = document.querySelector('.cube');
    // cube.addEventListener('click', (event)=>{
    //     event.preventDefault();
        
    //     cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX -90) + 'deg)';
    //     rotateX = rotateX - 90;
    //     console.log(rotateX);
    // })

    let isUnderFaceTopOpen = false
    const cube = document.querySelector('.cube');
    const faceTop = document.querySelector('.cube__face--top');
    faceTop.addEventListener('click', (event)=>{
        event.preventDefault();

        const underFaceTop = document.querySelector('.under_face_top');
        underFaceTop.style = 'transform: scaleX(1) rotateX( 90deg) translateZ(40vh)'


        gsap.to(underTopFaceRule, {cssRule: {right: '100%'}, duration: .5, delay: .5})

        isUnderFaceTopOpen = true
    })

    const underFaceTop = document.querySelector('.under_face_top');
    underFaceTop.addEventListener('click', ()=> {
        underFaceTop.style = 'transform: scaleX(0) rotateX( 90deg) translateZ(40vh)'

    //    setTimeout(()=>{
    //     gsap.to(underTopFaceRule, {cssRule: {right: '0'}})
    //    }, 500)

        isUnderFaceTopOpen = false
    })

    let isUnderFaceBottomOpen = false
    const faceBottom = document.querySelector('.cube__face--bottom');
    faceBottom.addEventListener('click', (event)=>{
        event.preventDefault();

        const underFaceBottom = document.querySelector('.under_face_bottom');
        underFaceBottom.style = 'transform: scaleX(1) rotateX(-90deg) translateZ(40vh)'


        // gsap.to(underBottomFaceRule, {cssRule: {right: '100%'}, duration: .5, delay: .5})

        isUnderFaceBottomOpen = true
    })

    const underFaceBottom = document.querySelector('.under_face_bottom');
    underFaceBottom.addEventListener('click', ()=> {
        underFaceBottom.style = 'transform: scaleX(0) rotateX(-90deg) translateZ(40vh)'

    //    setTimeout(()=>{
    //     gsap.to(underBottomFaceRule, {cssRule: {right: '0'}})
    //    }, 500)

        isUnderFaceBottomOpen = false
    })


    let isUnderFaceBackOpen = false
    const faceBack = document.querySelector('.cube__face--back');
    faceBack.addEventListener('click', (event)=>{
        event.preventDefault();

        const underFaceBack = document.querySelector('.under_face_back');
        if(isUnderFaceBackOpen === false) {
            underFaceBack.style.transform = 'scaleX(1) rotateY(180deg) rotate(180deg) translateZ(40vh)'
            isUnderFaceBackOpen = true
        } else {
            underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40vh)';
            isUnderFaceBackOpen = false
        }
    })

    const underFaceBack = document.querySelector('.under_face_back');
    underFaceBack.addEventListener('click', ()=> {
        underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40vh)';
        isUnderFaceBackOpen = false
    })




window.addEventListener('click', (e)=>{
    console.log(e.target)
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

    function rotateCube(event) {
        event.preventDefault();
        console.log('start')
        const cube = document.querySelector('.cube');


        // zamykanie wysuniętych stron 
        
        if (isUnderFaceTopOpen === true) {
            const underFaceTop = document.querySelector('.under_face_top');
            underFaceTop.style = 'transform: scaleX(0) rotateX( 90deg) translateZ(40vh)'      
            isUnderFaceTopOpen = false
        }

        if (isUnderFaceBottomOpen === true) {
            underFaceBottom.style = 'transform: scaleX(0) rotateX(-90deg) translateZ(40vh)'
            isUnderFaceBottomOpen = false
        }

        if (isUnderFaceBackOpen === true) {
            underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40vh)';
            isUnderFaceBackOpen = false
        }





        if (this.oldScroll <= this.scrollY) {
            cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX - 90) + 'deg)';
            rotateX = rotateX - 90;
        } else {
            cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX + 90) + 'deg)';
            rotateX = rotateX + 90;
        }
        console.log(rotateX)
        this.oldScroll = this.scrollY;

        console.log('koniec')
    }

window.addEventListener('scroll', debounce(rotateCube, 50));



let contactLeftValue = "100%"
const contactNavBtn = document.querySelector('.contactNavBtn');
contactNavBtn.addEventListener('click', () => {
    console.log(contactLeftValue)

    const contactContainer = document.querySelector('.contactContainer');
    if(contactLeftValue === "20%"){
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
    } else {
        contactContainer.style['left'] = "20%";
        contactLeftValue = "20%";
    }    
})




let resizeContactLeftValue = "100%"
const resizeContactNavBtn = document.querySelector('.resizeContactNavBtn');
resizeContactNavBtn.addEventListener('click', () => {

    const contactContainer = document.querySelector('.contactContainer');
    if(resizeContactLeftValue === "0%"){
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
    } else {
        contactContainer.style['left'] = "0%";
        resizeContactLeftValue = "0%";
    }    
})


// navbarBtns

const homeNavBtn = document.querySelector('.homeNavBtn');
homeNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
            rotateX = 0
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
        rotateX = 0
    }    
})

const processNavBtn = document.querySelector('.processNavBtn');
processNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
    }    
})

const portfolioNavBtn = document.querySelector('.portfolioNavBtn');
portfolioNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
    }     
})

const whyWeNavBtn = document.querySelector('.whyWeNavBtn');
whyWeNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
            rotateX = -270
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
        rotateX = -270
    }         
})


// resizeMenuBtns

const resizeHomeNavBtn = document.querySelector('.resizeHomeNavBtn');
resizeHomeNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
            rotateX = 0
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
        rotateX = 0
    }
})

const resizeProcessNavBtn = document.querySelector('.resizeProcessNavBtn');
resizeProcessNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
    } 
})

const resizePortfolioNavBtn = document.querySelector('.resizePortfolioNavBtn');
resizePortfolioNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
    } 
})

const resizeWhyWeNavBtn = document.querySelector('.resizeWhyWeNavBtn');
resizeWhyWeNavBtn.addEventListener('click', () => {
    
    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
            rotateX = -270
        }, 400)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
        rotateX = -270
    }
})