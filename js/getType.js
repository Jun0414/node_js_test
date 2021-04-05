// export : 외부에서 접근 가능하게 하기 위함
// default : 접근할 때 기본으로 접근할 함수로 지정

export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}