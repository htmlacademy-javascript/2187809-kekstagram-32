/*Создал функцию stringAnalysis,
которая в параметре contentString проверяет
количество символов этого атрибута и сравнивает ее с maxLength
*/
function stringAnalysis(contentString, maxLength){
  return contentString.length <= maxLength;
}
const palindromeTest = (string) => {
  const standardString = string.replaceAll(' ', '').toLowerCase();
  let reflectionString = '';
  for (let i = standardString.length - 1; i >= 0; i--) {
    reflectionString += standardString[i];
  }
  return standardString === reflectionString;
}
