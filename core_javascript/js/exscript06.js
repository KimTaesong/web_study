'use strict';
function sayHello() {
    alert("Hello");
}

let sayHi = function() {
    alert("Hi");
};

let func = sayHi;

func();
sayHi();

alert(sayHello);

// callboack 함수
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }

// function showOk(){
//     alert("동의하셨습니다.");
// }

// function showCancel() {
//     alert("취소 버튼을 누르셨습니다.");
// }

// ask("동의하십니까?", showOk, showCancel);

let say = () => alert("안녕하세요!");

say();

let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
    () => alert('안녕'):
    () => alert("안녕하세요!");
welcome();


let sum = (a, b) => {
    let result = a + b;
    return result;
}

alert(sum(1,2));

// 과제

let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    () => {alert("동의하셨습니다.");},
    () => {alert("취소 버튼을 누르셨습니다.");}
);