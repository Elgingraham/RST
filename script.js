document.getElementById('run').addEventListener('click', psw)
// setting all the varibles
let input = document.getElementById('password')
let lowerCaseLetters = /[a-z]/g
let upperCaseLetters = /[A-Z]/g
let numbers = /[0-9]/g
// checking all the possibilities
function psw () {
  if (input.value.match(numbers) && input.value.match(upperCaseLetters) && input.value.match(lowerCaseLetters)) {
    document.getElementById('result').innerHTML = 'Strong password!'
  } else if (input.value.match(numbers) && input.value.match(upperCaseLetters)) {
    document.getElementById('result').innerHTML = 'Good password'
  } else if (input.value.match(numbers) && input.value.match(lowerCaseLetters)) {
    document.getElementById('result').innerHTML = 'Good password'
  } else if (input.value.match(upperCaseLetters) && input.value.match(lowerCaseLetters)) {
    document.getElementById('result').innerHTML = 'Good password'
  } else if (input.value.match(numbers)) {
    document.getElementById('result').innerHTML = 'Bad password'
  } else if (input.value.match(lowerCaseLetters)) {
    document.getElementById('result').innerHTML = 'Bad password'
  } else if (input.value.match(upperCaseLetters)) {
    document.getElementById('result').innerHTML = 'Bad password'
  } else { document.getElementById('result').innerHTML = 'Please fill in the box'
  }
}
