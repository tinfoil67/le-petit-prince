import Shape from './shape'

class Planet1 extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        let t = new Date().getTime() - this.beginingTs

        this.clearRect_s(0, 0, this.width, this.height)
        this._ctx.translate(this.animatePoint(t, -2, 2, 8000), this.animatePoint(t, -2, 2, 4000))

        let radgrad = this.createRadialGradient_s(120, 116, 25, 121, 121, 54)
        radgrad.addColorStop(0, '#6f6fa6')
        radgrad.addColorStop(0.9, '#8889b6')
        radgrad.addColorStop(1, 'rgba(190, 190, 213, 0.9)')
        radgrad.addColorStop(1, '#7c75aa')
        this._ctx.fillStyle = radgrad
        this.arc_s(121, 121, 54, Math.PI * 2, 0)
            ._ctx.fill()
        this._ctx.save()

        let radgrad2 = this.createRadialGradient_s(122, 80, 15, 121, 110, 50)
        radgrad2.addColorStop(0, '#a2a2c6')
        radgrad2.addColorStop(0, '#9394bd')
        radgrad2.addColorStop(0.45, '#9394bd')
        radgrad2.addColorStop(0.45, '#7678ac')
        radgrad2.addColorStop(1, '#797aac')
        radgrad2.addColorStop(1, '#6f6fa6')
        this._ctx.fillStyle = radgrad2

        this._ctx.globalCompositeOperation = 'source-atop'
        this.translate_s(121, 110)
            ._ctx.rotate(-Math.PI * 2 / 12)
        this._ctx.scale(1, 0.8)
        this.translate_s(-126, -115)
            .arc_s(121, 110, 50, Math.PI * 2, 0)
            ._ctx.fill()
        this._ctx.restore()

        let radgrad3 = this.createRadialGradient_s(185, 167, 5, 191, 183, 30)
        radgrad3.addColorStop(0, 'rgba(145, 134, 196, 0.9)')
        radgrad3.addColorStop(0.6, 'rgba(170, 157, 214, 0.9)')
        radgrad3.addColorStop(1, 'rgba(189, 175, 226, 0.2)')
        this._ctx.fillStyle = radgrad3
        this._ctx.beginPath()
        this.arc_s(191, 183, 18, Math.PI * 2, 0)
            ._ctx.fill()
    }
}

export default Planet1
