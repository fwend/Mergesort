const a = [2,1,8,4,9,6,7,3,5,0];

const merge = (input, scratch, indexLeft, indexRight, upperBound) => {

    let i = 0;
    let lowerBound = indexLeft;
    const mid = indexRight - 1;
    const len = upperBound - lowerBound + 1;

    while (indexLeft <= mid && indexRight <= upperBound) {

        if (input[indexLeft] < input[indexRight]) {
            scratch[i++] = input[indexLeft++];

        } else {
            scratch[i++] = input[indexRight++];
        }
    }

    while (indexLeft <= mid) {
        scratch[i++] = input[indexLeft++];
    }

    while (indexRight <= upperBound) {
        scratch[i++] = input[indexRight++];
    }

    for (i = 0; i < len; i++) {
        input[lowerBound + i] = scratch[i];
    }
};

const mergeSortR = (input, scratch, lower, upper) => {

    if (lower === upper) {
        return;
    }
  
    const mid = Math.floor((lower + upper) / 2);

    mergeSortR(input, scratch, lower, mid);
    mergeSortR(input, scratch, mid + 1, upper);

    merge(input, scratch, lower, mid + 1, upper);
};

const mergeSort = (input) => {  
    const scratch = Array(input.length);
    mergeSortR(input, scratch, 0, input.length - 1);
};

mergeSort(a);
console.log(a);
