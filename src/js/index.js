import Bg from './bg'
import Rose from './rose'
import Prince from './prince'
import PrinceAnim from './prince-anim'
import Clouds from './clouds'
import Planet1 from './planet1-anim'
import Planet2 from './planet2-anim'
import Planets from './planets'

let beginingTs = new Date().getTime()

window.onload = function() {
    document.querySelector('.container').style.height = window.innerWidth * 1.778 + 'px'

    if (document.querySelector('#bg').getContext) {
        drawBg()
        drawAnimateRose()
        drawPrince()
        drawAnimatePrince()
        drawAnimateClouds()
        drawAnimatePlanet1()
        drawAnimatePlanet2()
        drawAnimatePlanets()
    } else {
        alert('不支持canvas')
    }
}

function drawAnimatePlanets() {
    new Planets({
        width: 750,
        height: 1334,
        container: 'planets',
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimatePlanets)
}

function drawAnimatePlanet2() {
    new Planet2({
        width: 165,
        height: 100,
        container: 'planet2',
        top: 785,
        left: 15,
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimatePlanet2)
}

function drawAnimatePlanet1() {
    new Planet1({
        width: 240,
        height: 240,
        container: 'planet1',
        top: 600,
        left: 445,
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimatePlanet1)
}

function drawAnimateClouds() {
    new Clouds({
        width: 750,
        height: 350,
        container: 'clouds',
        top: 140,
        left: 0,
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimateClouds)
}

function drawAnimatePrince() {
    new PrinceAnim({
        width: 130,
        height: 80,
        container: 'animate-prince',
        top: 845,
        left: 130,
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimatePrince)
}

function drawPrince() {
    new Prince({
        width: 200,
        height: 270,
        container: 'prince',
        top: 780,
        left: 135,
    }).draw()
}

function drawAnimateRose() {
    new Rose({
        width: 160,
        height: 190,
        container: 'rose',
        top: 855,
        left: 300,
        beginingTs,
    }).draw()
    window.requestAnimationFrame(drawAnimateRose)
}

function drawBg() {
    new Bg({
        width: 750,
        height: 1334,
        container: 'bg',
    }).draw()
}
