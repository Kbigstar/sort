function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (arr[min] !== arr[i]) {
            swap(arr, i, min);
        }
    }

    return arr;
}

  
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let targetIdx = i;
      
      for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
          targetIdx = j;
          arr[j + 1] = arr[j];
      }
      arr[targetIdx] = currentVal;
  }
  
  return arr;
}

  function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}
