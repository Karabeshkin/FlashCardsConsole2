const readlineSync = require('readline-sync'); 
// const model = require('model()');
const {
  model
} = require('./index');


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
  console.log(arr);
  // const choosingTheme = readlineSync.question(' ')
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i].question)
    const otvet = readlineSync.question('otvet: ');
    if (arr[i].answer === otvet) {
      console.log(arr[i].answer);
      console.log(otvet);

      console.log('Verno')
    } else {
      console.log(arr[i].answer);
      console.log(otvet);
      console.log('Neverno');
    }
    // arr.find((el)=> {
    //   if (el.answer === otvet) {
    //     console.log("Верно"); 
    //   } else {
    //     console.log("неВерно");
    //   }
  // })
    // console.log(check(otvet))
  }
  const bye = 'Вопросы кончились';
  return bye
}
communicator();