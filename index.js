const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const wordsArray = tutorials.map(element => element.split(' '))
  console.log(wordsArray)
  const casedWordsArray = wordsArray.map(element => element.map(element => element.charAt(0).toUpperCase() + `${element.slice(1)}`))
  console.log(casedWordsArray)
  const titleCasedArray = casedWordsArray.map(element => element.join(' '))
  return titleCasedArray
}
