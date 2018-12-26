class Shape {
    // 其中 container 必传
    constructor(opt) {
        this.WIDTH = opt.WIDTH || window.innerWidth
        this.width = opt.width || window.innerWidth
        this.height = opt.height || window.innerWidth * 1.778
        this.SCALE = opt.SCALE || this.WIDTH / 750
        this.container = opt.container
        this.top = opt.top || 0
        this.left = opt.left || 0
        this.beginingTs = opt.beginingTs || new Date().getTime()
        this._ctx = ''

        this._init()
    }
    _init() {
        if (!this.container) throw new Error('invalid container')

        let dom = document.querySelector('#' + this.container)
        dom.width = this.width * this.SCALE
        dom.height = this.height * this.SCALE
        dom.style.top = this.top * this.SCALE + 'px'
        dom.style.left = this.left * this.SCALE + 'px'
        this._dom = dom

        let ctx = dom.getContext('2d')
        ctx.lineJoin = 'round'
        this._ctx = ctx
    }
    moveTo_s(x, y) {
        this._ctx.moveTo(x * this.SCALE, y * this.SCALE)
        return this
    }
    lineTo_s(x, y) {
        this._ctx.lineTo(x * this.SCALE, y * this.SCALE)
        return this
    }
    arc_s(x, y, r, sAngle, eAngle, counterclockwise) {
        this._ctx.arc(x * this.SCALE, y * this.SCALE, r * this.SCALE, sAngle, eAngle, counterclockwise)
        return this
    }
    createLinearGradient_s(x0, y0, x1, y1) {
        return this._ctx.createLinearGradient(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE)
    }
    createRadialGradient_s(x0, y0, r0, x1, y1, r1) {
        return this._ctx.createRadialGradient(x0 * this.SCALE, y0 * this.SCALE, r0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE, r1 * this.SCALE)
    }
    quadraticCurveTo_s(cpx, cpy, x, y) {
        this._ctx.quadraticCurveTo(cpx * this.SCALE, cpy * this.SCALE, x * this.SCALE, y * this.SCALE)
        return this
    }
    bezierCurveTo_s(cp1x, cp1y, cp2x, cp2y, x, y) {
        this._ctx.bezierCurveTo(cp1x * this.SCALE, cp1y * this.SCALE, cp2x * this.SCALE, cp2y * this.SCALE, x * this.SCALE, y * this.SCALE)
        return this
    }
    translate_s(x, y) {
        this._ctx.translate(x * this.SCALE, y * this.SCALE)
        return this
    }
    clearRect_s(x0, y0, x1, y1) {
        this._ctx.clearRect(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE)
        return this
    }
    fillRect_s(x0, y0, x1, y1){
        this._ctx.fillRect(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE)
        return this
    }
    animatePoint(mSec, from, to, duration, noScale) {
        mSec = mSec % duration
        let k = 2 * (to - from) / duration
        let result = 0
        if (mSec < duration * 0.5) {
            result = k * mSec + from
        } else {
            result = -k * mSec - from + 2 * to
        }
        return noScale ? result : result * this.SCALE
    }
}

export default Shape
