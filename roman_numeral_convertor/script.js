const button = document.getElementById("btn");
const numberField = document.getElementById("number-input");
const output = document.getElementById("result");

document.querySelector('#dark-toggle').addEventListener('click', toggleDarkTheme);

document.querySelector('#nav-more').addEventListener('click', function() {
    const contentDiv = document.querySelector('#nav-links');
    if (contentDiv.style.maxHeight){
        contentDiv.style.maxHeight = null;
    } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
    }
});

const containsOnlyNumbers = () => {
    const numberValue = numberField.value; // Move this line inside the function
    var numberPattern = /^[0-9]+$/;
    const valid = numberPattern.test(numberValue)
    if (!valid) {
        alert("The input was either empty or it included letters. Only use digits.");
        return;
    }

    convertToRoman(parseInt(numberValue));
}

const convertToRoman = (num) => {
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let romanNumeral = '';
    for (var i = 0; i < romanValues.length; i++) {
        while (num >= romanValues[i]) {
            romanNumeral += romanSymbols[i];
            num -= romanValues[i];
        }
    }

    output.innerText = romanNumeral;
}

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    containsOnlyNumbers();
});

