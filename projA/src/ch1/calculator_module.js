// 덧셈 함수
function add (a, b) {
    return a + b
}

// 곱셈 함수
function multifly (a, b) {
    return a * b
}

// 외부 공개
// 라이브러리로 정의할 모듈에서 moudle.exports 라는 변수 내부에 공개할 객체 지정함.
// 라이브러리 사용하는 메인 프로그램에서는 require() 사용하여 모듈로 정의한 객체 읽어들임.
module.exports = {
    'add': add,
    'multifly': multifly
}