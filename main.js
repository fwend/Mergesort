const a = [2,1,8,4,9,6,7,3,5,0];

const merge = (left, right) => {

    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    if (indexRight < right.length) {
        result = result.concat(right.slice(indexRight));
        
    } else if (indexLeft < left.length) {
        result = result.concat(left.slice(indexLeft));
    }   

    return result;
};

const mergeSort = (input) => {
 
    if (input.length < 2) {
        return input;
    }
  
    const half = Math.ceil(input.length / 2);
    const m1 = mergeSort(input.slice(0, half));
    const m2 = mergeSort(input.slice(half));
    return merge(m1, m2);
};

console.log(mergeSort(a));
