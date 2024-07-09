/*Генерация случайного числа лайков*/
const getNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
/*Генерация случайного Id*/
const getRandomId = (min = 0,max = 1000)=>{
  const NumberId = [];
  return function (){
    /*Базовое значение рандомного числа*/
    let randomId = 0;
    do {
      randomId = getNumber(min,max);
    } while (NumberId.includes(randomId));
    NumberId.push(randomId);
    /*Возвращение функции*/
    return randomId;
  };
};
export{getNumber, getRandomId};
