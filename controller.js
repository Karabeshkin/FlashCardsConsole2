const readlineSync = require('readline-sync'); 
const model = require('model()');
const check = 


// вывод тем


function communicator() {
  const greeting = '\nHELLO USER!\n';

  
  
  const themes = `
  theme 1 
  theme 2 
  theme 3`;  
  
  console.log(greeting);
  console.log(themes);
  const choosingTheme = readlineSync.question('Chose thr theme: ');
  console.log('You choosed theme:  ' + choosingTheme + '!');
  const arr = model(choosingTheme)
  for (let i = 0; i < arr.lentgth; i += 1) {
    console.log(arr[i].question)
    const otvet = readlineSync.question('otvet: ');
    console.log(check(otvet))
  }
  const bye = 'Вопросы кончились';
  return bye
}
communicator();