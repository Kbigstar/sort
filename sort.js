function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
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
