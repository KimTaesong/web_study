let message = "Hello";
message = 123456;

// 1.  숫자형
let n = 123;
n = 12.345;
alert(1 / 0);   // 무한대
alert(Infinity); // 무한대
alert("숫자가 아님" / 2);   // NAN, 문자열을 숫자로 나누면 오류가 발생
alert("숫자가 아님" / 2+ 5);

// //2. 문자형
// let str = "Hello";  // 1. 큰 따옴표
// let str2 = 'Single quotes are ok too'; // 2. 작은 따옴표
// let phrase = `can embed another ${str}`;    // 3. 역 따욤표(백틱)

let name = "John";
// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`);    // Hello, John!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1+2}`);

// 3. 불린형 - true, false

let nameFieldChecked = true;    // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false;    // 아니요, age field를 확인하지 않았습니다.(not checked)

let isGreater = 4 > 1;
alert(isGreater);

// 4. null 존재하지 않는 값, 비어 있는 값, 알 수 없는 값
let age = null;

//5. undefined - 변수는 선언했지만 값을 할당하지 않았을 때 변수에 자동으로 할당
let town;
alert(town);

//6~7. 객체와 심볼
// 객체 - object - 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있음., 심볼- 객체의 고유한 식별자를 만들 때 사용.

//8. typeof 연산자

// 과제

let name1 = "Taesong";


alert(`Hello ${name1}`);
alert(`Hello ${1}`);
alert(`Hello ${"name1"}`);
        