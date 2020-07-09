'use strict';
// alert 함수 
alert('Hello');
// prompt 함수 - 2개의 인수

let age = prompt('나이를 입력해주세요.', 100);

alert(`당신의 나이는 ${age}살 입니다.`);    // 당신의 나이는 100살입니다.
// confirm 함수
let isBoss = confirm("당신이 주인인가요?");
alert(isBoss);  // 확인 버튼을 눌렀따면 true가 출력됩니다.

// 과제

let name = prompt('당신의 이름은 무엇인가요?',100);
alert(`당신의 이름은 ${name}입니다.`);