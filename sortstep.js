let arrSelection = [5, 4, 3, 2, 1]; // 선택 정렬 예시 배열
let iSelection = 0; // 선택 정렬의 현재 위치

let arrInsertion = [5, 4, 3, 2, 1]; // 삽입 정렬 예시 배열
let iInsertion = 1; // 삽입 정렬의 현재 위치

function sortSelectionStep() {
    if (iSelection < arrSelection.length) {
        let min = iSelection;
        for (let j = iSelection + 1; j < arrSelection.length; j++) {
            if (arrSelection[min] > arrSelection[j]) {
                min = j;
            }
        }
        if (arrSelection[min] !== arrSelection[iSelection]) {
            [arrSelection[iSelection], arrSelection[min]] = [arrSelection[min], arrSelection[iSelection]];
        }
        iSelection++;
    }
    document.getElementById("selectionOutput").innerText = arrSelection.toString(); // 웹페이지에 정렬 상태 출력
    console.log(arrSelection); // 콘솔에 정렬 상태 출력
}

function sortInsertionStep() {
    if (iInsertion < arrInsertion.length) {
        let currentVal = arrInsertion[iInsertion];
        let j = iInsertion - 1;
        while (j >= 0 && arrInsertion[j] > currentVal) {
            arrInsertion[j + 1] = arrInsertion[j];
            j--;
        }
        arrInsertion[j + 1] = currentVal;
        iInsertion++;
    }
    document.getElementById("insertionOutput").innerText = arrInsertion.toString(); // 웹페이지에 정렬 상태 출력
    console.log(arrInsertion); // 콘솔에 정렬 상태 출력
}

let arrBubble = [5, 4, 3, 2, 1]; // 버블 정렬 예시 배열
let iBubble = 0; // 버블 정렬의 현재 위치


function sortBubbleStep() {
    if (iBubble < arrBubble.length - 1) {
        for (let j = 0; j < arrBubble.length - 1 - iBubble; j++) {
            if (arrBubble[j] > arrBubble[j + 1]) {
                [arrBubble[j], arrBubble[j + 1]] = [arrBubble[j + 1], arrBubble[j]];
            }
        }
        iBubble++;
    }

    document.getElementById("bubbleOutput").innerText = arrBubble.toString(); // 웹페이지에 정렬 상태 출력

}
