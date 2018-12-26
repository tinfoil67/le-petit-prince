(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var Shape = function () {
      // 其中 container 必传
      function Shape(opt) {
          classCallCheck(this, Shape);

          this.WIDTH = opt.WIDTH || window.innerWidth;
          this.width = opt.width || window.innerWidth;
          this.height = opt.height || window.innerWidth * 1.778;
          this.SCALE = opt.SCALE || this.WIDTH / 750;
          this.container = opt.container;
          this.top = opt.top || 0;
          this.left = opt.left || 0;
          this.beginingTs = opt.beginingTs || new Date().getTime();
          this._ctx = '';

          this._init();
      }

      createClass(Shape, [{
          key: '_init',
          value: function _init() {
              if (!this.container) throw new Error('invalid container');

              var dom = document.querySelector('#' + this.container);
              dom.width = this.width * this.SCALE;
              dom.height = this.height * this.SCALE;
              dom.style.top = this.top * this.SCALE + 'px';
              dom.style.left = this.left * this.SCALE + 'px';
              this._dom = dom;

              var ctx = dom.getContext('2d');
              ctx.lineJoin = 'round';
              this._ctx = ctx;
          }
      }, {
          key: 'moveTo_s',
          value: function moveTo_s(x, y) {
              this._ctx.moveTo(x * this.SCALE, y * this.SCALE);
              return this;
          }
      }, {
          key: 'lineTo_s',
          value: function lineTo_s(x, y) {
              this._ctx.lineTo(x * this.SCALE, y * this.SCALE);
              return this;
          }
      }, {
          key: 'arc_s',
          value: function arc_s(x, y, r, sAngle, eAngle, counterclockwise) {
              this._ctx.arc(x * this.SCALE, y * this.SCALE, r * this.SCALE, sAngle, eAngle, counterclockwise);
              return this;
          }
      }, {
          key: 'createLinearGradient_s',
          value: function createLinearGradient_s(x0, y0, x1, y1) {
              return this._ctx.createLinearGradient(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE);
          }
      }, {
          key: 'createRadialGradient_s',
          value: function createRadialGradient_s(x0, y0, r0, x1, y1, r1) {
              return this._ctx.createRadialGradient(x0 * this.SCALE, y0 * this.SCALE, r0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE, r1 * this.SCALE);
          }
      }, {
          key: 'quadraticCurveTo_s',
          value: function quadraticCurveTo_s(cpx, cpy, x, y) {
              this._ctx.quadraticCurveTo(cpx * this.SCALE, cpy * this.SCALE, x * this.SCALE, y * this.SCALE);
              return this;
          }
      }, {
          key: 'bezierCurveTo_s',
          value: function bezierCurveTo_s(cp1x, cp1y, cp2x, cp2y, x, y) {
              this._ctx.bezierCurveTo(cp1x * this.SCALE, cp1y * this.SCALE, cp2x * this.SCALE, cp2y * this.SCALE, x * this.SCALE, y * this.SCALE);
              return this;
          }
      }, {
          key: 'translate_s',
          value: function translate_s(x, y) {
              this._ctx.translate(x * this.SCALE, y * this.SCALE);
              return this;
          }
      }, {
          key: 'clearRect_s',
          value: function clearRect_s(x0, y0, x1, y1) {
              this._ctx.clearRect(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE);
              return this;
          }
      }, {
          key: 'fillRect_s',
          value: function fillRect_s(x0, y0, x1, y1) {
              this._ctx.fillRect(x0 * this.SCALE, y0 * this.SCALE, x1 * this.SCALE, y1 * this.SCALE);
              return this;
          }
      }, {
          key: 'animatePoint',
          value: function animatePoint(mSec, from, to, duration, noScale) {
              mSec = mSec % duration;
              var k = 2 * (to - from) / duration;
              var result = 0;
              if (mSec < duration * 0.5) {
                  result = k * mSec + from;
              } else {
                  result = -k * mSec - from + 2 * to;
              }
              return noScale ? result : result * this.SCALE;
          }
      }]);
      return Shape;
  }();

  var Bg = function (_Shape) {
      inherits(Bg, _Shape);

      function Bg(opt) {
          classCallCheck(this, Bg);
          return possibleConstructorReturn(this, (Bg.__proto__ || Object.getPrototypeOf(Bg)).call(this, opt));
      }

      createClass(Bg, [{
          key: "draw",
          value: function draw() {
              // 地面
              this._ctx.fillStyle = "#000";
              this._ctx.beginPath();
              this.arc_s(375, 1620, 600, Math.PI, Math.PI * 1.39).lineTo_s(177, 1050).arc_s(375, 1620, 604, Math.PI * 1.4, Math.PI * 1.63).quadraticCurveTo_s(636, 1075, 713, 1125).quadraticCurveTo_s(722, 1125, 730, 1134).arc_s(375, 1620, 604, Math.PI * 1.71, 0)._ctx.fill();

              // 石头1
              this._ctx.beginPath();
              this.moveTo_s(34, 1132).quadraticCurveTo_s(26, 1123, 26, 1104).bezierCurveTo_s(26, 1076, 36, 1087, 48, 1068).bezierCurveTo_s(45, 1059, 48, 1045, 58, 1034).bezierCurveTo_s(54, 1019, 55, 1005, 65, 1000).lineTo_s(74, 1013).lineTo_s(119, 1051).quadraticCurveTo_s(128, 1045, 178, 1059)._ctx.fill();

              // 石头2
              this._ctx.beginPath();
              this.moveTo_s(433, 1021).quadraticCurveTo_s(444, 996, 448, 991).bezierCurveTo_s(453, 984, 456, 989, 464, 983).lineTo_s(481, 971).lineTo_s(484, 988).lineTo_s(489, 999).lineTo_s(502, 1004).lineTo_s(513, 1017).lineTo_s(494, 1029)._ctx.fill();

              // 石头3
              this._ctx.beginPath();
              this.moveTo_s(597, 1064).bezierCurveTo_s(607, 1052, 622, 1057, 631, 1052).bezierCurveTo_s(634, 1045, 648, 1060, 668, 1041).bezierCurveTo_s(683, 1026, 684, 1027, 693, 1059).bezierCurveTo_s(701, 1074, 702, 1104, 714, 1131)._ctx.fill();

              // 阴影2 石头上的
              this._ctx.fillStyle = "rgba(255,255,255,0.1)";
              this._ctx.beginPath();
              this.moveTo_s(434, 1019).quadraticCurveTo_s(444, 996, 442, 1005).lineTo_s(513, 1017).lineTo_s(496, 1029).arc_s(375, 1620, 604, Math.PI * 1.56, Math.PI * 1.532, true)._ctx.fill();

              // 阴影1 最左边的
              this._ctx.globalCompositeOperation = "destination-over";
              this._ctx.fillStyle = "rgba(0,0,0,0.4)";
              this._ctx.beginPath();
              this.arc_s(335, 1515, 500, Math.PI, Math.PI * 1.3).lineTo_s(50, 1130).lineTo_s(0, 1170)._ctx.fill();

              // 阴影3 最长的阴影
              this._ctx.beginPath();
              this.moveTo_s(0, 1142).quadraticCurveTo_s(30, 1100, 79, 1082).lineTo_s(59, 1004).quadraticCurveTo_s(65, 995, 75, 1003).quadraticCurveTo_s(93, 1016, 111, 1029).lineTo_s(164, 1041).arc_s(385, 1585, 590, Math.PI * 1.4, Math.PI * 1.54).lineTo_s(481, 971).lineTo_s(490, 989).lineTo_s(520, 1010).arc_s(385, 1585, 590, Math.PI * 1.58, Math.PI * 1.65).lineTo_s(673, 1038).bezierCurveTo_s(679, 1030, 683, 1028, 697, 1050).lineTo_s(713, 1076).lineTo_s(716, 1095).arc_s(385, 1585, 590, Math.PI * 1.69, 0).lineTo_s(0, 1160)._ctx.fill();

              var lingrad = this.createLinearGradient_s(0, 0, 128, 1365);
              lingrad.addColorStop(0, 'rgba(0, 73, 118, 1)');
              lingrad.addColorStop(0.15, 'rgba(18, 122, 183, 1)');
              lingrad.addColorStop(0.3, 'rgba(47, 129, 206, 1)');
              lingrad.addColorStop(0.55, 'rgba(183, 154, 247, 1)');
              lingrad.addColorStop(0.75, 'rgba(242, 239, 234, 1)');
              lingrad.addColorStop(1, 'rgba(239, 237, 223, 1)');
              this._ctx.fillStyle = lingrad;
              this.fillRect_s(0, 0, this.width, this.height);
          }
      }]);
      return Bg;
  }(Shape);

  var Rose = function (_Shape) {
      inherits(Rose, _Shape);

      function Rose(opt) {
          classCallCheck(this, Rose);
          return possibleConstructorReturn(this, (Rose.__proto__ || Object.getPrototypeOf(Rose)).call(this, opt));
      }

      createClass(Rose, [{
          key: 'draw',
          value: function draw() {
              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height).translate_s(76, 164)._ctx.rotate(Math.PI * 2 / this.animatePoint(t, 60, 120, 3000, true));
              this.translate_s(-76, -164);

              // 花影
              this._ctx.beginPath();
              this.moveTo_s(75, 161).lineTo_s(74, 160).lineTo_s(64, 167)._ctx.stroke();

              // 花枝
              this._ctx.lineWidth = 2;
              this._ctx.beginPath();
              this.moveTo_s(76, 161).quadraticCurveTo_s(62, 114, 75, 83)._ctx.stroke();
              this._ctx.lineWidth = 1;

              // 叶子1
              this._ctx.beginPath();
              this.moveTo_s(68, 116).bezierCurveTo_s(62, 112, 52, 110, 50, 108).bezierCurveTo_s(45, 106, 46, 103, 53, 102).bezierCurveTo_s(60, 102, 64, 100, 66, 115)._ctx.fill();

              // 叶子2
              this._ctx.beginPath();
              this.moveTo_s(66, 117).bezierCurveTo_s(61, 118, 60, 120, 57, 121).bezierCurveTo_s(54, 122, 54, 120, 54, 118).bezierCurveTo_s(56, 116, 62, 115, 66, 117)._ctx.fill();

              // 叶子3
              this._ctx.beginPath();
              this.moveTo_s(78, 84).bezierCurveTo_s(78, 81, 80, 80, 80, 78)._ctx.stroke();
              this._ctx.beginPath();
              this.lineTo_s(65, 74).quadraticCurveTo_s(70, 76, 76, 75).bezierCurveTo_s(76, 74, 80, 76, 80, 78).bezierCurveTo_s(78, 81, 76, 80, 75, 82).quadraticCurveTo_s(73, 80, 74, 76)._ctx.fill();

              // 花瓣1
              this._ctx.beginPath();
              this.moveTo_s(79, 75).bezierCurveTo_s(72, 71, 65, 73, 61, 65).bezierCurveTo_s(62, 62, 70, 57, 72, 57).bezierCurveTo_s(73, 66, 75, 70, 76, 74)._ctx.fill();

              // 花瓣2
              this._ctx.beginPath();
              this.moveTo_s(75, 66).bezierCurveTo_s(76, 61, 73, 55, 81, 50).bezierCurveTo_s(84, 49, 85, 50, 85, 54).bezierCurveTo_s(83, 54, 77, 59, 75, 64)._ctx.fill();

              // 花瓣3
              this._ctx.beginPath();
              this.moveTo_s(82, 59).quadraticCurveTo_s(88, 49, 97, 56).bezierCurveTo_s(99, 59, 95, 62, 88, 62).lineTo_s(93, 60).lineTo_s(90, 57).lineTo_s(85, 57)._ctx.fill();
              this._ctx.beginPath();
              this.moveTo_s(85, 59).lineTo_s(89, 59).lineTo_s(91, 60).lineTo_s(89, 61).lineTo_s(86, 61)._ctx.stroke();

              // 花瓣4
              this._ctx.beginPath();
              this.moveTo_s(88, 65).quadraticCurveTo_s(96, 66, 100, 59).bezierCurveTo_s(100, 63, 102, 64, 101, 70).quadraticCurveTo_s(98, 74, 93, 74).bezierCurveTo_s(90, 73, 90, 68, 89, 67)._ctx.fill();

              // 花瓣5
              this._ctx.beginPath();
              this.moveTo_s(91, 74).bezierCurveTo_s(99, 77, 100, 70, 104, 76).quadraticCurveTo_s(100, 81, 93, 75)._ctx.fill();

              // 花瓣6
              this._ctx.beginPath();
              this.moveTo_s(81, 76).quadraticCurveTo_s(94, 74, 96, 83).bezierCurveTo_s(89, 87, 81, 81, 81, 76)._ctx.fill();

              // 花瓣7
              this._ctx.beginPath();
              this.moveTo_s(90, 75).bezierCurveTo_s(76, 73, 75, 67, 79, 61).bezierCurveTo_s(79, 60, 85, 60, 87, 63).quadraticCurveTo_s(85, 71, 89, 74)._ctx.fill();

              // 光圈
              this._ctx.globalCompositeOperation = "destination-over";
              this._ctx.strokeStyle = 'rgba(255,255,255,0.3)';
              this._ctx.beginPath();
              this.arc_s(83, 67, 30, Math.PI * 2, 0)._ctx.stroke();
              var radgrad = this.createRadialGradient_s(83, 67, 1, 83, 67, 60);
              radgrad.addColorStop(0, 'rgba(255,255,255,0.3)');
              radgrad.addColorStop(0.5, 'rgba(255,255,255,0.1)');
              radgrad.addColorStop(0.5, 'transparent');
              this._ctx.fillStyle = radgrad;
              this.arc_s(83, 67, 80, Math.PI * 2, 0)._ctx.fill();
          }
      }]);
      return Rose;
  }(Shape);

  var Prince = function (_Shape) {
      inherits(Prince, _Shape);

      function Prince(opt) {
          classCallCheck(this, Prince);
          return possibleConstructorReturn(this, (Prince.__proto__ || Object.getPrototypeOf(Prince)).call(this, opt));
      }

      createClass(Prince, [{
          key: 'draw',
          value: function draw() {
              // 小王子
              this._ctx.beginPath();
              this.moveTo_s(166, 245).bezierCurveTo_s(162, 246, 157, 238, 151, 237).lineTo_s(152, 234).lineTo_s(148, 232).lineTo_s(148, 227).quadraticCurveTo_s(154, 226, 163, 208).lineTo_s(163, 173).bezierCurveTo_s(164, 171, 165, 176, 168, 172).quadraticCurveTo_s(173, 163, 167, 155).quadraticCurveTo_s(176, 154, 183, 148).bezierCurveTo_s(178, 146, 163, 104, 161, 87).lineTo_s(153, 81).bezierCurveTo_s(151, 76, 156, 72, 153, 68).lineTo_s(146, 66).lineTo_s(146, 64).bezierCurveTo_s(151, 62, 154, 58, 154, 53).bezierCurveTo_s(162, 51, 162, 47, 156, 42).quadraticCurveTo_s(158, 37, 157, 33).quadraticCurveTo_s(163, 28, 164, 22).lineTo_s(161, 23).quadraticCurveTo_s(163, 19, 160, 15).bezierCurveTo_s(160, 20, 155, 21, 152, 19).quadraticCurveTo_s(152, 17, 155, 14).quadraticCurveTo_s(151, 15, 149, 17).quadraticCurveTo_s(148, 14, 151, 11).bezierCurveTo_s(143, 14, 132, 12, 125, 16).lineTo_s(126, 11).bezierCurveTo_s(124, 16, 120, 15, 119, 20).lineTo_s(114, 16).lineTo_s(116, 20).bezierCurveTo_s(110, 23, 112, 26, 109, 28).quadraticCurveTo_s(108, 26, 106, 26).bezierCurveTo_s(108, 29, 107, 30, 107, 34).quadraticCurveTo_s(105, 32, 103, 34).bezierCurveTo_s(106, 34, 107, 36, 108, 39).quadraticCurveTo_s(103, 39, 102, 43).bezierCurveTo_s(104, 41, 107, 42, 108, 45).bezierCurveTo_s(109, 48, 109, 51, 106, 53).bezierCurveTo_s(109, 52, 114, 59, 120, 64).bezierCurveTo_s(124, 64, 125, 65, 125, 67).bezierCurveTo_s(113, 71, 120, 79, 117, 79).lineTo_s(100, 141).quadraticCurveTo_s(95, 141, 96, 146).lineTo_s(98, 146).lineTo_s(95, 155).quadraticCurveTo_s(100, 154, 109, 158).quadraticCurveTo_s(106, 164, 113, 176).lineTo_s(109, 214).lineTo_s(116, 220).lineTo_s(117, 227).quadraticCurveTo_s(123, 226, 123, 230).lineTo_s(121, 238).quadraticCurveTo_s(118, 238, 116, 243).quadraticCurveTo_s(114, 247, 121, 249).lineTo_s(130, 249).bezierCurveTo_s(126, 245, 130, 240, 126, 237).lineTo_s(127, 230).quadraticCurveTo_s(127, 226, 139, 220).lineTo_s(144, 228).lineTo_s(144, 233).quadraticCurveTo_s(140, 233, 139, 242).lineTo_s(157, 245)._ctx.fill();

              // 小水壶
              this._ctx.beginPath();
              this.moveTo_s(87, 259).bezierCurveTo_s(88, 250, 84, 240, 81, 234).bezierCurveTo_s(76, 234, 67, 236, 65, 237).quadraticCurveTo_s(64, 245, 65, 252).lineTo_s(54, 246).lineTo_s(53, 240).quadraticCurveTo_s(50, 246, 49, 253).lineTo_s(52, 249).lineTo_s(65, 258).lineTo_s(66, 260).bezierCurveTo_s(72, 263, 84, 260, 86, 258)._ctx.fill();
              this._ctx.beginPath();
              this.moveTo_s(86, 252).bezierCurveTo_s(95, 238, 89, 235, 81, 238)._ctx.lineWidth = 2;
              this._ctx.stroke();
          }
      }]);
      return Prince;
  }(Shape);

  var PrinceAnim = function (_Shape) {
      inherits(PrinceAnim, _Shape);

      function PrinceAnim(opt) {
          classCallCheck(this, PrinceAnim);
          return possibleConstructorReturn(this, (PrinceAnim.__proto__ || Object.getPrototypeOf(PrinceAnim)).call(this, opt));
      }

      createClass(PrinceAnim, [{
          key: 'draw',
          value: function draw() {
              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height);

              // 小王子围巾
              var d = 3000;
              this.translate_s(127, 4)._ctx.rotate(Math.PI * 2 / this.animatePoint(t, 180, 60, d, true));
              this.translate_s(-127, -4);

              this._ctx.beginPath();
              this.moveTo_s(130, 3).bezierCurveTo_s(122, 4, 120, 10, 117, 11).bezierCurveTo_s(94, this.animatePoint(t, 35, 32, d, true), 81, this.animatePoint(t, 45, 42, d, true), 71, this.animatePoint(t, 45, 42, d, true)).quadraticCurveTo_s(68, this.animatePoint(t, 40, 43, d, true), 64, this.animatePoint(t, 39, 42, d, true)).bezierCurveTo_s(59, this.animatePoint(t, 38, 42, d, true), 47, this.animatePoint(t, 29, 38, d, true), 41, this.animatePoint(t, 36, 41, d, true)).bezierCurveTo_s(36, this.animatePoint(t, 40, 41, d, true), 34, this.animatePoint(t, 49, 50, d, true), this.animatePoint(t, 25, 22, d, true), this.animatePoint(t, 52, 46, d, true)).bezierCurveTo_s(38, 57, 47, this.animatePoint(t, 39, 43, d, true), this.animatePoint(t, 52, 55, d, true), this.animatePoint(t, 40, 48, d, true)).lineTo_s(this.animatePoint(t, 51, 52, d, true), 46).bezierCurveTo_s(38, this.animatePoint(t, 65, 56, d, true), 43, this.animatePoint(t, 59, 54, d, true), this.animatePoint(t, 31, 28, d, true), this.animatePoint(t, 65, 60, d, true)).bezierCurveTo_s(48, this.animatePoint(t, 69, 62, d, true), 57, this.animatePoint(t, 54, 51, d, true), this.animatePoint(t, 70, 73, d, true), this.animatePoint(t, 47, 49, d, true)).quadraticCurveTo_s(76, this.animatePoint(t, 56, 53, d, true), this.animatePoint(t, 88, 92, d, true), this.animatePoint(t, 60, 56, d, true)).quadraticCurveTo_s(100, 55, this.animatePoint(t, 130, 127, d, true), 33)._ctx.fill();
          }
      }]);
      return PrinceAnim;
  }(Shape);

  var Clouds = function (_Shape) {
      inherits(Clouds, _Shape);

      function Clouds(opt) {
          classCallCheck(this, Clouds);
          return possibleConstructorReturn(this, (Clouds.__proto__ || Object.getPrototypeOf(Clouds)).call(this, opt));
      }

      createClass(Clouds, [{
          key: 'draw',
          value: function draw() {
              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height);

              var lingrad = this.createLinearGradient_s(0, 0, 0, this.height);
              lingrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
              lingrad.addColorStop(0.24, 'rgba(255, 255, 255, 0.4)');
              lingrad.addColorStop(0.33, 'rgba(255, 255, 255, 0)');
              lingrad.addColorStop(0.47, 'rgba(255, 255, 255, 0.4)');
              lingrad.addColorStop(0.73, 'rgba(255, 255, 255, 0.4)');
              lingrad.addColorStop(0.84, 'rgba(255, 255, 255, 0)');
              this._ctx.lineWidth = 2;
              this._ctx.strokeStyle = lingrad;

              var lingrad2 = this.createLinearGradient_s(0, 0, 0, this.height);
              lingrad2.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
              lingrad2.addColorStop(0.24, 'rgba(255, 255, 255, 0.1)');
              lingrad2.addColorStop(0.32, 'rgba(255, 255, 255, 0)');
              lingrad2.addColorStop(0.47, 'rgba(255, 255, 255, 0.1)');
              lingrad2.addColorStop(0.74, 'rgba(255, 255, 255, 0.1)');
              lingrad2.addColorStop(0.83, 'rgba(255, 255, 255, 0)');
              this._ctx.fillStyle = lingrad2;

              // 云朵1
              this.translate_s(this.animatePoint(t, -30, 0, 16000, true), 0)._ctx.beginPath();
              this.moveTo_s(551, 114).bezierCurveTo_s(549, 64, 593, 52, 617, 73).bezierCurveTo_s(664, -3, 800, -3, 847, 73).lineTo_s(847, 114)._ctx.stroke();
              this._ctx.fill();
              this.translate_s(this.animatePoint(t, 30, 0, 16000, true), 0);

              // 云朵2
              this.translate_s(this.animatePoint(t, 20, 0, 13000, true), 0)._ctx.beginPath();
              this.moveTo_s(422, 289).bezierCurveTo_s(410, 238, 344, 214, 301, 253).bezierCurveTo_s(256, 162, 118, 147, 77, 272).bezierCurveTo_s(40, 244, 0, 253, -20, 287)._ctx.stroke();
              this._ctx.fill();
          }
      }]);
      return Clouds;
  }(Shape);

  var Planet1 = function (_Shape) {
      inherits(Planet1, _Shape);

      function Planet1(opt) {
          classCallCheck(this, Planet1);
          return possibleConstructorReturn(this, (Planet1.__proto__ || Object.getPrototypeOf(Planet1)).call(this, opt));
      }

      createClass(Planet1, [{
          key: 'draw',
          value: function draw() {
              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height);
              this._ctx.translate(this.animatePoint(t, -2, 2, 8000), this.animatePoint(t, -2, 2, 4000));

              var radgrad = this.createRadialGradient_s(120, 116, 25, 121, 121, 54);
              radgrad.addColorStop(0, '#6f6fa6');
              radgrad.addColorStop(0.9, '#8889b6');
              radgrad.addColorStop(1, 'rgba(190, 190, 213, 0.9)');
              radgrad.addColorStop(1, '#7c75aa');
              this._ctx.fillStyle = radgrad;
              this.arc_s(121, 121, 54, Math.PI * 2, 0)._ctx.fill();
              this._ctx.save();

              var radgrad2 = this.createRadialGradient_s(122, 80, 15, 121, 110, 50);
              radgrad2.addColorStop(0, '#a2a2c6');
              radgrad2.addColorStop(0, '#9394bd');
              radgrad2.addColorStop(0.45, '#9394bd');
              radgrad2.addColorStop(0.45, '#7678ac');
              radgrad2.addColorStop(1, '#797aac');
              radgrad2.addColorStop(1, '#6f6fa6');
              this._ctx.fillStyle = radgrad2;

              this._ctx.globalCompositeOperation = 'source-atop';
              this.translate_s(121, 110)._ctx.rotate(-Math.PI * 2 / 12);
              this._ctx.scale(1, 0.8);
              this.translate_s(-126, -115).arc_s(121, 110, 50, Math.PI * 2, 0)._ctx.fill();
              this._ctx.restore();

              var radgrad3 = this.createRadialGradient_s(185, 167, 5, 191, 183, 30);
              radgrad3.addColorStop(0, 'rgba(145, 134, 196, 0.9)');
              radgrad3.addColorStop(0.6, 'rgba(170, 157, 214, 0.9)');
              radgrad3.addColorStop(1, 'rgba(189, 175, 226, 0.2)');
              this._ctx.fillStyle = radgrad3;
              this._ctx.beginPath();
              this.arc_s(191, 183, 18, Math.PI * 2, 0)._ctx.fill();
          }
      }]);
      return Planet1;
  }(Shape);

  var Planet2 = function (_Shape) {
      inherits(Planet2, _Shape);

      function Planet2(opt) {
          classCallCheck(this, Planet2);
          return possibleConstructorReturn(this, (Planet2.__proto__ || Object.getPrototypeOf(Planet2)).call(this, opt));
      }

      createClass(Planet2, [{
          key: 'draw',
          value: function draw() {
              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height);
              this._ctx.translate(this.animatePoint(t, -2, 2, 4000), this.animatePoint(t, -2, 2, 8000));

              var lingrad = this.createLinearGradient_s(0, 17, 0, 88);
              lingrad.addColorStop(0, 'rgba(137, 137, 180, 0.6)');
              lingrad.addColorStop(1, 'rgba(209, 205, 255, 0.6)');
              this._ctx.fillStyle = lingrad;
              this._ctx.beginPath();
              this.arc_s(77, 50, 33, Math.PI * 2, 0)._ctx.fill();

              var lingrad2 = this.createLinearGradient_s(71, 43, 74, 67);
              lingrad2.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
              lingrad2.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
              this._ctx.lineWidth = 5;
              this._ctx.strokeStyle = lingrad2;

              this._ctx.beginPath();
              this.moveTo_s(29, 53).bezierCurveTo_s(-8, 74, 183, 52, 121, 41)._ctx.stroke();
          }
      }]);
      return Planet2;
  }(Shape);

  var STARS = getStars();

  var Planets = function (_Shape) {
      inherits(Planets, _Shape);

      function Planets(opt) {
          classCallCheck(this, Planets);
          return possibleConstructorReturn(this, (Planets.__proto__ || Object.getPrototypeOf(Planets)).call(this, opt));
      }

      createClass(Planets, [{
          key: 'draw',
          value: function draw() {
              var _this2 = this;

              var t = new Date().getTime() - this.beginingTs;

              this.clearRect_s(0, 0, this.width, this.height);

              STARS.forEach(function (n) {
                  var d = n.d;
                  var x = _this2.animatePoint(t, n.x1, n.x2, d);
                  var y = _this2.animatePoint(t, n.y1, n.y2, d);
                  var r1 = n.r1;
                  var r2 = n.r2;
                  var o1 = n.o1;
                  var o2 = n.o2;

                  var radgrad = _this2._ctx.createRadialGradient(x, y, _this2.animatePoint(t, r2 * 0.8, r2, d), x, y, _this2.animatePoint(t, r1 * 0.8, r1, d));
                  radgrad.addColorStop(0, 'rgba(255, 255, 255, ' + _this2.animatePoint(t, o1, o2, 4000) + ')');
                  radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                  _this2._ctx.fillStyle = radgrad;
                  _this2._ctx.beginPath();
                  _this2._ctx.arc(x, y, r1, Math.PI * 2, 0);
                  _this2._ctx.fill();
              });
          }
      }]);
      return Planets;
  }(Shape);

  function getStars() {
      // [x1, y1, r]
      var stars = [[102, 66, 3], [119, 112, 2], [175, 138, 5], [206, 145, 2.5], [290, 173, 2.5], [303, 92, 2], [330, 62, 5], [331, 82, 2], [365, 69, 3], [408, 140, 3], [384, 34, 1], [421, 23, 1], [600, 137, 2], [619, 79, 1], [634, 80, 3], [643, 62, 1], [672, 41, 3], [704, 75, 1], [732, 209, 3], [109, 325, 4], [135, 294, 2], [118, 218, 1], [143, 342, 1], [188, 353, 2], [432, 334, 5], [468, 351, 1], [607, 371, 3], [633, 323, 1], [661, 358, 1], [665, 349, 1], [692, 343, 2], [748, 325, 2], [59, 424, 2], [267, 643, 3], [262, 653, 1], [270, 675, 1], [310, 661, 1], [602, 559, 1], [59, 893, 3], [312, 940, 2], [329, 916, 2], [388, 885, 4], [393, 881, 1], [420, 918, 2], [413, 943, 2], [405, 956, 4], [544, 931, 1], [644, 930, 5]];

      var result = stars.map(function (n) {
          var x1 = n[0];
          var y1 = n[1];
          var x2 = x1 + parseInt(Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1);
          var y2 = y1 + parseInt(Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1);
          var r1 = n[2];
          var o1 = +Math.random().toFixed(1);
          var o2 = (o1 + 0.6) % 1;
          var d = parseInt(Math.random() * 3000 + 3000);

          var r2 = Math.max(r1 / 2, r1 - 2);

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
          };
      });

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
      });

      return result;
  }

  var beginingTs = new Date().getTime();

  window.onload = function () {
      document.querySelector('.container').style.height = window.innerWidth * 1.778 + 'px';

      if (document.querySelector('#bg').getContext) {
          drawBg();
          drawAnimateRose();
          drawPrince();
          drawAnimatePrince();
          drawAnimateClouds();
          drawAnimatePlanet1();
          drawAnimatePlanet2();
          drawAnimatePlanets();
      } else {
          alert('不支持canvas');
      }
  };

  function drawAnimatePlanets() {
      new Planets({
          width: 750,
          height: 1334,
          container: 'planets',
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimatePlanets);
  }

  function drawAnimatePlanet2() {
      new Planet2({
          width: 165,
          height: 100,
          container: 'planet2',
          top: 785,
          left: 15,
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimatePlanet2);
  }

  function drawAnimatePlanet1() {
      new Planet1({
          width: 240,
          height: 240,
          container: 'planet1',
          top: 600,
          left: 445,
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimatePlanet1);
  }

  function drawAnimateClouds() {
      new Clouds({
          width: 750,
          height: 350,
          container: 'clouds',
          top: 140,
          left: 0,
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimateClouds);
  }

  function drawAnimatePrince() {
      new PrinceAnim({
          width: 130,
          height: 80,
          container: 'animate-prince',
          top: 845,
          left: 130,
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimatePrince);
  }

  function drawPrince() {
      new Prince({
          width: 200,
          height: 270,
          container: 'prince',
          top: 780,
          left: 135
      }).draw();
  }

  function drawAnimateRose() {
      new Rose({
          width: 160,
          height: 190,
          container: 'rose',
          top: 855,
          left: 300,
          beginingTs: beginingTs
      }).draw();
      window.requestAnimationFrame(drawAnimateRose);
  }

  function drawBg() {
      new Bg({
          width: 750,
          height: 1334,
          container: 'bg'
      }).draw();
  }

})));
