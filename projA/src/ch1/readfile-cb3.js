const fs = require('fs')

// (1) a.txt 읽기
fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log('a.txt를 읽어들였습니다.', data)
    
    // (2) b.txt 읽기
     fs.readFile('b.txt', 'utf-8', function (err, data) {
        console.log('b.txt를 읽어들였습니다.', data)

        // (3) c.txt 읽기
        fs.readFile('c.txt', 'utf-8', function (err, datat) {
            console.log('c.txt를 읽어들였습니다.', data)
        })
     })
})
