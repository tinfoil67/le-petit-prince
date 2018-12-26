import Shape from './shape'

class PrinceAnim extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)

        // 小王子围巾
        let d = 3000
        this.translate_s(127, 4)
            ._ctx.rotate(Math.PI * 2 / this.animatePoint(t, 180, 60, d, true))
        this.translate_s(-127, -4)

        this._ctx.beginPath()
        this.moveTo_s(130, 3)
            .bezierCurveTo_s(122, 4, 120, 10, 117, 11)
            .bezierCurveTo_s(94, this.animatePoint(t, 35, 32, d, true), 81, this.animatePoint(t, 45, 42, d, true), 71, this.animatePoint(t, 45, 42, d, true))
            .quadraticCurveTo_s(68, this.animatePoint(t, 40, 43, d, true), 64, this.animatePoint(t, 39, 42, d, true))
            .bezierCurveTo_s(59, this.animatePoint(t, 38, 42, d, true), 47, this.animatePoint(t, 29, 38, d, true), 41, this.animatePoint(t, 36, 41, d, true))
            .bezierCurveTo_s(36, this.animatePoint(t, 40, 41, d, true), 34, this.animatePoint(t, 49, 50, d, true), this.animatePoint(t, 25, 22, d, true), this.animatePoint(t, 52, 46, d, true))
            .bezierCurveTo_s(38, 57, 47, this.animatePoint(t, 39, 43, d, true), this.animatePoint(t, 52, 55, d, true), this.animatePoint(t, 40, 48, d, true))
            .lineTo_s(this.animatePoint(t, 51, 52, d, true), 46)
            .bezierCurveTo_s(38, this.animatePoint(t, 65, 56, d, true), 43, this.animatePoint(t, 59, 54, d, true), this.animatePoint(t, 31, 28, d, true), this.animatePoint(t, 65, 60, d, true))
            .bezierCurveTo_s(48, this.animatePoint(t, 69, 62, d, true), 57, this.animatePoint(t, 54, 51, d, true), this.animatePoint(t, 70, 73, d, true), this.animatePoint(t, 47, 49, d, true))
            .quadraticCurveTo_s(76, this.animatePoint(t, 56, 53, d, true), this.animatePoint(t, 88, 92, d, true), this.animatePoint(t, 60, 56, d, true))
            .quadraticCurveTo_s(100, 55, this.animatePoint(t, 130, 127, d, true), 33)
            ._ctx.fill()
    }
}

export default PrinceAnim
