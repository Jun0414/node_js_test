// 문자 데이터
// string mdn 검색

const { forEach } = require("lodash")

// String.prototype.indexOf()
// 일치하는 값이 없으면 -1 반환

// 동일 표현
// const firstIndex = 'Hello world!'.indexOf('world')
// console.log(firstIndex)
const firstIndex = 'Hello world!'
console.log(firstIndex.indexOf('world'))


// 길이 측정
const str = '0123'
console.log(str.length)


// 슬라이싱
const str1 = 'Hello world!'
console.log(str1.slice(0, 3))


// 문자 대체
const str2 = 'Hello world!'
console.log(str2.replace('world', 'bong'))


// 원하는 문자열 찾기
const str3 = 'common@naver.com'
console.log(str3.match(/.+(?=@)/)[0]) // 정규표현식


// 맨 앞, 맨 뒤 공백문자 제거
const str4 = '    Hello world  '
console.log(str4.trim())

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 숫자 데이터
// math mdn 검색

const pi = 3.14159265358979
console.log(pi)

// 소숫점 자릿수 지정 (str로 저장된다)
const str5 = pi.toFixed(2)
console.log(str5)
console.log(typeof str5) // string

// 문자를 정수 또는 실수로 변환
const integer = parseInt(str5)
const float = parseFloat(str5)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float) // number number


// math

// 절대값
console.log('abs: ', Math.abs(-12)) // 12
// 최소값
console.log('min: ', Math.min(2, 8)) // 2
// 최대값
console.log('max: ', Math.max(2, 8)) // 8
// 올림
console.log('ceil: ', Math.ceil(3.14)) // 4
// 내림
console.log('floor: ', Math.floor(3.14)) // 3
// 반올림
console.log('round: ', Math.round(3.14)) // 3
// 무작위 숫자
console.log('random: ', Math.random())

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 배열 데이터
// array mdn 검색

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']


// .length : 길이 반환

console.log(numbers.length)
console.log(fruits.length)
console.log([1, 2].length)

console.log([].length)


// .concat : 이어 붙이기 (원본은 유지, 새로운 배열 만들어 줌)

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)


// forEach : 아이템의 개수만큼 반복

fruits.forEach(function (item, index, array) {
  console.log(item, index, array)
})


// .map : 배열의 아이템 개수만큼 원하는 형식으로 반환

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
// forEach는 따로 반환하는 값이 없음
console.log(a)

const b = fruits.map(function (fruit, index) {
  // forEach와 차이점
  return `${fruit}-${index}`
  // 객체로 반환도 가능
  // return {
  //   id: index,
  //   fruit_name: fruit
  // }
})
// 화살표 함수로 축약 (간결함)
const ab = fruits.map((fruit, index) => ({
  id: index,
  fruit_name: fruit
}))
console.log(ab)


// .filter : 조건을 만족하는 아이템을 반환

// 불린 데이터로 반환
const c = numbers.map(number => number < 3)
console.log(c)

// 아이템을 반환
const d = numbers.filter(number => number < 3)
console.log(d)


// .find .findIndex : 원하는 첫번째 아이템 반환, 인덱스 번호 반환

const e = fruits.find(fruit => /^B/.test(fruit))
console.log(e)

const f = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(f)


// .includes : 아이템이 포함되어있는지 불린 데이터 반환

const g = numbers.includes(3)
console.log(g)

const h = numbers.includes('bong')
console.log(h)


// .push .unshift : 마지막에 추가, 처음에 추가
// 원본 수정됨

// 마지막에 추가
numbers.push(5)
console.log(numbers)

// 맨 처음에 추가
numbers.unshift(0)
console.log(numbers)


// .reverse : 순서를 뒤집음
// 원본 수정됨

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)


// .splice(인덱스부터, 몇개 삭제, 그리고 삽입 데이터) : 배열 안의 아이템 삭제 및 추가
// 원본 수정됨

numbers.splice(2, 1)
console.log(numbers)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 객체 데이터
// object mdn 검색

const userAge = {
  // key: value
  name: 'Bong',
  age: 85
}
const userEmail = {
  name: 'Bong',
  email: 'naver@naver.com'
}

