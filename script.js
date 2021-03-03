document.getElementById('run').addEventListener('click', psw)
let input = document.getElementById("password");
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

function psw () { 
  if (input.value.match(numbers && upperCaseLetters && lowerCaseLetters)){
 document.getElementById('result').innerHTML = 'Strong password!'
  } else if (input.value.match(numbers && upperCaseLetters )){
 document.getElementById('result').innerHTML = 'Good password'
  } else if (input.value.match(numbers && lowerCaseLetters )){
 document.getElementById('result').innerHTML = 'Good password'
  } else if (input.value.match(lowerCaseLetters && upperCaseLetters )){
 document.getElementById('result').innerHTML = 'Good password'
 } else if (input.value.match(numbers)){
 document.getElementById('result').innerHTML = 'Bad password'
 } else if (input.value.match(lowerCaseLetters)){
 document.getElementById('result').innerHTML = 'Bad password'
 } else if (input.value.match(upperCaseLetters)){
 document.getElementById('result').innerHTML = 'Bad password'
} else {document.getElementById('result').innerHTML = 'Please fill in the box'
}
}