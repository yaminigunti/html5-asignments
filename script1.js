function* f1(arr, n) { 
    count = 0; 

    for(ele of arr) {
        if ((ele % n) == 0) { 
            yield ele; 
            count++; 
        } 
    } 
   
    return  count;     
} 

arr = [10, 20, 33, 45, 58]; 

stages = f1(arr, 5); 
shallContinue = true; 
while (shallContinue) { 
    currStage = stages.next(); 
    console.log(currStage.value); 
    shallContinue = !currStage.done; 
}