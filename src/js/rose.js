import Shape from './shape'

class Rose extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)
            .translate_s(76, 164)
            ._ctx.rotate(Math.PI * 2 / this.animatePoint(t, 60, 120, 3000, true))
        this.translate_s(-76, -164)

        // 花影
        this._ctx.beginPath()
        this.moveTo_s(75, 161)
            .lineTo_s(74, 160)
            .lineTo_s(64, 167)
            ._ctx.stroke()

        // 花枝
        this._ctx.lineWidth = 2
        this._ctx.beginPath()
        this.moveTo_s(76, 161)
            .quadraticCurveTo_s(62, 114, 75, 83)
            ._ctx.stroke()
        this._ctx.lineWidth = 1

        // 叶子1
        this._ctx.beginPath()
        this.moveTo_s(68, 116)
            .bezierCurveTo_s(62, 112, 52, 110, 50, 108)
            .bezierCurveTo_s(45, 106, 46, 103, 53, 102)
            .bezierCurveTo_s(60, 102, 64, 100, 66, 115)
            ._ctx.fill()

        // 叶子2
        this._ctx.beginPath()
        this.moveTo_s(66, 117)
            .bezierCurveTo_s(61, 118, 60, 120, 57, 121)
            .bezierCurveTo_s(54, 122, 54, 120, 54, 118)
            .bezierCurveTo_s(56, 116, 62, 115, 66, 117)
            ._ctx.fill()

        // 叶子3
        this._ctx.beginPath()
        this.moveTo_s(78, 84)
            .bezierCurveTo_s(78, 81, 80, 80, 80, 78)
            ._ctx.stroke()
        this._ctx.beginPath()
        this.lineTo_s(65, 74)
            .quadraticCurveTo_s(70, 76, 76, 75)
            .bezierCurveTo_s(76, 74, 80, 76, 80, 78)
            .bezierCurveTo_s(78, 81, 76, 80, 75, 82)
            .quadraticCurveTo_s(73, 80, 74, 76)
            ._ctx.fill()

        // 花瓣1
        this._ctx.beginPath()
        this.moveTo_s(79, 75)
            .bezierCurveTo_s(72, 71, 65, 73, 61, 65)
            .bezierCurveTo_s(62, 62, 70, 57, 72, 57)
            .bezierCurveTo_s(73, 66, 75, 70, 76, 74)
            ._ctx.fill()

        // 花瓣2
        this._ctx.beginPath()
        this.moveTo_s(75, 66)
            .bezierCurveTo_s(76, 61, 73, 55, 81, 50)
            .bezierCurveTo_s(84, 49, 85, 50, 85, 54)
            .bezierCurveTo_s(83, 54, 77, 59, 75, 64)
            ._ctx.fill()

        // 花瓣3
        this._ctx.beginPath()
        this.moveTo_s(82, 59)
            .quadraticCurveTo_s(88, 49, 97, 56)
            .bezierCurveTo_s(99, 59, 95, 62, 88, 62)
            .lineTo_s(93, 60)
            .lineTo_s(90, 57)
            .lineTo_s(85, 57)
            ._ctx.fill()
        this._ctx.beginPath()
        this.moveTo_s(85, 59)
            .lineTo_s(89, 59)
            .lineTo_s(91, 60)
            .lineTo_s(89, 61)
            .lineTo_s(86, 61)
            ._ctx.stroke()

        // 花瓣4
        this._ctx.beginPath()
        this.moveTo_s(88, 65)
            .quadraticCurveTo_s(96, 66, 100, 59)
            .bezierCurveTo_s(100, 63, 102, 64, 101, 70)
            .quadraticCurveTo_s(98, 74, 93, 74)
            .bezierCurveTo_s(90, 73, 90, 68, 89, 67)
            ._ctx.fill()

        // 花瓣5
        this._ctx.beginPath()
        this.moveTo_s(91, 74)
            .bezierCurveTo_s(99, 77, 100, 70, 104, 76)
            .quadraticCurveTo_s(100, 81, 93, 75)
            ._ctx.fill()

        // 花瓣6
        this._ctx.beginPath()
        this.moveTo_s(81, 76)
            .quadraticCurveTo_s(94, 74, 96, 83)
            .bezierCurveTo_s(89, 87, 81, 81, 81, 76)
            ._ctx.fill()

        // 花瓣7
        this._ctx.beginPath()
        this.moveTo_s(90, 75)
            .bezierCurveTo_s(76, 73, 75, 67, 79, 61)
            .bezierCurveTo_s(79, 60, 85, 60, 87, 63)
            .quadraticCurveTo_s(85, 71, 89, 74)
            ._ctx.fill()

        // 光圈
        this._ctx.globalCompositeOperation = "destination-over"
        this._ctx.strokeStyle = 'rgba(255,255,255,0.3)'
        this._ctx.beginPath()
        this.arc_s(83, 67, 30, Math.PI * 2, 0)
            ._ctx.stroke()
        let radgrad = this.createRadialGradient_s(83, 67, 1, 83, 67, 60)
        radgrad.addColorStop(0, 'rgba(255,255,255,0.3)')
        radgrad.addColorStop(0.5, 'rgba(255,255,255,0.1)')
        radgrad.addColorStop(0.5, 'transparent')
        this._ctx.fillStyle = radgrad
        this.arc_s(83, 67, 80, Math.PI * 2, 0)
            ._ctx.fill()
    }
}

export default Rose
