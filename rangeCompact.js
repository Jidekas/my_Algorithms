
// const rangeCompact = nums => {
//     let resArr = []
//     let res2 = []
//     let result = ''
//     resArr.push([nums[0]])
  
    
//     //console.log(lastNum + 1)
//     for(let i=1; i<nums.length; i++){   
//     let lastArr = resArr[resArr.length -1]
//     let lastNum = lastArr[lastArr.length -1]
   
      
//       if(lastNum + 1 === nums[i]){
//         lastArr.push(nums[i])
//       }else{
//         resArr.push([nums[i]])
//       }
//     }
    
//     for(i of resArr){
      
//       if(i.length > 2){
//         let first = i[0]
//         let last = i[i.length -1]
//         let str = first + "-" + last
//         res2.push(str)   
//       } else{
//         res2.push(...i)
//       }  
      
//     }
    
  
//     result = res2.join(',')
    
     
//     return result;
//   };



const rangeCompact = nums => {
    nums = nums.map((v, i) =>
        nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? "-" : v
    
      );
      console.log(nums)
      let res = nums.filter((v, i) => v != "-" || nums[i - 1] != "-"
      )

      console.log(res)
        
      const value = res.join(",").replace(/,-,/g, "-");

        return value
    }

console.log(rangeCompact([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))