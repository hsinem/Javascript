//Bubble sort
function bubbleSort(arr){ 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

//insertion sort
let insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};


//Merge sort
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(arr) {
  const half = arr.length / 2

  if(arr.length < 2){
    return arr 
  }
  
  const left = arr.splice(0, half)
  return merge(mergeSort(left),mergeSort(arr))
}

arr = [4, 8, 7, 2, 11, 1, 3];

console.log(insertionSort(arr));
console.log(bubbleSort(arr));
console.log(mergeSort(arr));
