// 문자 데이터
// string mdn 검색

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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

