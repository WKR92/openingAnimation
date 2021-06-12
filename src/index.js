import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import debounce from 'lodash.debounce';
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");
const underTopFaceRule = CSSRulePlugin.getRule(".under_face_top::after");
const choseAfterRule = CSSRulePlugin.getRule(".chosen::after");

const homeLi = CSSRulePlugin.getRule(".under_face_top::after");


// push scroll top on resize
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// unable scoll until end of etrance animations
const body = document.querySelector('body');
setTimeout(() => {
    body.style['overflow-y'] = 'scroll';
}, 4250)


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
    .to('.box1', {clearProps: "transform"}, 4)
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
    .to('.box1', {clearProps: "transform"}, 4)
    .fromTo('.topBox', {zIndex: -1}, {zIndex: 1}, 4)
    .to(choseAfterRule, {cssRule: {opacity: 1}, duration: .5}, 4)
}
   
// general values
let rotateX = 0
let cubeFaceToUser = 'home';

// select front face of cube
const makeCubeFaceToUserVisible = (face) => {
    const faceOne = document.getElementById('front_inside');
    const faceTwo = document.getElementById('top_inside');
    const faceThree = document.getElementById('back_inside');
    const faceFour = document.getElementById('bottom_inside');
    const faceFive = document.getElementById('right_inside');
    const faceSix = document.getElementById('left_inside');

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

    const allFaces = document.querySelectorAll('.cube_p')
    const allNavLinks = document.querySelectorAll('li');

    if(cubeFaceToUser === 'home') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceOne.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            homeNavBtn.classList.add('chosen');
            resizeHomeNavBtn.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'proces') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceTwo.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            processNavBtn.classList.add('chosen');
            resizeProcessNavBtn.classList.add('chosen');
        }, 200) 
    }

    if(cubeFaceToUser === 'portfolio') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceThree.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            portfolioNavBtn.classList.add('chosen');
            resizePortfolioNavBtn.classList.add('chosen');
        }, 200)   
    }

    if(cubeFaceToUser === 'dlaczego my') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceFour.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            whyWeNavBtn.classList.add('chosen');
            resizeWhyWeNavBtn.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'right') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceFive.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            extraOne.classList.add('chosen');
            resizeExtraOne.classList.add('chosen');
        }, 200)
    }

    if(cubeFaceToUser === 'left') {
        setTimeout(()=>{
            Object.values(allFaces).map(e => e.classList.remove('cube_p_visible'))
            faceSix.classList.add('cube_p_visible');

            Object.values(allNavLinks).map(e => e.classList.remove('chosen'))
            extraTwo.classList.add('chosen');
            resizeExtraTwo.classList.add('chosen');
        }, 200)
    }
}
makeCubeFaceToUserVisible(cubeFaceToUser)


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

// rotate on scroll

let numberOfRotationDown = 0

function rotateCube(event) {
    event.preventDefault();
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


    if (this.oldScroll === undefined || this.oldScroll <= this.scrollY) {
        cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX - 90) + 'deg)';
        rotateX = rotateX - 90;
        numberOfRotationDown = numberOfRotationDown + 1        
    } else {
        cube.style.transform = 'translateZ(-40vh) rotateX(' + (rotateX + 90) + 'deg)';
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
    console.log(cubeFaceToUser)
    makeCubeFaceToUserVisible(cubeFaceToUser)
}

window.addEventListener('scroll', debounce(rotateCube, 50));


// contactBtn

let contactLeftValue = "100%"
const contactNavBtn = document.querySelector('.contactNavBtn');
contactNavBtn.addEventListener('click', () => {
    console.log(contactLeftValue)

    const contactContainer = document.querySelector('.contactContainer');
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

let resizeContactLeftValue = "100%"
const resizeContactNavBtn = document.querySelector('.resizeContactNavBtn');
resizeContactNavBtn.addEventListener('click', () => {

    const contactContainer = document.querySelector('.contactContainer');
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
})

