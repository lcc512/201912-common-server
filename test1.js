var fs = require('fs')


fs.readFile('./1111.txt', 'utf8', function(error, data) {


    if(error) {
        console.log({
            msg: '读取错误',
            error
        })
    } else {
        console.log(data);
    }


})
