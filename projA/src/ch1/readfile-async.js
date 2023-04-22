const fs = require('fs')

// (1) 프로미스로 비동기적으로 파일 읽는 함수 정의
function readFileEx (fname) {
    return new Promise((resolve, reject) => {
        fs.readFile(fname, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

// (2) 모든 파일 읽어들이는 async 함수 정의
async function readAll () {
    const a = await readFileEx('a.txt')
    console.log(a)
    const b = await readFileEx('b.txt')
    console.log(b)
    const c = await readFileEx('c.txt')
    console.log(c)
}

readAll()

// async, await 는 Node v7 이후부터 지원
// 비동기 처리 실행을 대기하고 싶은 함수 호출 시 awaut "함수 이름" (매개변수) 와 같이 작성해야 함.
// await 사용하려면 함수를 async function 이라는 구문으로 정의해야 함.