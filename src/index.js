import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import debounce from 'lodash.debounce';
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");
const choseAfterRule = CSSRulePlugin.getRule(".chosen::after");


// push scroll top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// entrance animations
const tl = gsap.timeline()

if(document.body.clientWidth > 800){

    tl
    .to(rule, {cssRule: {opacity: '1'}, duration: 0}, 0)
    .from(['.box3', '.box2', '.box1'], {scaleY: 0, transformOrigin: 'top', duration: .75})
    .to(rule, {cssRule: {left: '100%'}, duration: .5}, .75)
    .to(['.box3'], {scaleX: 0, transformOrigin: 'left', duration: .5}, 2.25)
    .to(['.box2'], {scaleX: 0, transformOrigin: 'right', duration: .5}, 4)
    .to(['.scene'], {opacity: 1}, 3)
    .to(['.box1'], {backgroundColor: "transparent"}, 3)
    .fromTo('.leftBox', {x: '-100%', duration: .5}, {x: 0}, 3)
    .fromTo('.bgDiv', {opacity: 0}, {opacity: 1, duration: 3}, 2)
    .to('.main', 
        {background: '#F0F2F0;',
        background: '-webkit-linear-gradient(to right, #000C40, #F0F2F0)', 
        background: 'linear-gradient(to right, #000C40, #F0F2F0)', duration: 1},
         4)
    .to(choseAfterRule, {cssRule: {opacity: 1}, duration: .5}, 4)

} else {

    tl
    .set(['.box3', '.box2'], {left: '0%', width: '100%', scaleY: 1, zIndex: 9999})
    .fromTo(rule, {cssRule: {opacity: '0'}}, {cssRule: {opacity: '1'}, duration: 0}, 0)
    .fromTo(rule, {cssRule: {left: '0%'}}, {cssRule: {left: '100%'}, duration: .5}, .75)
    .to(['.box3'], {scaleX: 0, transformOrigin: 'left', duration: .5}, 2.25)
    .to(['.box2'], {scaleX: 0, transformOrigin: 'right', duration: .5}, 4)
    .to(['.scene'], {opacity: 1}, 3)
    .to(['.box1'], {backgroundColor: "transparent"}, 3)
    .fromTo('.leftBox', {x: '-100%', duration: .5}, {x: 0}, 3)
    .fromTo('.bgDiv', {opacity: 0}, {opacity: 1, duration: 3}, 2)
    .to('.main', 
        {background: '#F0F2F0;',
        background: '-webkit-linear-gradient(to right, #000C40, #F0F2F0)', 
        background: 'linear-gradient(to right, #000C40, #F0F2F0)', duration: 1},
         4)
    .fromTo('.topBox', {zIndex: -1}, {zIndex: 1}, 4)
    .to(choseAfterRule, {cssRule: {opacity: 1}, duration: .5}, 4)
}
   
// general values
let rotateX = 0
let cubeFaceToUser = 'home';
const body = document.querySelector('body');

