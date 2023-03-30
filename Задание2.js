1
function sumOfCubes(arr) {
    let sum = 0

    for(let x of arr){
        sum += x ** 3
    }

    return sum
}

console.log(sumOfCubes([1, 2, 3]));

2
function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length)

    return arr
}

console.log(sortByLength(['a', 'ccc', 'dddd', 'bb']));

3
function highestDigit(num) {
    num = String(num)
    num = num.split('')
    num = num.map(item => Number(item))
    return Math.max(...num)
}

console.log(highestDigit(329));

4
function getOnlyEvens(arr){
    arr = arr.filter(item => item % 2 == 0)

    return arr
}

console.log(getOnlyEvens([1, 2, 3, 4, 5, 6, 7]));

5
function countVowels(str){
    let vowels = ['a', 'o', 'u', 'e', 'i']

    let count = 0


    str = str.split('')
    for(let x of str){
        if(vowels.includes(x)) count += 1
    }

    return count
}

console.log(countVowels('apple'));