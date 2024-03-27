document.addEventListener('DOMContentLoaded', function main() {
    document.querySelector('#dark-toggle').addEventListener('click', toggleDarkTheme)
  
    document.querySelector('#nav-more').addEventListener('click', function() {
      const contentDiv = document.querySelector('#nav-links');
      if (contentDiv.style.maxHeight){
        contentDiv.style.maxHeight = null;
      } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
      }
    })
})
  
const button = document.getElementById("btn");
const textField = document.getElementById("text-input");
const output = document.getElementById("result");
const equivalency = document.getElementById("equivalency")

const checkUserInput = () => {
    const input = textField.value.trim(); // Trim to remove leading/trailing whitespaces
    if (input === "") {
        alert("Please provide a non-empty string");
        return;
    }
  
    checkPalindrome(input);
    textField.value = ""; // Clearing the input field after checking
};

const checkPalindrome = (input) => {
    const storedInput = input; // Declare storedInput using const or let
    input = input.replace(/\s/g, "").toLowerCase(); // Use toLowerCase() instead of toLowercase(), and use regex to replace all whitespaces
    const reversedInput = reverseString(input);
    output.innerText = input === reversedInput ? `${storedInput} is a palindrome` : `${storedInput} is not a palindrome`;
    if (input === reversedInput) {
        output.innerText = `${storedInput} is a palindrome`
        equivalency.innerText = `${input} = ${reversedInput}`
    } else {
        output.innerText = `${storedInput} is not a palindrome`
        equivalency.innerText = `${input} ≠ ${reversedInput}`
    }
};

const reverseString = (input) => input.split("").reverse().join("");

button.addEventListener("click", checkUserInput);
button.addEventListener("keydown", (e) => {if (e == "Enter") {checkUserInput}})