// select front face of cube
const makeCubeFaceToUserVisible = (face) => {
    const faceOne = document.querySelector('.homeContainer');
    const faceTwo = document.querySelector('.processContainer');
    const faceThree = document.querySelector('.portfolioContainer');
    const faceFour = document.querySelector('.whyWeContainer');
    const faceFive = document.querySelector('.rightContainer');
    const faceSix = document.querySelector('.leftContainer');

    const homeNavBtn = document.querySelector('.homeNavBtn');
    const processNavBtn = document.querySelector('.processNavBtn');
    const portfolioNavBtn = document.querySelector('.portfolioNavBtn');
    const whyWeNavBtn = document.querySelector('.whyWeNavBtn');
    const extraOne = document.querySelector('.extraOne');
    const extraTwo = document.querySelector('.extraTwo');

    const resizeHomeNavBtn = document.querySelector('.resizeHomeNavBtn');
    const resizeProcessNavBtn = document.querySelector('.resizeProcessNavBtn');
    const resizePortfolioNavBtn = document.querySelector('.resizePortfolioNavBtn');
    const resizeWhyWeNavBtn = document.querySelector('.resizeWhyWeNavBtn');
    const resizeExtraOne = document.querySelector('.resizeExtraOne');
    const resizeExtraTwo = document.querySelector('.resizeExtraTwo');

    const allFaces = document.querySelectorAll('.contentHolder')
    const allNavLinks = document.querySelectorAll('li');

    if(cubeFaceToUser === 'home') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'))
            faceOne.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            homeNavBtn.classList.add('chosen');
            resizeHomeNavBtn.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'proces') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'))
            faceTwo.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            processNavBtn.classList.add('chosen');
            resizeProcessNavBtn.classList.add('chosen');
        }, 200) 
    }

    if(cubeFaceToUser === 'portfolio') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'));
            faceThree.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'));
            portfolioNavBtn.classList.add('chosen');
            resizePortfolioNavBtn.classList.add('chosen');
        }, 200)   
    }

    if(cubeFaceToUser === 'dlaczego my') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'))
            faceFour.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            whyWeNavBtn.classList.add('chosen');
            resizeWhyWeNavBtn.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'right') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'))
            faceFive.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            extraOne.classList.add('chosen');
            resizeExtraOne.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'left') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('contentHolderVisible'))
            faceSix.classList.add('contentHolderVisible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            extraTwo.classList.add('chosen');
            resizeExtraTwo.classList.add('chosen');
        }, 200)
    }
}
makeCubeFaceToUserVisible(cubeFaceToUser)


// underFaces logic

const faceOne = document.querySelector('.homeContainer');
const faceTwo = document.querySelector('.processContainer');
const faceThree = document.querySelector('.portfolioContainer');
const faceFour = document.querySelector('.whyWeContainer');
const faceFive = document.querySelector('.rightContainer');
const faceSix = document.querySelector('.leftContainer');

let isUnderFaceTopOpen = false;
const cube = document.querySelector('.cube');
const faceTop = document.querySelector('.cube__face--top');
faceTop.addEventListener('click', ()=>{
    const underFaceTop = document.querySelector('.under_face_top');
    underFaceTop.style = 'transform: scaleX(1) rotateX( 90deg) translateZ(40vh)'
    isUnderFaceTopOpen = true;

    faceTwo.classList.remove('contentHolderVisible');
})

const underFaceTop = document.querySelector('.under_face_top');
underFaceTop.addEventListener('click', ()=> {
    underFaceTop.style = 'transform: scaleX(0) rotateX( 90deg) translateZ(40vh)';
    isUnderFaceTopOpen = false;

    setTimeout(() => {
        faceTwo.classList.add('contentHolderVisible');
    }, 150)
})

let isUnderFaceBottomOpen = false;
const faceBottom = document.querySelector('.cube__face--bottom');
faceBottom.addEventListener('click', ()=>{
    const underFaceBottom = document.querySelector('.under_face_bottom');
    underFaceBottom.style = 'transform: scaleX(1) rotateX(-90deg) translateZ(40vh)';
    isUnderFaceBottomOpen = true;

    faceFour.classList.remove('contentHolderVisible');
})

const underFaceBottom = document.querySelector('.under_face_bottom');
underFaceBottom.addEventListener('click', ()=> {
    underFaceBottom.style = 'transform: scaleX(0) rotateX(-90deg) translateZ(40vh)';
    isUnderFaceBottomOpen = false;

    setTimeout(() => {
        faceFour.classList.add('contentHolderVisible');
    }, 150)
})

let isUnderFaceRightOpen = false;
const faceRight = document.querySelector('.cube__face--right');
faceRight.addEventListener('click', ()=> {

    const underFaceRight = document.querySelector('.under_face_right');
    if(isUnderFaceRightOpen === false) {
        underFaceRight.style['width'] = '80vh'
        underFaceRight.style['overflow'] = 'normal'
        isUnderFaceRightOpen = true

        faceFive.classList.remove('contentHolderVisible');
    } else {
        underFaceRight.style['width'] = '0vh'
        underFaceRight.style['overflow'] = 'hidden'
        isUnderFaceRightOpen = false

        setTimeout(() => {
            faceFive.classList.add('contentHolderVisible');
        }, 150)
    }
})

