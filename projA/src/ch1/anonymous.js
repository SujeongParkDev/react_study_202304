// 익명함수로 함수 정의
const f1 = function (s) { console.log(s) }
const f2 = (s) => { console.log(s) }

// 익명함수는 일반적인 함수처럼 사용함.
f1('foo')
f2('bar')

// 익명함수는 이름 없이 함수를 정의하고, 변수나 상수에 함수 객체를 대입할 수 있음.

// 소문자를 대문자로 변환하는 예
const sentence = 'Keep On Asking, and It Will Be Given You.'
const replaceSentence = sentence.replace(/[a-z]+/g, function (m) {
    return m.toUpperCase()
})

console.log(replaceSentence)

// 배열의 숫자를 정렬하는 예
const arr = [100, 1, 20, 43, 30, 11, 4]
arr.sort((a, b) => { return b - a} )
console.log(arr)

