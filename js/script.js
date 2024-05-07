document.getElementById("box1").addEventListener("click", function() {
    alert("Event for Box 1");
});

document.getElementById("box2").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgreen";
});

document.getElementById("box3").addEventListener("mouseout", function() {
    this.innerHTML = "Mouse out";
});

document.getElementById("box4").addEventListener("dblclick", function() {
    this.style.backgroundColor = "lightcoral";
    this.innerHTML = "Double click";
});

document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const resultInput = document.getElementById('result');

    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    const resultInput2 = document.getElementById('result2');

    const input5 = document.getElementById('input5');
    const input6 = document.getElementById('input6');
    const resultInput3 = document.getElementById('result3');

    const input7 = document.getElementById('input7');
    const input8 = document.getElementById('input8');
    const resultInput4 = document.getElementById('result4');

    function updateResult() {
        const num1 = parseFloat(input1.value) || 0;
        const num2 = parseFloat(input2.value) || 0;
        const sum = num1 + num2;
        resultInput.value = sum;
    }

    function updateResult2() {
        const num1 = parseFloat(input3.value) || 0;
        const num2 = parseFloat(input4.value) || 0;
        const difference = num1 - num2;
        resultInput2.value = difference;
    }

    function updateResult3() {
        const num1 = parseFloat(input5.value) || 0;
        const num2 = parseFloat(input6.value) || 0;
        const product = num1 * num2;
        resultInput3.value = product;
    }

    function updateResult4() {
        const num1 = parseFloat(input7.value) || 0;
        const num2 = parseFloat(input8.value) || 0;
        if (num2 !== 0) {
            const division = num1 / num2;
            resultInput4.value = division;
        } else {
            resultInput4.value = "Cannot divide by zero";
        }
    }

    function validateInput(input) {
        input.value = input.value.replace(/[^0-9.]/g, ''); 
    }

    input1.addEventListener('input', function() {
        validateInput(input1);
        updateResult();
    });
    input2.addEventListener('input', function() {
        validateInput(input2);
        updateResult();
    });

    input3.addEventListener('input', function() {
        validateInput(input3);
        updateResult2();
    });
    input4.addEventListener('input', function() {
        validateInput(input4);
        updateResult2();
    });

    input5.addEventListener('input', function() {
        validateInput(input5);
        updateResult3();
    });
    input6.addEventListener('input', function() {
        validateInput(input6);
        updateResult3();
    });

    input7.addEventListener('input', function() {
        validateInput(input7);
        updateResult4();
    });
    input8.addEventListener('input', function() {
        validateInput(input8);
        updateResult4();
    });

    updateResult();
    updateResult2();
    updateResult3();
    updateResult4();
});
