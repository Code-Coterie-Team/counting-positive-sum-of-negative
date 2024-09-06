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
const arr = [countPositives,sumNegative];
    return arr
    }

let result = countPositivesSumNegatives([1]);
console.log(result);