const underFaceRight = document.querySelector('.under_face_right');
underFaceRight.addEventListener('click', ()=>{
    underFaceRight.style['width'] = '0vh'
    underFaceRight.style['overflow'] = 'hidden'
    isUnderFaceRightOpen = false

    setTimeout(() => {
        faceFive.classList.add('contentHolderVisible');
    }, 150)
})

let isUnderFaceLeftOpen = false
const faceLeft = document.querySelector('.cube__face--left');
faceLeft.addEventListener('click', ()=> {

    const underFaceLeft = document.querySelector('.under_face_left');
    if(isUnderFaceLeftOpen === false) {
        underFaceLeft.style['width'] = '80vh'
        underFaceLeft.style['overflow'] = 'normal'
        isUnderFaceLeftOpen = true

        faceSix.classList.remove('contentHolderVisible');
    } else {
        underFaceLeft.style['width'] = '0vh'
        underFaceLeft.style['overflow'] = 'hidden'
        isUnderFaceLeftOpen = false

        setTimeout(() => {
            faceSix.classList.add('contentHolderVisible');
        }, 150)
    }
})

const underFaceLeft = document.querySelector('.under_face_left');
underFaceLeft.addEventListener('click', ()=>{
    underFaceLeft.style['width'] = '0vh'
    underFaceLeft.style['overflow'] = 'hidden'
    isUnderFaceLeftOpen = false

    setTimeout(() => {
        faceSix.classList.add('contentHolderVisible');
    }, 150)
})


let isUnderFaceBackOpen = false
const faceBack = document.querySelector('.cube__face--back');
faceBack.addEventListener('click', (event)=>{
    event.preventDefault();

    const underFaceBack = document.querySelector('.under_face_back');
    if(isUnderFaceBackOpen === false) {
        underFaceBack.style.transform = 'scaleX(1) rotateY(180deg) rotate(180deg) translateZ(40.1vh)';
        isUnderFaceBackOpen = true;

        faceThree.classList.remove('contentHolderVisible');
    } else {
        underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40.1vh)';
        isUnderFaceBackOpen = false;

        setTimeout(() => {
            faceThree.classList.add('contentHolderVisible');
        }, 150)
    }
})

const underFaceBack = document.querySelector('.under_face_back');
underFaceBack.addEventListener('click', () => {
    underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40.1vh)';
    isUnderFaceBackOpen = false

    setTimeout(() => {
        faceThree.classList.add('contentHolderVisible');
    }, 150)
})

let isUnderFaceFrontOpen = false
const faceFront = document.querySelector('.cube__face--front');
faceFront.addEventListener('click', (event)=>{
    event.preventDefault();

    const underFaceFront = document.querySelector('.under_face_front');
    if(isUnderFaceFrontOpen === false) {
        underFaceFront.style.transform = 'scaleX(1) rotateX( 0deg) translateZ(40vh)';
        isUnderFaceFrontOpen = true;

        faceOne.classList.remove('contentHolderVisible');
    }
})

const underFaceFront = document.querySelector('.under_face_front');
underFaceFront.addEventListener('click', () => {
    underFaceFront.style.transform = 'scaleX(0) rotateX( 0deg) translateZ(40vh)';
    isUnderFaceFrontOpen = false;

    setTimeout(() => {
        faceOne.classList.add('contentHolderVisible');
    }, 150)
})

