const fs = require('fs')

// (1) a.txt 읽기
fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log('a.txt�� �о�鿴���ϴ�.', data)
    
    // (2) b.txt 읽기
     fs.readFile('b.txt', 'utf-8', function (err, data) {
        console.log('b.txt�� �о�鿴���ϴ�.', data)

        // (3) c.txt 읽기
        fs.readFile('c.txt', 'utf-8', function (err, datat) {
            console.log('c.txt�� �о�鿴���ϴ�.', data)
        })
     })
})
