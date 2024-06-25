/*Создал функцию stringAnalysis,
которая в параметре contentString проверяет
количество символов этого атрибута и сравнивает ее с maxLength
*/
function stringAnalysis(contentString, maxLength){
  return contentString.length <= maxLength;
}
/*Выводя в консоль, чтобы отобразилось true или false (больше или меньше параметр contentString и maxLength)*/
console.log(stringAnalysis('проверяемая строка', 20));
console.log(stringAnalysis('проверяемая строка', 18));
console.log(stringAnalysis('проверяемая строка', 10));
// Проверка на паллиндром
function pallindrom(string){
  string = string.toLwerCase();
  string = string.replaceAll(' ', '');
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--){
    reversed = reversed + reversed[i];
  }
  console.log('string === reversed')
  return string === reversed;
}
