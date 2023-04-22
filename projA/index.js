const colors = require('colors');

const s1 = "A time to throw stones away";
const s2 = "and a time to gather stones together";
const s3 = "A time to search and a time to give up as lost";
const s4 = "A time to keep and a time to throw away";

// shift alt 방향키 : 한줄 복사
console.log(s1.underline.red); // 글씨색 및 밑줄
console.log(s2.inverse.blue); // 배경색
console.log(s3.rainbow); // 글씨색 - 무지개색 출력
console.log(s4.inverse.red);