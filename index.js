// Code your solutions in this file
function writeCards(names, event) {
  return names.map(function(name) {
  return `Thank you, ${name}, for the wonderful ${event} gift!`;
  });
  }
  
  function countDown(number) {
  while (number >= 0) {
  console.log(number);
  number--;
  }
  }
  
  