// closing opened under faces
const closeOpenInfoBlock = () => {

    if (isUnderFaceTopOpen === true) {
        const underFaceTop = document.querySelector('.under_face_top');
        underFaceTop.style = 'transform: scaleX(0) rotateX( 90deg) translateZ(40vh)'      
        isUnderFaceTopOpen = false
    }

    if (isUnderFaceBottomOpen === true) {
        const underFaceBottom = document.querySelector('.under_face_bottom');
        underFaceBottom.style = 'transform: scaleX(0) rotateX(-90deg) translateZ(40vh)'
        isUnderFaceBottomOpen = false
    }

    if (isUnderFaceBackOpen === true) {
        const underFaceBack = document.querySelector('.under_face_back');
        underFaceBack.style.transform = 'scaleX(0) rotateY(180deg) rotate(180deg) translateZ(40vh)';
        isUnderFaceBackOpen = false
    }

    if (isUnderFaceFrontOpen === true) {
        const underFaceFront = document.querySelector('.under_face_front');
        underFaceFront.style.transform = 'scaleX(0) rotateX( 0deg) translateZ(40vh)';
        isUnderFaceFrontOpen = false
    }

    if (isUnderFaceRightOpen === true) {
        const underFaceRight = document.querySelector('.under_face_right');
        underFaceRight.style['width'] = '0vh'
        underFaceRight.style['overflow'] = 'hidden'
        isUnderFaceRightOpen = false
    }

    if (isUnderFaceLeftOpen === true) {
        const underFaceLeft = document.querySelector('.under_face_left');
        underFaceLeft.style['width'] = '0vh'
        underFaceLeft.style['overflow'] = 'hidden'
        isUnderFaceLeftOpen = false
    }
}

// rotate on scroll
let numberOfRotationDown = 0

function rotateCube(event) {
    event.preventDefault();

    const cube = document.querySelector('.cube');
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    closeOpenInfoBlock();

    if (this.oldScroll === undefined || this.oldScroll <= this.scrollY) {
        cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX - 90) + 'deg)';
        
        // Object.values(netNauts).map(e => e.style.transform = 'translateZ(0vh) rotateX(' + (rotateX - 90) + 'deg)')
        astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX - 90) + 'deg) rotateY(0deg)'
        astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX - 90) + 'deg) rotateY(0deg)'
        astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX - 90) + 'deg) rotateY(0deg)'
        astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX - 90) + 'deg) rotateY(0deg)'

        rotateX = rotateX - 90;
        numberOfRotationDown = numberOfRotationDown + 1        
    } else {
        cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX + 90) + 'deg)';

        astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX + 90) + 'deg) rotateY(0deg)'
        astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX + 90) + 'deg) rotateY(0deg)'
        astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX + 90) + 'deg) rotateY(0deg)'
        astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX + 90) + 'deg) rotateY(0deg)'

        rotateX = rotateX + 90;
        numberOfRotationDown = numberOfRotationDown - 1
    }
    this.oldScroll = this.scrollY;


    let roundGroup = Math.floor((Math.abs(numberOfRotationDown)-1)/4)*4
    if(numberOfRotationDown > 0) {
        if(Math.abs(rotateX)/90 === 1 + roundGroup){
            cubeFaceToUser = 'proces'
        }
        if(Math.abs(rotateX)/90 === 2 + roundGroup){
            cubeFaceToUser = 'portfolio'
        }
        if(Math.abs(rotateX)/90 === 3 + roundGroup){
            cubeFaceToUser = 'dlaczego my'
        }
        if(Math.abs(rotateX)/90 === 4 + roundGroup){
            cubeFaceToUser = 'home'
        }
    } else {
        if(Math.abs(rotateX)/90 === 1 + roundGroup){
            cubeFaceToUser = 'dlaczego my'
        }
        if(Math.abs(rotateX)/90 === 2 + roundGroup){
            cubeFaceToUser = 'portfolio'
        }
        if(Math.abs(rotateX)/90 === 3 + roundGroup){
            cubeFaceToUser = 'proces'
        }
        if(Math.abs(rotateX)/90 === 4 + roundGroup){
            cubeFaceToUser = 'home'
        }
    }
    makeCubeFaceToUserVisible(cubeFaceToUser)
}

window.addEventListener('scroll', debounce(rotateCube, 20));


// contactBtn

let contactLeftValue = "100%"
const contactNavBtn = document.querySelector('.contactNavBtn');
contactNavBtn.addEventListener('click', () => {

    const contactContainer = document.querySelector('.contactContainer');
    const body = document.querySelector('body');
    const allNavLinks = document.querySelectorAll('li');
    if(contactLeftValue === "20%"){
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";

        body.style['overflow-y'] = 'scroll';
    } else {
        contactContainer.style['left'] = "20%";
        contactLeftValue = "20%";

        body.style['overflow-y'] = 'hidden';
    }

    Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
    contactNavBtn.classList.add('chosen');
})

