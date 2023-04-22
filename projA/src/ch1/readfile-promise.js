const fs = require('fs')

// (1) Promise 반환하는 함수 정의
// Promise 사용하는 경우, Promise 객체 반환하는 함수 선언해야 함.
function readFile_pr (fname) {
    return new Promise((resolve) => {
        fs.readFile(fname, 'utf-8', (err, s) => {
            resolve(s)
        })
    })
}

// (2) 차례대로 텍스트 파일 읽기
// 비동기 처리 완료 시 .then() 메서드 내부의 함수가 실행됨.
readFile_pr('a.txt')
.then((text) => {
    console.log('a.txt�� �о�鿴���ϴ�.', text)
    return readFile_pr('b.txt')
})
.then((text) => {
    console.log('b.txt�� �о�鿴���ϴ�.', text)
    return readFile_pr('c.txt')
})
.then ((text) => {
    console.log('c.txt�� �о�鿴���ϴ�.', text)
})