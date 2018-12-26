import Shape from './shape'

class Planet2 extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)
        this._ctx.translate(this.animatePoint(t, -2, 2, 4000), this.animatePoint(t, -2, 2, 8000))

        let lingrad = this.createLinearGradient_s(0, 17, 0, 88)
        lingrad.addColorStop(0, 'rgba(137, 137, 180, 0.6)')
        lingrad.addColorStop(1, 'rgba(209, 205, 255, 0.6)')
        this._ctx.fillStyle = lingrad
        this._ctx.beginPath()
        this.arc_s(77, 50, 33, Math.PI * 2, 0)
            ._ctx.fill()

        let lingrad2 = this.createLinearGradient_s(71, 43, 74, 67)
        lingrad2.addColorStop(0.2, 'rgba(255, 255, 255, 0)')
        lingrad2.addColorStop(1, 'rgba(255, 255, 255, 0.8)')
        this._ctx.lineWidth = 5
        this._ctx.strokeStyle = lingrad2

        this._ctx.beginPath()
        this.moveTo_s(29, 53)
            .bezierCurveTo_s(-8, 74, 183, 52, 121, 41)
            ._ctx.stroke()

    }
}

export default Planet2
