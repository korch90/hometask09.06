// Напишіть функцию arrCopy(arr), яка копією масив не змінюючи оригінал arr.
// •	const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// •	const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
// ------------------------------------------------------------------------------------------
// Завдання 2
// Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// •	const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’]. 
// •	const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’]. 
// ------------------------------------------------------------------------------------------
// Завдання 3
// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// •	const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 
// •	const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8]. 
// ------------------------------------------------------------------------------------------
// Завдання 4
// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// •	const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 
// •	const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 

// Task 1
//  let arr=[]
// function arrCopy(arr){
// return new Array(arr)
// }
// const arr1 = arrCopy([1,2,3])
// const arr2 = arrCopy([1,2,3,[10,20]])

// Task2

// function arrToString(arr){
//    return arr.map(el=>el.toString())
//    }
// const arr1 = arrToString([1,2,3])
// const arr2 = arrToString([10,200,3333])

// Task 3
// function getLength(arr){
// return arr.map(el=>el.length)
// }
// const arr1 = getLength(["Ivan","Pavlo","Ira"]) 
// const arr2 = getLength(['Oleksiy','Andriana'])

// Task4
// function removeDuplicates(arr){
//     let arrSimple=[]
// for(let i=0; i<arr.length;i++){
//     if(arrSimple.includes(arr[i])){
//         continue}
//         else {
//             arrSimple.push(arr[i])
//         }
//     }
//     return arrSimple
// }
// const arr1 = removeDuplicates(['html','css','html','js'])
// const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss'])


// Завдання 1. forEach

// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 2. Map

// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.	
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 3. Every

// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 4. Some

// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 5. Filter

// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 6. Reduce

// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 7. Любим методом

// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

// Task 1
// let arr = [5, 6, 7, 8, 9];
// function ShowSumm(arr){
//    let sum= arr.reduce(function(total, amount){
//         return total+amount 
//     })
//     console.log(sum)
// }
// ShowSumm([5, 6, 7, 8, 9])

// Task2
// let arr = [5, 6, 7, 8, 9];
// function ShowSquear(arr){
//    let arrSquare=arr.map(el=>el*el)
//     console.log(arrSquare)
// }
// ShowSquear([5, 6, 7, 8, 9])

// Task 3

// let arr = [{name: 'Ivan', country: 'Ukraine'},
//       {name: 'Petro', country: 'Ukraine'},
//       {name: 'Miguel', country: 'Cuba'}
//          ]
//          function ShowIf(){
//              if(arr.every(el=>el.country=="Ukraine"))
//              console.log("yes")
//              else{
//                  console.log("no")
//              }
//          }
//          ShowIf(arr)

// Task 4

// let arr = [{name: 'Ivan', country: 'Ukraine'},
//       {name: 'Petro', country: 'Ukraine'},
//       {name: 'Miguel', country: 'Cuba'}
//          ]
//          function ShowIf(){
//              if(arr.some(el=>el.country=="Ukraine"))
//              console.log("yes")
//              else{
//                  console.log("no")
//              }
//          }
//          ShowIf(arr)
// Task 5

// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// function ShowOnlySubArray(arr){
// let newArr=arr.filter(function(a){
//     return Array.isArray(a)
// })
// console.log(newArr)
// }
// ShowOnlySubArray(arr)

// Task 6/1

// let arr = [1, 2, 5, 0, 4, 5, 6];

// function ShowSummBeforeZero(arr) {
//     let newArr = []
//     let sum
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i] == 0) {
//             newArr.push(arr[i])

//         } else {
//             sum = newArr.reduce(function (total, amount) {

//                 return total + amount
//             })
//             break
//         }
//     }

//     console.log(sum)
// }
// ShowSummBeforeZero(arr)


// Task 6/2
// function ShowIndex(arr) {
//     let r=[]
// let x=arr.reduce(function(a=0,b,c){
//     if(a<=10){
//     return a+b
// }
// else {
//     r.push(c)
//     return r
// } 
// })
// return r[0]
// }
// console.log(ShowIndex([1, 2, 3, 0, 4, 5, 6]))



// Task 7

// function ShowPositiveSquare(arr){
// let x=arr.filter(el=>el>0)
// let y=x.map(el=>Math.sqrt(el))
// return y
// }
// console.log(ShowPositiveSquare([1, -2, 3, 0, 4, -5, 6, -11]))