// resize contact
let resizeContactLeftValue = "100%"
const resizeContactNavBtn = document.querySelector('.resizeContactNavBtn');
resizeContactNavBtn.addEventListener('click', () => {

    const contactContainer = document.querySelector('.contactContainer');
    const body = document.querySelector('body');
    const allNavLinks = document.querySelectorAll('li');
    if(resizeContactLeftValue === "0%"){
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";

        body.style['overflow-y'] = 'scroll';
    } else {
        contactContainer.style['left'] = "0%";
        resizeContactLeftValue = "0%";

        body.style['overflow-y'] = 'hidden';
    }

    Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
    resizeContactNavBtn.classList.add('chosen');
})


// contactContainer change with document width resize
window.addEventListener('resize', () => {
    const contactContainer = document.querySelector('.contactContainer');
    if(document.body.clientWidth < 800){
        if(contactLeftValue === '20%'){
            contactContainer.style['left'] = '0%'
            resizeContactLeftValue = "0%";
            contactLeftValue = '100%'
        }
    }
    if(document.body.clientWidth > 800){
        if(resizeContactLeftValue === '0%'){
            contactContainer.style['left'] = '20%'
            contactLeftValue = "20%";
            resizeContactLeftValue = "100%";
        }
    }
})


// navbar section

const homeNavBtn = document.querySelector('.homeNavBtn');
homeNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
            rotateX = 0
        }, 400)

        numberOfRotationDown = 0
        cubeFaceToUser = 'home'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
        rotateX = 0

        numberOfRotationDown = 0
        cubeFaceToUser = 'home'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(0deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(0deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(0deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(0deg) rotateY(0deg)'
})

// processNavBtn
const processNavBtn = document.querySelector('.processNavBtn');
processNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-90deg)"
            rotateX = -90
        }, 400)

        numberOfRotationDown = 1
        cubeFaceToUser = 'proces'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-90deg)"
        rotateX = -90

        numberOfRotationDown = 1
        cubeFaceToUser = 'proces'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-90deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-90deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-90deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-90deg) rotateY(0deg)'
})

// portfolioNavBtn
const portfolioNavBtn = document.querySelector('.portfolioNavBtn');
portfolioNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-180deg)"
            rotateX = -180
        }, 400)

        numberOfRotationDown = 2
        cubeFaceToUser = 'portfolio'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-180deg)"
        rotateX = -180

        numberOfRotationDown = 2
        cubeFaceToUser = 'portfolio'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-180deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-180deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-180deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-180deg) rotateY(0deg)'
})

// whyWeNavBtn
const whyWeNavBtn = document.querySelector('.whyWeNavBtn');
whyWeNavBtn.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
            rotateX = -270
        }, 400)

        numberOfRotationDown = 3
        cubeFaceToUser = 'dlaczego my'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
        rotateX = -270

        numberOfRotationDown = 3
        cubeFaceToUser = 'dlaczego my'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-270deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-270deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-270deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-270deg) rotateY(0deg)'
})

// extraOne
const extraOne = document.querySelector('.extraOne');
extraOne.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
        }, 400)

        cubeFaceToUser = 'right'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"

        cubeFaceToUser = 'right'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX) + 'deg) rotateY(90deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
})

// extraTwo
const extraTwo = document.querySelector('.extraTwo');
extraTwo.addEventListener('click', () => {

    if(contactLeftValue === "20%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        contactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
        }, 400)

        cubeFaceToUser = 'left'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(90deg)"

        cubeFaceToUser = 'left'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX) + 'deg) rotateY(-90deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
})


// resizeMenuBtns

// resizeHomeNavBtn
const resizeHomeNavBtn = document.querySelector('.resizeHomeNavBtn');
resizeHomeNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
            rotateX = 0
        }, 400)

        numberOfRotationDown = 0
        cubeFaceToUser = 'home'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(0deg)"
        rotateX = 0

        numberOfRotationDown = 0
        cubeFaceToUser = 'home'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(0) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(0) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(0) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(0) rotateY(0deg)'
})

