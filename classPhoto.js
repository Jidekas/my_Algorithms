
// A class of students want to take group photo. Half the class is wearing blue shirst
// while the other half wears red shirts. Given the hights of students in red shirts 
// and students in blue shirts, you are assemble the class in 2 rows for the
// photograph assuming that all red shirts must be in thesame row and all blue
// shirts must be in thesame row and each student in the row behind is taller than
// the student directly in front of him.
// Also there is always equal number of students in red and blue shirts
// return true if the arrangement is possible and false if it is not for the given inputs.

//classPhotos([5,8,1,3,4],[6,9,2,4,5]) -> true
//classPhotos([6,9,2,4,5],[5,8,1,3,4]) -> true
//classPhotos([5,8,1,3,4],[6,9,2,4,5]) -> false
//classPhotos([5],[5]) -> false
//classPhotos([5],[6]) -> true


function classPhotos(blue,red) {
    let sum1 = 0;
    let sum2 = 0
    blue = blue.sort((a,b)=> a-b)
    red = red.sort((a,b)=> a-b)
     
    for(let i =0; i<blue.length; i++){
      sum1 += blue[i]
    }  
    for(let i of red){
      sum2 += i 
    }
    
      
  if(sum1 > sum2){
    for(let i=0; i<blue.length; i++){
      if(blue[i] <= red[i]){
        return false
      }
    }
  } else{
     for(let i=0; i<red.length; i++){
      if(red[i] <= blue[i]){
        return false
      }
    }
    
  }
        
    return true
    
  }