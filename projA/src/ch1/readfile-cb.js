const fs = require('fs')

// 파일 읽기
fs.readFile('test.txt', 'utf-8', function (err, data) {
    // 읽어 들이기 완료 시 처리
    console.log(data)
})