// resizeProcessNavBtn
const resizeProcessNavBtn = document.querySelector('.resizeProcessNavBtn');
resizeProcessNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-90deg)"
            rotateX = -90
        }, 400)

        numberOfRotationDown = 1
        cubeFaceToUser = 'proces'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-90deg)"
        rotateX = -90

        numberOfRotationDown = 1
        cubeFaceToUser = 'proces'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-90deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-90deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-90deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-90deg) rotateY(0deg)'
})

// resizePortfolioNavBtn
const resizePortfolioNavBtn = document.querySelector('.resizePortfolioNavBtn');
resizePortfolioNavBtn.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-180deg)"
            rotateX = -180
        }, 400)

        numberOfRotationDown = 2
        cubeFaceToUser = 'portfolio'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-180deg)"
        rotateX = -180

        numberOfRotationDown = 2
        cubeFaceToUser = 'portfolio'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-180deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-180deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-180deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-180deg) rotateY(0deg)'
})

// resizeExtraOne
const resizeExtraOne = document.querySelector('.resizeExtraOne');
resizeExtraOne.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"
        }, 400)

        cubeFaceToUser = 'right'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(-90deg)"

        cubeFaceToUser = 'right'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX) + 'deg) rotateY(90deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX) + 'deg)  rotateY(90deg)'
})


// resizeExtraTwo
const resizeExtraTwo = document.querySelector('.resizeExtraTwo');
resizeExtraTwo.addEventListener('click', () => {

    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-50vh) rotateY(90deg)"
        }, 400)

        cubeFaceToUser = 'left'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-50vh) rotateY(90deg)"

        cubeFaceToUser = 'left'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(' + (rotateX) + 'deg) rotateY(-90deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(' + (rotateX) + 'deg)  rotateY(-90deg)'
})

const resizeWhyWeNavBtn = document.querySelector('.resizeWhyWeNavBtn');
resizeWhyWeNavBtn.addEventListener('click', () => {
    
    if(resizeContactLeftValue === "0%"){
        const contactContainer = document.querySelector('.contactContainer');
        contactContainer.style['left'] = "100%";
        resizeContactLeftValue = "100%";
        body.style['overflow-y'] = 'scroll';

        setTimeout(()=>{
            const cube = document.querySelector('.cube');
            cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
            rotateX = -270
        }, 400)

        numberOfRotationDown = 3
        cubeFaceToUser = 'dlaczego my'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    } else {
        const cube = document.querySelector('.cube');
        cube.style.transform = "translateZ(-40vh) rotateX(-270deg)"
        rotateX = -270

        numberOfRotationDown = 3
        cubeFaceToUser = 'dlaczego my'
        makeCubeFaceToUserVisible(cubeFaceToUser)
    }
    closeOpenInfoBlock();

    // turn astronauts
    const astro1 = document.querySelector('.astro1');
    const astro2 = document.querySelector('.astro2');
    const astro3 = document.querySelector('.astro3');
    const astro4 = document.querySelector('.astro4');

    astro1.style.transform = 'translateZ(10vh) rotateX(-270deg) rotateY(0deg)'
    astro2.style.transform = 'translateZ(20vh) rotateX(-270deg) rotateY(0deg)'
    astro3.style.transform = 'translateZ(-20vh) rotateX(-270deg) rotateY(0deg)'
    astro4.style.transform = 'translateZ(-10vh) rotateX(-270deg) rotateY(0deg)'
})


// open projects in new bar

const project1 = document.querySelector('.project1');
project1.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://wkr92.github.io/Shouzen/#/', '_blank').focus();
})

const project2 = document.querySelector('.project2');
project2.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://wkr92.github.io/LookForAnImage/#/', '_blank').focus();
})

const project3 = document.querySelector('.project3');
project3.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://wkr92.github.io/article-page/', '_blank').focus();
})

const project4 = document.querySelector('.project4');
project4.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://wkr92.github.io/sorting-site/', '_blank').focus();
})

const project5 = document.querySelector('.project5');
project5.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://wkr92.github.io/StagePalls/', '_blank').focus();
})

