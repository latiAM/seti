
const number1 = document.querySelector('#inputNumb1')
const number2 = document.querySelector('#inputNumb2')
const number21 = document.querySelector('#inputNumb21')
const number3 = document.querySelector('#inputNumb3')
const number4 = document.querySelector('#inputNumb4')
const number5 = document.querySelector('#inputNumb5')
const result1 = document.querySelector('#resultFirstExecise', '#resultSecondExecise')
const result2 = document.querySelector('#resultSecondExecise')
const result3 = document.querySelector('#resultThirstExecise')
const result4 = document.querySelector('#resultFourExecise')
const result5 = document.querySelector('#resultFiveExecise')


function getAge(arg1) {
    let sum = Number.parseInt(arg1,10);
    sum = sum+1;
    return "Результат getAge: "+sum 
}
function getRemainder(arg2, x) {
    let x1 = Number.parseInt(arg2,10);
    let x2 = Number.parseInt(x,10);
    let sum = x1%x2;
    return "Результат getRemainder: "+sum 
}
function faceControl(arg3) {
    let sum = Number.parseInt(arg3,10);
    if(sum>=18) return "Результат faceControl: Welcome!"
    else return "Результат faceControl: ОТКАЗ!"
     
}
function getNextAge(arg4) {
    if (!arg4){

        let sum = 0;
        return "Результат getNextAge: "+sum
    }
    else {
        let sum = Number.parseInt(arg4,10);
        sum=sum+1;
        return "Результат getNextAge: "+sum 
    }
}
function canRide(arg5) {
    //let sum = Number.parseInt(arg5,10);
    return "Результат canRide: "+(arg5>=140)
}
number1.addEventListener("input", () => {
    result1.textContent = getAge(number1.value)
})
number2.addEventListener("input", () => {
    
})
number21.addEventListener("input", () => {
    result2.textContent = getRemainder(number2.value, number21.value)
})
number3.addEventListener("input", () => {
     result3.textContent = faceControl(number3.value)
})
number4.addEventListener("input", () => {
    result4.textContent = getNextAge(number4.value)
})
number5.addEventListener("input", () => {
    result5.textContent = canRide(number5.value)
})