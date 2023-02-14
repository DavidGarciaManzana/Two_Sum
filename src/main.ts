let twoSum = (nums: number[], target: number): number[] => {
    let result: number[] = [];
    nums.forEach((number1: number, index1: number) => {
        nums.slice(index1 + 1).forEach((number2: number, index2: number) => {
            if (number1 == number2) {
                if (number1 + number2 == target) {
                    result.push(index1, nums.indexOf(number1, index2 + 1))
                }
            } else {
                if (number1 + number2 == target) {
                    result.push(index1, nums.indexOf(number2))
                }
            }
        })
    })
    return result
}

// Testing
// console.log(twoSum([2,7,11,15],9)) //[0,1]
// console.log(twoSum([3,2,4],6)) //[1,2]
// console.log(twoSum([3,3],6)) //[0,1]
