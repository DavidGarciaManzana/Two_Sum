interface MyObject {
    [key: number]: any;
    // otras propiedades y métodos aquí
  }

let twoSum = (nums: number[], target: number): number[] => {
    // console.log("aaa")
    let myObj: MyObject = {};
    for (let i = 0; i < nums.length; i++) {
        // console.log("bbb")
        myObj[nums[i]] = i
        console.log(myObj)
        // let newArray = nums.slice();
        // newArray.splice(i, 1)
        // if (newArray.includes(target - nums[i])) {
        //     // console.log(newArray)
        //     if (target - nums[i] == nums[i]) {
        //         return [i, nums.indexOf(target - nums[i], i + 1)]
        //     } else {
        //         return [i, nums.indexOf(target - nums[i])]
        //     }
        // }
    }
    return []
}

// Testing
// console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
// console.log(twoSum([3, 2, 4], 6)) //[1,2]
twoSum([3, 3], 6) //[0,1]
