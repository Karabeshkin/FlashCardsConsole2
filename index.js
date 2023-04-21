const fs = require('fs');
const readlineSync = require('readline-sync');
// const process = process.argv[2];
const themes = fs.readdirSync('./themes');
function model(znachenie) {
// console.log(themes);
  const quetions = fs.readFileSync(`./themes/${themes[znachenie]}/questions.txt`, 'utf-8').split('\n');
//   console.log(quetions);
  const answers = fs.readFileSync(`./themes/${themes[znachenie]}/answers.txt`, 'utf-8').split('\n');
  const arr = quetions.map((el, i) => {
    const obj = {};
    obj.question = el;
    obj.answer = answers[i];
    return obj;
  });
}
// const per = readlineSync.question('')
// console.log(arr);
function check(elem) {
  const done = arr.filter(((el, i) => (el[znachenie].answer).toLowerCase() === per).toLowerCase());
  if (!done) {
    return console.log('Верно!');
  }
  return console.log(('Неверно!'));
}
