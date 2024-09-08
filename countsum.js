function countPositivesSumNegatives(input) {
    let countPositives = 0;
    let sumNegative = 0;
    if (input.length === 0)  return [];
    input.forEach(element => {
        if (element > 0){
        countPositives += 1; 
        }
        else if (element < 0){
        sumNegative += element;
        }
    });
let arr = [countPositives,sumNegative];
arr.forEach(element =>{
    if (element == 0){
        arr = [];
    }
})
return arr;
    }

let result = countPositivesSumNegatives([1,3,-4]);
console.log(result);