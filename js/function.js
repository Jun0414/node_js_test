// 화살표 함수
// () => {}  vs  function () {}


// 기본 함수 표현
const double = function (x) {
  return x * 2
}

// 화살표 함수 표현 (1)
const doubleArrow1 = (x) => {
  return x * 2
}
// 화살표 함수 표현 (2)
const doubleArrow2 = (x) => x * 2
// 화살표 함수 표현 (3)
const doubleArrow3 = x => x * 2
// 화살표 함수 표현 (4)
const doubleArrow4 = x => '123'
// 화살표 함수 표현 (5)
const doubleArrow5 = x => [4, 5, 6]
// 화살표 함수 표현 (6)
// 객체 데이터는 ()로 감싸준다
const doubleArrow6 = x => ({ name: 'Bong' })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 즉시실행 함수
// IIFE, Immediately-Invoked Function Expression


// 기본 함수 호출 방법
const a = 7
function double7 () {
  console.log (a * 2)
}
// 즉시 실행함수 에러가 안나려면 위의 실행문 끝에 ;를 필히 붙여줘야한다
double7();

// 즉시 실행 함수 방법
// (함수)()
// (함수())
// 즉시실행 함수 작성시 ;을 붙여주자
(function () {
  console.log(a * 2)
}());


// 호이스팅(Hoistion)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 표현 : const double = function () {}
// 함수 선언 : function double () {}


const b = 7

double8()

function double8 () {
  console.log(a * 2)
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 타이머 함수

// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('Bong!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// 익명 함수를 인수로 받아 원하는 위치에 사용
function timeout(cb) {
  setTimeout(() => {
    console.log('콜백 전!!')
    cb()
  }, 3000)
}

// 함수 호출로 익명 함수를 넘겨준다
timeout(() => {
  console.log('콜백 Done!')
})