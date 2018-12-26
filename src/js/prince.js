import Shape from './shape'

class Prince extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        // 小王子
        this._ctx.beginPath()
        this.moveTo_s(166, 245)
            .bezierCurveTo_s(162, 246, 157, 238, 151, 237)
            .lineTo_s(152, 234)
            .lineTo_s(148, 232)
            .lineTo_s(148, 227)
            .quadraticCurveTo_s(154, 226, 163, 208)
            .lineTo_s(163, 173)
            .bezierCurveTo_s(164, 171, 165, 176, 168, 172)
            .quadraticCurveTo_s(173, 163, 167, 155)
            .quadraticCurveTo_s(176, 154, 183, 148)
            .bezierCurveTo_s(178, 146, 163, 104, 161, 87)
            .lineTo_s(153, 81)
            .bezierCurveTo_s(151, 76, 156, 72, 153, 68)
            .lineTo_s(146, 66)
            .lineTo_s(146, 64)
            .bezierCurveTo_s(151, 62, 154, 58, 154, 53)
            .bezierCurveTo_s(162, 51, 162, 47, 156, 42)
            .quadraticCurveTo_s(158, 37, 157, 33)
            .quadraticCurveTo_s(163, 28, 164, 22)
            .lineTo_s(161, 23)
            .quadraticCurveTo_s(163, 19, 160, 15)
            .bezierCurveTo_s(160, 20, 155, 21, 152, 19)
            .quadraticCurveTo_s(152, 17, 155, 14)
            .quadraticCurveTo_s(151, 15, 149, 17)
            .quadraticCurveTo_s(148, 14, 151, 11)
            .bezierCurveTo_s(143, 14, 132, 12, 125, 16)
            .lineTo_s(126, 11)
            .bezierCurveTo_s(124, 16, 120, 15, 119, 20)
            .lineTo_s(114, 16)
            .lineTo_s(116, 20)
            .bezierCurveTo_s(110, 23, 112, 26, 109, 28)
            .quadraticCurveTo_s(108, 26, 106, 26)
            .bezierCurveTo_s(108, 29, 107, 30, 107, 34)
            .quadraticCurveTo_s(105, 32, 103, 34)
            .bezierCurveTo_s(106, 34, 107, 36, 108, 39)
            .quadraticCurveTo_s(103, 39, 102, 43)
            .bezierCurveTo_s(104, 41, 107, 42, 108, 45)
            .bezierCurveTo_s(109, 48, 109, 51, 106, 53)
            .bezierCurveTo_s(109, 52, 114, 59, 120, 64)
            .bezierCurveTo_s(124, 64, 125, 65, 125, 67)
            .bezierCurveTo_s(113, 71, 120, 79, 117, 79)
            .lineTo_s(100, 141)
            .quadraticCurveTo_s(95, 141, 96, 146)
            .lineTo_s(98, 146)
            .lineTo_s(95, 155)
            .quadraticCurveTo_s(100, 154, 109, 158)
            .quadraticCurveTo_s(106, 164, 113, 176)
            .lineTo_s(109, 214)
            .lineTo_s(116, 220)
            .lineTo_s(117, 227)
            .quadraticCurveTo_s(123, 226, 123, 230)
            .lineTo_s(121, 238)
            .quadraticCurveTo_s(118, 238, 116, 243)
            .quadraticCurveTo_s(114, 247, 121, 249)
            .lineTo_s(130, 249)
            .bezierCurveTo_s(126, 245, 130, 240, 126, 237)
            .lineTo_s(127, 230)
            .quadraticCurveTo_s(127, 226, 139, 220)
            .lineTo_s(144, 228)
            .lineTo_s(144, 233)
            .quadraticCurveTo_s(140, 233, 139, 242)
            .lineTo_s(157, 245)
            ._ctx.fill()

        // 小水壶
        this._ctx.beginPath()
        this.moveTo_s(87, 259)
            .bezierCurveTo_s(88, 250, 84, 240, 81, 234)
            .bezierCurveTo_s(76, 234, 67, 236, 65, 237)
            .quadraticCurveTo_s(64, 245, 65, 252)
            .lineTo_s(54, 246)
            .lineTo_s(53, 240)
            .quadraticCurveTo_s(50, 246, 49, 253)
            .lineTo_s(52, 249)
            .lineTo_s(65, 258)
            .lineTo_s(66, 260)
            .bezierCurveTo_s(72, 263, 84, 260, 86, 258)
            ._ctx.fill()
        this._ctx.beginPath()
        this.moveTo_s(86, 252)
            .bezierCurveTo_s(95, 238, 89, 235, 81, 238)
            ._ctx.lineWidth = 2
        this._ctx.stroke()
    }
}

export default Prince
