document.getElementById('run').addEventListener('click', psw)
// setting all the varibles
const input = document.getElementById('password')
const lowerCaseLetters = /[a-z]/g
const upperCaseLetters = /[A-Z]/g
const numbers = /[0-9]/g
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
  } else { 
    document.getElementById('result').innerHTML = 'Please fill in the box'
  }
}
