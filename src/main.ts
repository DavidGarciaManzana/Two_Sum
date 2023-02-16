function twoSum(nums: number[], target: number): number[] | null {
    //1.-Create an object
    const obj: { [key: number]: number } = {};
    //2.-Create a loop to iterate al the numbers in the array given
    for (let i = 0; i < nums.length; i++) {
        //3.-Create a constant that saves the value of complement,
        //this comes from T=X+Y ---> Y=T-X (X being the current i value)
        const complement = target - nums[i];
        //4.-If the complement exist in the object then returns 
        //the position of the first ocurrence and the current position
        if (complement in obj) {
            return [obj[complement], i];
        }
        //5.-Here is where the magic happens, once you have checked if the current number exist in the obj
        //if it doesnt you added to it, but you added backwards so the value is the key and the index is the value
        //In this way you simulate a "Hash table" and you can look for the index of an element with its value
        //**Added an if so if the problem repeats the same value in the array you take the first appearence of that number **/
        if(!(nums[i] in obj)){
            obj[nums[i]] = i;
        }
    }

    return null;
}
//****Important to notice, youre adding the numbers one by one and comparing them to the ones that already exist in 
//the object, this is the key to solve this problem using just one loop

// Testing
// console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
// console.log(twoSum([3, 2, 4], 6)) //[1,2]
// console.log(twoSum([3, 3], 6)) //[0,1]
// console.log(twoSum([3,3,1,4,5,5], 10)) //[4,5]
// console.log(twoSum([3,3,1,4,8,5], 11)) //[0,4]