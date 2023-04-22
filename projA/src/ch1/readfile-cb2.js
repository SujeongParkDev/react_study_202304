const fs = require('fs')

// 파일 읽기
// ECMAScript 2015 : 화살표 함수 사용
// 화살표 함수는 function() {...} 을 사용한 익명 함수 대신 사용가능함.
// 주의! function 함수의 this는 함수 자신 <=> 화살표 함수의 this는 원래의 this를 그대로 나타냄.
fs.readFile('test.txt', 'utf-8', (err, data) => {
    // 읽어 들이기 완료 시 처리
    console.log(data)
})