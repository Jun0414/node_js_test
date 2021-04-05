
// 데이터 타입 확인
import getType from './getType'

console.log('데이터 타입 확인')

// 기본 내장 함수 typeof (null, {}, []가 모두 object로 표기된다)
console.log(typeof 'Hello world!')  // 문자 타입
console.log(typeof 123) // 숫자 타입
console.log(typeof true)  // 불린 타입
console.log(typeof undefined) // 지정되지 않은 타입
console.log(typeof null)  // 비어있는 타입
console.log(typeof {})  // 오브젝트 타입
console.log(typeof [])  // 배열 타입

// 만든 함수 getType (각각의 타입을 확인 가능)
console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

console.log('-----------------------------')

// 산술 연산자 (arithmetic operator)

console.log('산술 연산자')

console.log(1 + 2)  // 덧셈
console.log(5 - 7)  // 뺄셈
console.log(3 * 4)  // 곱셈
console.log(10 / 2) // 나눗셈
console.log(7 % 5)  // 나머지

console.log('-----------------------------')

// 할당 연산자 (assignment operator)

console.log('할당 연산자')

// const : 재할당 불가
const a = 2
console.log(a)

// let : 재할당 가능
let b = 3
// b = b + 1
b += 1

console.log(b)

console.log('-----------------------------')

// 비교 연산자 (comparison operator)

console.log('비교 연산자')

const c = 1
const d = 2

// 일치 (값)
console.log(c === d)

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

// 불일치 (값)
console.log(c !== d)

// 대소 비교
console.log(c < d)
console.log(c > d)
console.log(c <= d)
console.log(c >= d)

console.log('-----------------------------')

// 논리 연산자 (logical operator)

console.log('논리 연산자')

const e = 1 === 1
const f = 'AB' === 'AB'
const g = true

console.log(e)
console.log(f)
console.log(g)

// And 연산자 : 모든 값이 true 인 경우 true, 아니면 false
console.log('&&: ', e && f && g)

// OR 연산자 : 하나 이상의 값이 true 인 경우 true, 모든 값이 false 인 경우 false
console.log('||: ', e || f || g)

// NOT 연산자 : 현재 값의 반대 값 (true -> false, flase -> true)
console.log('!: ', !e)

console.log('-----------------------------')

// 삼항 연산자 (ternary operator)

console.log('삼항 연산자')

const h = 1 < 2

// 수식 ? 참인 경우 할당할 값 : 거짓인 경우 할당할 값
console.log(h ? '참' : '거짓')

console.log('-----------------------------')

// 조건문 (If statement)
import random from './getRandom'

console.log('조건문 If')

const i = random()

if (i === 0) {
  console.log('i is 0')
} else if (i == 2) {
  console.log('i is 2')
} else if (i == 4) {
  console.log('i is 4')
} else {
  console.log('rest...')
}

console.log('-----------------------------')

// 조건문 (Switch statement)

console.log('조건문 Switch')

switch (i) {
  case 0:
    console.log('i is 0')
    break
  case 2:
    console.log('i is 2')
    break
  case 4:
    console.log('i is 4')
    break
  default:
    console.log('reset...')
}

console.log('-----------------------------')

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

console.log('반복문')

// ul 태그 찾기
const ulEl = document.querySelector('ul')

for (let j = 0; j < 10; j += 1) {
  console.log(j)

  // li 라는 변수에 li 태그를 연결
  const li = document.createElement('li')
  // 텍스트를 삽입
  li.textContent = `list-${j + 1}`

  if ((j + 1) % 2 === 0) {
    // li태그를 클릭했을 경우 콘솔창에 내용 출력
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }

  // ul 태그 안의 자식으로 추가
  ulEl.appendChild(li)
}

console.log('-----------------------------')

// 변수 유효범위 (Variable Scope)
// let : 블록 레벨 유효 범위 변수 
// const : 블록 레벨 유효 범위 변수
// var : 함수 레벨 유효 범위 변수

console.log('변수 유효범위')

// function scope() {
//   // 에러
//   console.log(k)
//   // 에러
//   console.log(l)
//   // 정상
//   console.log(m)

//   if (true) {
//     // 정상 (undefined)
//     console.log(k)
//     // 정상 (undefined)
//     console.log(l)
//     // 정상
//     console.log(m)

//     let k = 123
//     const l = 456
//     var m = 789

//     // 정상
//     console.log(k)
//     // 정상
//     console.log(l)
//     // 정상
//     console.log(m)
//   }
//   // 에러
//   console.log(k)
//   // 에러
//   console.log(l)
//   // 정상
//   console.log(m)
// }
// // 에러
// console.log(k)
// // 에러
// console.log(l)
// // 에러
// console.log(m)
//
// scope()

console.log('-----------------------------')

// 형 변환 (Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

console.log('형 변환')

if ('false') {
  console.log(123)
}

const n = 1
const o = '1'

// 동등 연산자 (비권장)
console.log(n == o)