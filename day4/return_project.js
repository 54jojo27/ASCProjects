function combineStrings(s1, s2) {
    let result = s1 + s2;
    return result
}

let seq1 = combineStrings ("ABC", "DEF")
let seq2 = combineStrings ("guilty", "gear!")
let seq3 = combineStrings ("ramlethal", "valentine!")
let seq4 = combineStrings ("mist", "finer!")

console.log(seq1)
console.log(seq2)
console.log(seq3)
console.log(seq4)

function fun1(e1, e2, e3) {
    let arr = []
    arr.push(e1)
    arr.push(e2)
    arr.push(e3)

    return arr
}

let a1 = fun1('a', 'b', 'c')
let a2 = fun1('johnny', 'ram', 'dizzy')
let a3 = fun1(55, 100, -7
)
console.log(a1)
console.log(a2)
console.log(a3)

function average(num1, num2) {
    let total = sum(num1, num2)
    let average = total / 2
    return average
}

function sum(num1, num2) {
    return num1 + num2
}

let b1 = average(1, 4)
let b2 = average(10, 20)
let b3 = average(5, 5)

console.log(b1)
console.log(b2)
console.log(b3)

function checkAnswerAdd(numb1, numb2, answer) {
    if (numb1 += numb2 == true) {
        console.log(true)
    }
    else if (numb1 += numb2 == false){
        console.log(false)
    }
    return
}

function checkAnswerSubt(numb1, numb2, answer)  {
    if (numb1 -= numb2 == true) {
        console.log(true)
    }
    else if (numb1 -= numb2 == false) {
        console.log(false)
    }
}
let ans1 = checkAnswerAdd(3, 5, "+", 8)
let ans2 = checkAnswerSubt(4, 2, "-", 2)
let ans3 = checkAnswerAdd(9, 8, "+", 17)
let ans4 = checkAnswerSubt(7, 9, "-", -2)

let array = [0, 2, 7, 4, 6, 8, 6]
function oddNumberCatcher(array) {
    if (array)[2] % 2 == 0; {
    return array[2]
    }
}
console.log(array[2])