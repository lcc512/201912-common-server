var express = require('express')
var routers = require('./routers')

var app = express()

// 开放固态资源引用
// app.use('/img/', express.static('./assert/images/'))

//如果第一个参数和后面的路径一样，则可以省略第一个参数写成这样
// app.use(express.static('./assert/'));
// 在网页访问的时候，要去掉assert，直接写该目录下的文件路径
// 比如此处，访问 1.png 访问：http://127.0.0.1:3000/images/1.png

// console.log(routers);


// 当以post请求 /post路径的 的时候，执行指定的处理函数
// 这样我们就可以利用不同的请求方法让一个请求使用多次
// expres默认不支持post获取数据，需要安装body-parser 插件，然后引包
// npm i body-parser
// 配置 body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 批量添加路由
for(const key in routers) {
    if(routers.hasOwnProperty(key)) {
        app.use('/' + key, routers[key]);
    }
}
// app.use(routers.test_app1)


// 统一处理500错误，用next方法，查看node最后讲的那些
app.use((err, req, res, next) => {

    res.status(500).json({
        error: err.message
    })
})

// 路由，res响应
app.get('/', function(req, res, next) {

    res.status(200).json({
        msgCode: 0,
        msgContent: '主路径访问正常'
    })
})

// 监听端口
app.listen(3019, function() {

    console.log('app is running at port 3019...');

})
