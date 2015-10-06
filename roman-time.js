var hours = process.argv[2];
var minutes = process.argv[3];

function printGraphRoman(romanNum) {
    var output = ['', '', '', ''];
    if (romanNum) {
        for (var k = 0; k < romanNum.length; k++) {
            for (var j = 0; j < romanNum[k].length; j++) {
                if (romanNum[k][j] == 'I') {
                    for (var i = 0; i < output.length; i++) {
                        output[i] += '|| ';
                    }
                }
                else if (romanNum[k][j] == 'V') {
                    output[0] += '\\\\      // ';
                    output[1] += ' \\\\    //  ';
                    output[2] += '  \\\\  //   ';
                    output[3] += '    \\/     ';
                }
                else if (romanNum[k][j] == 'X') {
                    output[0] += '\\\\  // ';
                    output[1] += ' \\\\//  ';
                    output[2] += ' //\\\\  ';
                    output[3] += '//  \\\\ ';
                }
                else if (romanNum[k][j] == 'L') {
                    for (var i = 0; i < output.length - 1; i++) {
                        output[i] += '||     ';
                    }
                    output[output.length - 1] += '||____ ';
                }
                else if (romanNum[k][j] == '-') {
                    output[0] += '    ';
                    output[1] += '=== ';
                    output[2] += '=== ';
                    output[3] += '    ';
                }
            }
            if (k == 0) {
                    output[0] += '    ';
                    output[1] += ' o  ';
                    output[2] += ' o  ';
                    output[3] += '    ';
            }
        }
    }
    else {
        output[0] += 'Время';
        output[1] += 'указано';
        output[2] += 'не';
        output[3] += 'верно';
    }
    for (var i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
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
    var result = [];
    var hoursInt = parseInt(hours);
    var minutesInt = parseInt(minutes);
    if (isCorrectHours(hoursInt) && isCorrectMinutes(minutesInt)) {
        result[0] = getRoman(hoursInt);
        result[1] = getRoman(minutesInt);
    }
    else {
        return null;
    }
    return result;
}

printGraphRoman(getResult(hours, minutes));