console.log('hello')

let str = 'kai hiwatari'

// console.log(str)
// console.log(str.length)
// console.log(str + ' Hello')
// // console.log(str.replace('hiwa','hyuga'))
// let a = str.split(',')
// console.log(a)


// =================================== Function =======================================


// function addNum(a,b) {
//     return a+b
// }

// let a = Number(prompt('Write 1st number'))
// let b = Number(prompt('Write second number'))

// function greet(name) {
//     let a = `Hi ${name} nice too meet u`
//     console.log(a)
// }


// let greet = (name) =>{
//     let a = `Hello ${name} nice too meet you!!`
//     console.log(a)
// }

// a = greet('Gagan')

// let sum = (a,b)=>{
//    return a+b
// }
// let c = sum(2,3)
// console.log(c)

// console.log(addNum(3,580))





// ===================================== Array ========================================


// let arr=['kai',420,1,2,3,]

// console.log(arr.splice(0,2))
// console.log(arr)


// console.log(arr.join('*'))

// =========================== Objects ============================================

let std = {
    name: 'Kai',
    class: 'btech',
    course: 'cse',
    greet: function(){
        return `hello ${this.name} Welcome to ${this.class}`
    }
}

// console.log(std.course)
console.log(std.name)
console.log(std['class'])
console.log(std)
console.log(`hello everyone please welcome ${std.greet()}`)













