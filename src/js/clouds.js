import Shape from './shape'

class Clouds extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)

        let lingrad = this.createLinearGradient_s(0, 0, 0, this.height)
        lingrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
        lingrad.addColorStop(0.24, 'rgba(255, 255, 255, 0.4)')
        lingrad.addColorStop(0.33, 'rgba(255, 255, 255, 0)')
        lingrad.addColorStop(0.47, 'rgba(255, 255, 255, 0.4)')
        lingrad.addColorStop(0.73, 'rgba(255, 255, 255, 0.4)')
        lingrad.addColorStop(0.84, 'rgba(255, 255, 255, 0)')
        this._ctx.lineWidth = 2
        this._ctx.strokeStyle = lingrad

        let lingrad2 = this.createLinearGradient_s(0, 0, 0, this.height)
        lingrad2.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
        lingrad2.addColorStop(0.24, 'rgba(255, 255, 255, 0.1)')
        lingrad2.addColorStop(0.32, 'rgba(255, 255, 255, 0)')
        lingrad2.addColorStop(0.47, 'rgba(255, 255, 255, 0.1)')
        lingrad2.addColorStop(0.74, 'rgba(255, 255, 255, 0.1)')
        lingrad2.addColorStop(0.83, 'rgba(255, 255, 255, 0)')
        this._ctx.fillStyle = lingrad2

        // 云朵1
        this.translate_s(this.animatePoint(t, -30, 0, 16000, true), 0)
            ._ctx.beginPath()
        this.moveTo_s(551, 114)
            .bezierCurveTo_s(549, 64, 593, 52, 617, 73)
            .bezierCurveTo_s(664, -3, 800, -3, 847, 73)
            .lineTo_s(847, 114)
            ._ctx.stroke()
        this._ctx.fill()
        this.translate_s(this.animatePoint(t, 30, 0, 16000, true), 0)

        // 云朵2
        this.translate_s(this.animatePoint(t, 20, 0, 13000, true), 0)
            ._ctx.beginPath()
        this.moveTo_s(422, 289)
            .bezierCurveTo_s(410, 238, 344, 214, 301, 253)
            .bezierCurveTo_s(256, 162, 118, 147, 77, 272)
            .bezierCurveTo_s(40, 244, 0, 253, -20, 287)
            ._ctx.stroke()
        this._ctx.fill()
    }
}

export default Clouds