const project6 = document.querySelector('.project6');
project6.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open('https://fastpdfreader.herokuapp.com', '_blank').focus();
})


// mouse icon little animation
const mouseIconHolder = document.querySelectorAll('.mouseIconHolder');
const clickHolder = document.querySelector('.clickHolder');
const clickHolder_icon = document.querySelector('.clickHolder_icon');
clickHolder.addEventListener('mouseenter', () => {

    const mouseAnim = gsap.timeline();
    mouseAnim
        .to(clickHolder_icon, {height: "1.5rem", width: '1.5rem', margin: '0.25rem', duration: 0.10})
        .to(clickHolder_icon, {height: "2rem", width: '2rem', margin: '0rem', duration: 0.10, delay: 0.10})

})

// scroll icon little animation
const scrollHolder = document.querySelector('.scrollHolder');
const scrollHolder_icon = document.querySelector('.scrollHolder_icon');
scrollHolder.addEventListener('mouseenter', () => {
    const mouseAnim = gsap.timeline();
    mouseAnim
        .to(scrollHolder_icon, {height: "1.25rem", width: '1.25rem', margin: '0.125rem', duration: 0.10})
        .to(scrollHolder_icon, {height: "1.5rem", width: '1.5rem', margin: '0rem', duration: 0.10, delay: 0.10})
})

// surprise section
const frontFaceAfterRule = CSSRulePlugin.getRule(".cube__face--front::after");
const topFaceAfterRule = CSSRulePlugin.getRule(".cube__face--top::after");
const backFaceAfterRule = CSSRulePlugin.getRule(".cube__face--back::after");
const bottomFaceAfterRule = CSSRulePlugin.getRule(".cube__face--bottom::after");
const rightFaceAfterRule = CSSRulePlugin.getRule(".cube__face--right::after");
const leftFaceAfterRule = CSSRulePlugin.getRule(".cube__face--left::after");

const frontFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--front::before");
const topFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--top::before");
const backFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--back::before");
const bottomFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--bottom::before");
const rightFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--right::before");
const leftFaceBeforeRule = CSSRulePlugin.getRule(".cube__face--left::before");

const changeBtn = document.querySelector('.changeBtn');
const initialBtn = document.querySelector('.initialBtn');

changeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const changeFacesBgs = gsap.timeline();
    changeFacesBgs
        
        .to([frontFaceBeforeRule,
            topFaceBeforeRule,
            backFaceBeforeRule,
            bottomFaceBeforeRule,
            rightFaceBeforeRule,
            leftFaceBeforeRule
        ], {cssRule: {opacity: 0.6}, duration: 1})
        .to([frontFaceAfterRule, 
            topFaceAfterRule, 
            backFaceAfterRule, 
            bottomFaceAfterRule,
            rightFaceAfterRule,
            leftFaceAfterRule
        ], {cssRule: {opacity: 0}, duration: 1}, "-=1")
        .to('.main', 
            {background: '#1d4350;',
            background: '-webkit-linear-gradient(to right, #1d4350, #a43931)', 
            background: 'linear-gradient(to right, #1d4350, #a43931)', duration: 2}, "-=1.5")
})

initialBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const changeFacesBgs = gsap.timeline();
    changeFacesBgs
        .to([frontFaceAfterRule, 
            topFaceAfterRule, 
            backFaceAfterRule, 
            bottomFaceAfterRule,
            rightFaceAfterRule,
            leftFaceAfterRule
        ], {cssRule: {opacity: 0.6}, duration: 1}, "-=1")
        .to([frontFaceBeforeRule,
            topFaceBeforeRule,
            backFaceBeforeRule,
            bottomFaceBeforeRule,
            rightFaceBeforeRule,
            leftFaceBeforeRule
        ], {cssRule: {opacity: 0}, duration: 1})
        .to('.main', 
            {background: '#F0F2F0;',
            background: '-webkit-linear-gradient(to right, #000C40, #F0F2F0)', 
            background: 'linear-gradient(to right, #000C40, #F0F2F0)', duration: 2}, "-=1.5")
})

