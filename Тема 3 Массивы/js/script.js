const result1 = document.querySelector('#resultFirstExecise')
const result2 = document.querySelector('#resultSecondExecise')
const result3 = document.querySelector('#resultThirstExecise')
const result4 = document.querySelector('#resultFourExecise')
const result5 = document.querySelector('#resultFiveExecise')
const result6 = document.querySelector('#resultSixExecise')
const result7 = document.querySelector('#resultSevenExecise')
const result8 = document.querySelector('#resultEightExecise')
const result9 = document.querySelector('#resultNineExecise')

const number1 = document.querySelector('#inputNumb1')
const number2 = document.querySelector('#inputNumb2')

function sumArray() {
    const array1 = [4, 6, 16, 73, 5];
    let sum = 0;
    array1.forEach(function(element){
        sum += element;
    });
    return "Массив:"+array1+" | Результат sumArray: "+sum 
}
function getAboveZero() {
    let array1 = [1, -3, -2, 4, 10];
    
    let numbersAbove = array1.filter(function(number){
        return number>0
    })
    return "Массив:"+array1+" | Результат getAboveZero: "+numbersAbove  
}
function getPonies(arg) {
    let array1 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'];
    let poniName = arg;
    let opredPoni = array1.find(function(poni){
        return poni==poniName
    })
    return "| Результат getPonies: "+opredPoni
    
     
}
function isTxIncluded() {
    let array1 = ["0xaea0","0x8f80", "0xf3ad", "0x17ec"];
    let tx = "0x9e0a";
    return "| Результат isTxIncluded: "+array1.includes(tx)
}
function getSizes() {
    const array1 = ["Moscow","Coding", "School"];
    const sizesArr = array1.map(function(razmer){
        return razmer.length
    })
    return "Массив: "+array1+" | Результат getSizes: "+sizesArr
}
function getWithSpaces(){
    const strings = ["Moscow","never", "sleep"];
    
    let sum = strings.join(" ");
    return "Массив: "+strings+" | Результат getWithSpaces: "+sum+", "+strings.join("").length
}
function getEpisodes(){
    const animeBlock = {
        title: "One piece",
        episodes: 1018
    }
    return "Аниме "+animeBlock.title+" включает в себя "+animeBlock.episodes+" серий"
}
const triple = (number) => {
    return "|Результат стрелочной функции triple: "+number*3
}
const getAvgGlucose = () => {
    const array = [5.4, 8.1, 6.3, 4.9];
    let sum=0;
    array.forEach(numb => {
        sum = sum + numb 
    })
    sum = sum / array.length
    return "Массив: "+array+" | Результат getAvgGlucose: " + Math.round(sum * 10) / 10
}

result1.textContent = sumArray();
result2.textContent = getAboveZero();
number1.addEventListener("input", () => {
    result3.textContent = getPonies(number1.value)
})
result4.textContent = isTxIncluded();
result5.textContent = getSizes();
result6.textContent = getWithSpaces();
result7.textContent = getEpisodes();
number2.addEventListener("input", () => {
    result8.textContent = triple(number2.value)
})
result9.textContent = getAvgGlucose();

