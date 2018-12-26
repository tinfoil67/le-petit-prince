const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const views = require('koa-views')
const static = require('koa-static')
const app = new Koa()

const staticPath = './build'
app.use(static(
    path.join(__dirname, staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'html'
}))

let home = new Router()

// 子路由
home.get('/', async (ctx) => {
    await ctx.render('demo')
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(6701, () => {
    console.log('le-petit-prince is starting at port 6701')
})