// Object.assign(객체에, 객체 아이템 추가) : concat의 객체 버전
// 원본 수정됨

// 원본 수정 없이 사용하기
const target1 = Object.assign({}, userAge, userEmail)

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
// 참조하므로 동일
console.log(target === userAge)

const aa = {k: 123}
const bb = {k: 123}
// 값만 같을뿐 참조 안함
console.log(a === b)


// Object.keys : 객체가 갖고있는 key들을 반환

const keys = Object.keys(userEmail)
console.log(keys)

console.log(userEmail['email'])

// key를 이용해 value만 추출
const values = keys.map(key => userEmail[key])
console.log(values)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 구조 분해 할당 (Destructuring assignment)

// 객체 데이터
const info = {
  name: 'Bong',
  age: 29,
  email: 'naver@naver.com'
}
// 구조 분해 할당
const {name: new_name, age, email = 'gmail@gmail.com', address} = info

console.log(`사용자의 이름은 ${new_name}입니다.`)
console.log(`${new_name}의 나이는 ${age}세 입니다.`)
console.log(`${new_name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

// 배열 데이터
const fruits2 = ['Apple', 'Banana', 'Cherry']
// 구조 분해 할당
// Cherry만 받고싶을때
// const [,, o] = fruits2
const [z, y, x, o] = fruits2
console.log(z, y, x, o)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 전개 연산자 (Spread)

const fruits3 = ['Apple', 'Banana', 'Cherry']
console.log(fruits3)
// 전개 연산자
// console.log('Apple', 'Banana', 'Cherry')
console.log(...fruits3)

// 축약형 동일함
// const toObject = (a, b, c) => ({a, b, c})
function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits3))

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 데이터 불변성 (Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function

// 원시 데이터
let at = 1
let bt = 4
console.log(at, bt, at === bt)
bt = at
console.log(at, bt, at === bt)
at = 7
console.log(at, bt, at === bt)
// 이미 선언한 적이 있는 bt의 메모리 주소를 참조
// 위에서 bt가 at를 할당 받아 1을 저장하고 있으므로
let ct = 1
console.log(bt, ct, bt === ct)


// 참조형 데이터
let aat = {k: 1}
let bbt = {k: 1}
console.log(aat, bbt, aat === bbt)
aat.k = 7
bbt = aat
console.log(aat, bbt, aat === bbt)
aat.k = 2
// 객체 참조는 참조하는 bt의 값도 변경시킨다
console.log(aat, bbt, aat === bbt)
let cct = bbt
console.log(bbt, cct, bbt === cct)
aat.k = 9
console.log(aat, bbt, cct, aat === cct)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 얕은 복사 (Shallow copy), 깊은 복사 (Deep copy)
import _ from 'lodash'

const info1 = {
  name: 'Bong',
  age: 29,
  emails: ['naver@naver.com']
}

// 얕은 복사 : 메모리 참조 (한쪽에서 변경하면 참조한 것에도 영향)
const copyInfo1 = info1
console.log(copyInfo1 === info1)

info1.age = 19
console.log('info1 ', info1)
console.log('copyInfo1 ', copyInfo1)

// 얕은 복사 : 객체(객체 주소는 다르므로 다른 객체)는 다르나 내용은 같은 메모리 참조 (한쪽에서 변경하면 참조한 것에도 영향)
const copyInfo2 = Object.assign({}, info1)
const copyInfo3 = {...info1}
console.log(copyInfo2 === info1)
console.log(copyInfo3 === info1)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ내용 구분ㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

info1.emails.push('daum@daum.net')
console.log(info1.emails === copyInfo3.emails)
console.log('info1 ', info1)
console.log('copyInfo3 ', copyInfo3)


// 깊은 복사 : 완전히 다른 객체 (한 객체를 수정해도 다른 객체에 영향 없음)
// lodash 검색 clone
const copyInfo4 = _.cloneDeep(info1)
console.log(copyInfo4 === info1)

info1.age = 9
console.log('info1 ', info1)
console.log('copyInfo4 ', copyInfo4)

info1.emails.push('gmail@gmail.com')
console.log(info1.emails === copyInfo4.emails)
console.log('info1 ', info1)
console.log('copyInfo4 ', copyInfo4)