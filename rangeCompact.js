
//solution1
// function rangeCompact(nums){
//   let resArr = []
//   let result = []
//   resArr.push(nums[0])

//   //replace consecutive numbers with a '-'
//   for(let i =1; i<nums.length; i++){
//     if((nums[i]-nums[i-1] === 1) && (nums[i+1] - nums[i] === 1)){
//       resArr.push('-')
//     } else{
//       resArr.push(nums[i])
//     }
//   }
  
//   //filter out excess '-'
//     let res = resArr.filter((a,i) => (a !== '-' || resArr[i+1] !== '-'))

//   // assemble the resut structure in an array.  
//     for(let i=0; i<res.length; i++){
//       if(res[i] !== '-' && res[i-1] !== '-' && res[i+1] !== '-' ){
//         result.push(`${res[i]},`)
//       }

//       if(res[i] === '-'){
//         result.push(`${res[i-1]}-${res[i+1]},`)
//       }
//     }

//    //join the structured result array and return
//     return result.join('')
//   }



//solution 2

const rangeCompact = nums => {
   //replace consecutive numbers with a '-'
    nums = nums.map((v, i) =>
        nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? "-" : v
    
      );
      console.log(nums)
      //filter out excess '-'
      let res = nums.filter((v, i) => v != "-" || nums[i - 1] != "-"
      )

      //join the filterd array with a ',' betwenn each character. & replace ,-, with -  
      const value = res.join(",").replace(/,-,/g, "-");

        return value
    }

console.log(rangeCompact([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))