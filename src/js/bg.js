import Shape from './shape'

class Bg extends Shape {
    constructor(opt) {
        super(opt)
    }
    draw() {
        // 地面
        this._ctx.fillStyle = "#000"
        this._ctx.beginPath()
        this.arc_s(375, 1620, 600, Math.PI, Math.PI * 1.39)
            .lineTo_s(177, 1050)
            .arc_s(375, 1620, 604, Math.PI * 1.4, Math.PI * 1.63)
            .quadraticCurveTo_s(636, 1075, 713, 1125)
            .quadraticCurveTo_s(722, 1125, 730, 1134)
            .arc_s(375, 1620, 604, Math.PI * 1.71, 0)
            ._ctx.fill()

        // 石头1
        this._ctx.beginPath()
        this.moveTo_s(34, 1132)
            .quadraticCurveTo_s(26, 1123, 26, 1104)
            .bezierCurveTo_s(26, 1076, 36, 1087, 48, 1068)
            .bezierCurveTo_s(45, 1059, 48, 1045, 58, 1034)
            .bezierCurveTo_s(54, 1019, 55, 1005, 65, 1000)
            .lineTo_s(74, 1013)
            .lineTo_s(119, 1051)
            .quadraticCurveTo_s(128, 1045, 178, 1059)
            ._ctx.fill()

        // 石头2
        this._ctx.beginPath()
        this.moveTo_s(433, 1021)
            .quadraticCurveTo_s(444, 996, 448, 991)
            .bezierCurveTo_s(453, 984, 456, 989, 464, 983)
            .lineTo_s(481, 971)
            .lineTo_s(484, 988)
            .lineTo_s(489, 999)
            .lineTo_s(502, 1004)
            .lineTo_s(513, 1017)
            .lineTo_s(494, 1029)
            ._ctx.fill()

        // 石头3
        this._ctx.beginPath()
        this.moveTo_s(597, 1064)
            .bezierCurveTo_s(607, 1052, 622, 1057, 631, 1052)
            .bezierCurveTo_s(634, 1045, 648, 1060, 668, 1041)
            .bezierCurveTo_s(683, 1026, 684, 1027, 693, 1059)
            .bezierCurveTo_s(701, 1074, 702, 1104, 714, 1131)
            ._ctx.fill()


        // 阴影2 石头上的
        this._ctx.fillStyle = "rgba(255,255,255,0.1)"
        this._ctx.beginPath()
        this.moveTo_s(434, 1019)
            .quadraticCurveTo_s(444, 996, 442, 1005)
            .lineTo_s(513, 1017)
            .lineTo_s(496, 1029)
            .arc_s(375, 1620, 604, Math.PI * 1.56, Math.PI * 1.532, true)
            ._ctx.fill()

        // 阴影1 最左边的
        this._ctx.globalCompositeOperation = "destination-over"
        this._ctx.fillStyle = "rgba(0,0,0,0.4)"
        this._ctx.beginPath()
        this.arc_s(335, 1515, 500, Math.PI, Math.PI * 1.3)
            .lineTo_s(50, 1130)
            .lineTo_s(0, 1170)
            ._ctx.fill()

        // 阴影3 最长的阴影
        this._ctx.beginPath()
        this.moveTo_s(0, 1142)
            .quadraticCurveTo_s(30, 1100, 79, 1082)
            .lineTo_s(59, 1004)
            .quadraticCurveTo_s(65, 995, 75, 1003)
            .quadraticCurveTo_s(93, 1016, 111, 1029)
            .lineTo_s(164, 1041)
            .arc_s(385, 1585, 590, Math.PI * 1.4, Math.PI * 1.54)
            .lineTo_s(481, 971)
            .lineTo_s(490, 989)
            .lineTo_s(520, 1010)
            .arc_s(385, 1585, 590, Math.PI * 1.58, Math.PI * 1.65)
            .lineTo_s(673, 1038)
            .bezierCurveTo_s(679, 1030, 683, 1028, 697, 1050)
            .lineTo_s(713, 1076)
            .lineTo_s(716, 1095)
            .arc_s(385, 1585, 590, Math.PI * 1.69, 0)
            .lineTo_s(0, 1160)
            ._ctx.fill()

        let lingrad = this.createLinearGradient_s(0, 0, 128, 1365)
        lingrad.addColorStop(0, 'rgba(0, 73, 118, 1)')
        lingrad.addColorStop(0.15, 'rgba(18, 122, 183, 1)')
        lingrad.addColorStop(0.3, 'rgba(47, 129, 206, 1)')
        lingrad.addColorStop(0.55, 'rgba(183, 154, 247, 1)')
        lingrad.addColorStop(0.75, 'rgba(242, 239, 234, 1)')
        lingrad.addColorStop(1, 'rgba(239, 237, 223, 1)')
        this._ctx.fillStyle = lingrad
        this.fillRect_s(0, 0, this.width, this.height)
    }
}

export default Bg
