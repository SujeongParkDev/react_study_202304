const fs = require('fs')

// 동기적으로 파일 읽기
const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)

// 비동기적으로 파일 읽기
// 비동기 처리 시 파일 읽기가 완료된 후 호출할 함수를 지정해야 하므로 동기 처리보다 코드가 길 수 있음.
fs.readFile('test.txt', 'utf-8', readHandler)

// 읽어들이기 완료 했을 때의 처리
function readHandler (err, data) {
    console.log(data)
}