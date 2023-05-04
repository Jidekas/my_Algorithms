function transpose(arr){
    let res = []
    let row = arr.length;
    let col = arr[0].length;

    for(let i=0; i < col; i++){
        res.push([])
    }
       

    console.log(arr[2][2]) 
    console.log(res) 
}

let a = transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ])
console.log(a)