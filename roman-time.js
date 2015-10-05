var hours = process.argv[2];
var minutes = process.argv[3];

function getGraphRoman(romanNum) {
    var result = '';
    var output = ['', '', '', ''];
    for (var j = 0; j < romanNum.length; j++) {
        if (romanNum[j] == 'I') {
            for (var i = 0; i < output.length; i++) {
                output[i] += '|| ';
            }
        }
        else if (romanNum[j] == 'V') {
            output[0] += '\\\\      // ';
            output[1] += ' \\\\    //  ';
            output[2] += '  \\\\  //   ';
            output[3] += '    \\/     ';
        }
        else if (romanNum[j] == 'X') {
            output[0] += '\\\\  // ';
            output[1] += ' \\\\//  ';
            output[2] += ' //\\\\  ';
            output[3] += '//  \\\\ ';
        }
        else if (romanNum[j] == 'L') {
            for (var i = 0; i < output.length - 1; i++) {
                output[i] += '||     ';
            }
            output[output.length - 1] += '||____ ';
        }
        else if (romanNum[j] == ':') {
            output[0] += '   ';
            output[1] += 'o  ';
            output[2] += 'o  ';
            output[3] += '   ';
        }
        else if (romanNum[j] == '-') {
            output[0] += '   ';
            output[1] += '===';
            output[2] += '===';
            output[3] += '   ';
        }
        else {
            output[0] += 'Время';
            output[1] += 'указано';
            output[2] += 'не';
            output[3] += 'верно';
            break;
        }
    }
    for (var i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
    return result;
}

function getRoman(arabNum) {
    var initialData = [1, 4, 5, 9, 10, 40, 50];
    var resultData = ['I', 'IV', 'V', 'IX', 'X', 'XL','L'];
    var romanNum = "";
    var count = initialData.length - 1;
    while (arabNum > 0) {
        if (initialData[count] <= arabNum) {
            romanNum += resultData[count];
            arabNum -= initialData[count];
        }
        else {
            count--;
        }
    }
    return romanNum ? romanNum : '-';
}

function isCorrectHours(hoursInt) {
    return (hoursInt || hoursInt == 0) && hoursInt >= 0 && hoursInt <= 23;
}

function isCorrectMinutes(minutesInt) {
    return (minutesInt || minutesInt == 0) && minutesInt >= 0 && minutesInt <= 59;
}

function getResult(hours, minutes) {
    var result;
    var hoursInt = parseInt(hours);
    var minutesInt = parseInt(minutes);
    if (isCorrectHours(hoursInt) && isCorrectMinutes(minutesInt)) {
        result = getRoman(hoursInt) + ':' + getRoman(minutesInt);
    }
    else {
        result = 'Время указано неверно';
    }
    return result;
}

console.log(getGraphRoman(getResult(hours, minutes)));