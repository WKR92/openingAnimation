import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule(".box3:before");
let bgColor = gsap.getProperty('.box1', "backgroundImage");

const tl = gsap.timeline()

    tl
    .from(['.box3', '.box2', '.box1'], {scaleY: 0, transformOrigin: 'top', duration: .75})
    .to(rule, {cssRule: {left: '100%'}, duration: .5}, .75)
    .to(['.box3'], {scaleX: 0, transformOrigin: 'left', duration: .5}, 2.25)
    .to(['.box2'], {scaleX: 0, transformOrigin: 'right', duration: .5}, 4)
    .fromTo('.leftBox', {x: '-100%', duration: .5}, {x: 0}, 5.15)
    .fromTo('.bgDiv', {opacity: 0}, {opacity: 1, duration: 3}, 5.5)
    .to('.box1Text', {color: '#fff', scale: 1.2, duration: 3}, 5.5)
