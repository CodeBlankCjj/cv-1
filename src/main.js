let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string1 = `
/*
大家好，今天我来给大家画一个会动的太极
*/
#div1 {
  border: 1px solid red;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''
let n = 0


let step = () => {
  setTimeout(() => {
    n += 1
    if (string1[n] === '\n'){
      string2 += '<br>'
    } else if (string1[n] === ' '){
      string2 += '&nbsp'
    } else {
      string2 += string1[n]
    }
    html.innerHTML = string2
    style.innerHTML = string1.substring(0, n)
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string1.length - 1){
      step()
    }
  }, 1)
 }
 step()