// 함수로 만드는 클래스

function User(first, last) {
  this.first = first
  this.last = last
}
// 객체 데이터마다 각각 들어가지 않고 한번만 만들어 메모리 관리에 효율적
User.prototype.getFullName = function () {
  return `${this.first} ${this.last}`
}

// 생성자 함수 : 함수명 앞에 new를 붙여준다
// 인스턴스 : 새로운 객체로 만들어진 변수

// 생성자 함수와 동일한 표현
// cosnt bong = {}
const bong = new User('WonJun', 'Bong')
const park = new User('me', 'Park')
const choi = new User('young', 'Choi')


console.log(bong.getFullName())
console.log(park)
console.log(choi)

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 함수 범위에서 this 정의

const bbong = {
  name: 'bbong!',
  // 동일한 표현
  // normal() {}
  normal: function () {
    console.log(this.name) // bbong!
  },
  arrow: () => {
    console.log(this.name) // undefined
  }
}
bbong.normal()
bbong.arrow()

const amy = {
  name: 'Amy',
  normal: bbong.normal, // Amy
  arrow: bbong.arrow // undefined
}
amy.normal()
amy.arrow()

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// ES6 Classes
// 클래스로 만들기

// function User(first, last) {
//   this.first = first
//   this.last = last
// }
// User.prototype.getFullName = function () {
//   return `${this.first} ${this.last}`
// }

class User1 {
  // 생성자 만들때 인수 받아오는 부분
  constructor(first, last) {
    this.first = first
    this.last = last
  }
  getFullName() {
    return `${this.first} ${this.last}`
  }
}

// class 상속

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
// 새로운 생성자를 통해 만듬
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

// 상속
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('내 자전거', 2)
const daughtersBicycle = new Bicycle('세발 자전거', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('내 자동차', 4, true)
const daughtersCar = new Car('딸 자동차', 4, true)
console.log(myCar)
console.log(daughtersCar)

