document.getElementById('sort_more').onclick = function() {
    var numbers = [312, 41, 132, 12, 32, 17, 1, 22];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            };
        };
    };
    document.getElementById('out').innerHTML = numbers;
};

document.getElementById('sort_small').onclick = function() {
    var numbers = [312, 41, 132, 12, 32, 17, 1, 22];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            };
        };
    };
    document.getElementById('out').innerHTML = numbers;
};

document.getElementById('none').onclick = function() {
    var numbers = [312, 41, 132, 12, 32, 17, 1, 22];

    document.getElementById('out').innerHTML = numbers;
};