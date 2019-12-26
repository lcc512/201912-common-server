var express = require('express')
var baseInfo = require('../controllers/testApp/baseInfo')

// 路由容器
var router = express.Router()

router.get('/', function(req, res) {

    res.status(200).json({
        msgCode: 0,
        msgContent: 'get testapp index is ok'
    })
})

router.get('/list', baseInfo.list)
    .post('/info', baseInfo.create)
    .get('/shopinglogin', baseInfo.shopping_login)
    .get('/getsession', baseInfo.userinfo_one)

module.exports = router
