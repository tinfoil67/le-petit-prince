import Shape from './shape'

const STARS = getStars()

class Planets extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)

        STARS.forEach(n => {
            let d = n.d
            let x = this.animatePoint(t, n.x1, n.x2, d)
            let y = this.animatePoint(t, n.y1, n.y2, d)
            let r1 = n.r1
            let r2 = n.r2
            let o1 = n.o1
            let o2 = n.o2

            let radgrad = this._ctx.createRadialGradient(x, y, this.animatePoint(t, r2 * 0.8, r2, d), x, y, this.animatePoint(t, r1 * 0.8, r1, d))
            radgrad.addColorStop(0, 'rgba(255, 255, 255, ' + this.animatePoint(t, o1, o2, 4000) + ')')
            radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
            this._ctx.fillStyle = radgrad
            this._ctx.beginPath()
            this._ctx.arc(x, y, r1, Math.PI * 2, 0)
            this._ctx.fill()
        })
    }
}

export default Planets

function getStars() {
    // [x1, y1, r]
    let stars = [
        [102, 66, 3],
        [119, 112, 2],
        [175, 138, 5],
        [206, 145, 2.5],
        [290, 173, 2.5],
        [303, 92, 2],
        [330, 62, 5],
        [331, 82, 2],
        [365, 69, 3],
        [408, 140, 3],
        [384, 34, 1],
        [421, 23, 1],
        [600, 137, 2],
        [619, 79, 1],
        [634, 80, 3],
        [643, 62, 1],
        [672, 41, 3],
        [704, 75, 1],
        [732, 209, 3],
        [109, 325, 4],
        [135, 294, 2],
        [118, 218, 1],
        [143, 342, 1],
        [188, 353, 2],
        [432, 334, 5],
        [468, 351, 1],
        [607, 371, 3],
        [633, 323, 1],
        [661, 358, 1],
        [665, 349, 1],
        [692, 343, 2],
        [748, 325, 2],
        [59, 424, 2],
        [267, 643, 3],
        [262, 653, 1],
        [270, 675, 1],
        [310, 661, 1],
        [602, 559, 1],
        [59, 893, 3],
        [312, 940, 2],
        [329, 916, 2],
        [388, 885, 4],
        [393, 881, 1],
        [420, 918, 2],
        [413, 943, 2],
        [405, 956, 4],
        [544, 931, 1],
        [644, 930, 5]
    ]

    let result = stars.map(function(n) {
        let x1 = n[0]
        let y1 = n[1]
        let x2 = x1 + parseInt(Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1)
        let y2 = y1 + parseInt(Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1)
        let r1 = n[2]
        let o1 = +Math.random().toFixed(1)
        let o2 = (o1 + 0.6) % 1
        let d = parseInt(Math.random() * 3000 + 3000)

        let r2 = Math.max(r1 / 2, r1 - 2)

        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            r1: r1,
            r2: r2,
            o1: o1,
            o2: o2,
            d: d
        }
    })

    result.push({
        x1: 625,
        y1: 603,
        x2: 626,
        y2: 593,
        r1: 12,
        r2: 3,
        o1: 0.6,
        o2: 0.4,
        d: 8000
    }, {
        x1: 74,
        y1: 883,
        x2: 70,
        y2: 877,
        r1: 7,
        r2: 2,
        o1: 0.6,
        o2: 0.4,
        d: 8000
    }, {
        x1: 534,
        y1: 935,
        x2: 527,
        y2: 927,
        r1: 12,
        r2: 3,
        o1: 0.6,
        o2: 0.4,
        d: 8000
    })

    return result
}
