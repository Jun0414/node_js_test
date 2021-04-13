import _ from 'lodash' // From 'node_modules'
import checkType from './getType' // getType.js
import { random, user as bong } from './getRandom' // getRandom.js  // default가 없으면 .js 안의 함수 또는 변수 이름을 {} 안에 그대로 써줘야한다


// 가져오기, 내보내기

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
console.log(bong)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

// lodash 사용법

const userA = [
  {
    userId: '1',
    name: 'bong'
  },
  {
    userId: '2',
    name: 'won'
  }  
]
const userB = [
  {
    userId: '1',
    name: 'bong'
  },
  {
    userId: '3',
    name: 'jun'
  }  
]
// concat 중복 제거 안됨
const userC = userA.concat(userB)
console.log('concat', userC)
// .uniqBy(중복있는 배열, 중복 구별할 속성) : 중복 제거 됨 (이미 중복된 배열이 필요)
console.log('uniqBy', _.uniqBy(userC, 'userId'))

// .unionBy(합칠 배열1, 합칠 배열2, ..., 중복 구별할 속성) : 중복 제거 됨 (이미 중복된 배열이 필요 없음)
const userD = _.unionBy(userA, userB, 'userId')
console.log('unionBy', userD)

const users = [
  {
    userId: '1',
    name: 'bong'
  },
  {
    userId: '2',
    name: 'won'
  },
  {
    userId: '3',
    name: 'jun'
  },
  {
    userId: '4',
    name: 'jjang'
  },
  {
    userId: '5',
    name: 'yapp'
  }
]

const foundUser = _.find(users, {name: 'jjang'})
const foundUserIndex = _.findIndex(users, {name: 'jjang'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'jjang'})
console.log(users)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

// Json
import myData from '../myData.json'


console.log(myData)

const user = {
  name: 'Bong',
  age: 29,
  emails: [
    'naver@naver.com',
    'daum@daum.net'
  ]
}
console.log('user', user)

// js의 표현방식을 json의 string표현 방식으로 반환해 준다
const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

// json의 표현방식을 js의 object표현 방식으로 반환해 준다
const obj = JSON.parse(str)
console.log('obj', obj)

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

// Storage
// local storage mdn 검색

const customer = {
  name: 'Bong',
  age: 29,
  emails: [
    'naver@naver.com',
    'daum@daum.net'
  ]
}

// localStorage.setItem(key, value) : 로컬 저장소에 아이템 추가
localStorage.setItem('customer', JSON.stringify(customer))

// localStorage.getItem(key) : 로컬 저장소의 아이템 가져오기
console.log(JSON.parse(localStorage.getItem('customer')))

// localStorage.removeItem(key) : 로컬 저장소의 아이템 삭제
// localStorage.removeItem('customer')

// 로컬 저장소 아이템 수정
const tmp = localStorage.getItem('customer')
const obj_tmp = JSON.parse(tmp)
obj_tmp.age = 19
console.log(obj_tmp)
localStorage.setItem('customer', JSON.stringify(obj_tmp))

// lowdb 검색 (github)
// 손쉽게 localStorage를 다룰 수 있다

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

// 영화검색
// OMDb (사용 가능 : apikey=7035c60c)
// omdb api 검색 (OMDb API - The Open Movie : http://www.omdbapi.com)

// Query String
// 주소?속성=값&속성=값&속성=값& ...

// axios
// 읽기 힘든 JSON파일 형태의 문자열을 정렬해서 보여준다
// axios 검색 (axios github)
// npm install axios

import axios from 'axios'

function fetchMovies() {
  // 요청할때 https:로 요청(http:는 에러날 수도 있음)
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      // Search 부분에서 찾은 영화 하나 출력해보기
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()