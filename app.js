/* let num = 42;
 let firstName = 'базар'
 const  isProgrammer = true
plus.onclick = function () {
    action = '+'
    
console.log(action)
  alert('imgay')
 console.log('imgayyy')
 console.log(num + 10)
 console.log(num / 10)
 console.log(num * 10)
 console.log(num - 10)

 const  fullName = firstName + 'у джексон'
 console.log(fullName)

  console.log(typeof summ)
  resultElement.textContent = 42
console.log(resultElement.textContent)  



*/


action = '0'


 const resultElement = document.getElementById('result')
 const inp1 = document.getElementById('input1')
 const inp2 = document.getElementById('input2')
 const subm = document.getElementById('subm')
 const plus = document.getElementById('plus')
 const minus = document.getElementById('minus')
 const x = document.getElementById('x')
 const l = document.getElementById('/')
 const fb = document.getElementById('forbolmat');
 const words = document.getElementById('+')
 const bodн = document.getElementById('gay')
 console.log(inp1)
 console.log(inp2)

x.onclick = function () {
    action = '*'}
l.onclick = function () {
    action = '/'}
minus.onclick = function () {
    action = '-'
}
plus.onclick = function () {
    action = '+'
}
words.onclick = function () {
    action = 'w'
}
/*
function compNumbersWithAction (val1, val2, actionSymbol) {
const inp1 = Number(val1.value)
const inp2 = Number(val2.value) 
if (actionSymbol == '+') {
    return val1 + val2
}
else if (actionSymbol == '-') {
    return val1 - val2
}
else if (actionSymbol == '*') {
    return val1 * val2
}
else if (actionSymbol == '/') {
    return val1 / val2
}
}
*/




subm.onclick = function () {
    let summ = 0
    if (action == '*'){
     const summ = '*харкнул в ебучку сане';
      document.body.style.backgroundImage = "";
     resultElement.textContent = summ}
    else if (action == '/'){
     const summ = 'с днем рожденья заебал васяя ЖЕЛАЮ ЧТОБЫ ХУЙ ТЕПЕРЬ НЕ ТОКА ПО ПОНЕДЕЛЬНАМ СТОЯЛ И ВСЕ БЫЛО У ТЕБЯ КРУТО❤️‍🔥❤️‍🔥❤️❤️❤️❤️😘😘😊 Я ТВОЕ ОЧКО IБАЛ ';
     fb.play ();
     document.body.style.backgroundImage = "url('img.jpg')"
     resultElement.textContent = summ}
    else if (action == '-'){
     const summ = 'ВСЕ АБЛЕЗНУЛЕ БОЛМАТУ ЯЕЦА';
     document.body.style.backgroundImage = "";
     resultElement.textContent = summ}
    else if (action == '+') {
     const summ = 'ВСЕ РЕШИЛИ АТСАСАТЬ БАЛМАТУ ЧЛЕН НА ДР';
      document.body.style.backgroundImage = "";
     resultElement.textContent = summ}
     else if (action == 'w') {
        const summ = (inp1.value)+ ' ' + (inp2.value)
         document.body.style.backgroundImage = ""
        resultElement.textContent = summ
     }
      console.log('action =  ' + action + '  and result =  ' + resultElement.textContent + '  color is '+ result.textContent)

} 




    //    resultElement.textcontent = summ
    //printResult(summ)
    //if (action == '+')