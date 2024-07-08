/*Переменные - исходники*/
const AVATAR__NUMBER = 6;

const PHOTO_ID = 25;
const PHOTO_LINK = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const COMMENTS = 30;

const MAX_ID = [25];
/*Массивы - исходники*/
const DESCRIPTIONS = [
  'Отлично',
  'Супер',
  'Вау',
  'Странно все это',
  'Хахахах',
  'Что то непонятное',
  'Вот это да!',
  'Чудеса!',
];
const NAMES = ['Андрей', 'Юля', 'Света', 'Наташа', 'Александр', 'Толик', 'Афанасий',];
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
/*Генерация случайного числа лайков*/
const getNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};
/*Генерация случайного Id*/
const getRandomId = (min = 0,max = 1000)=>{
  const idNumber = [];

  return function (){
    let randomId = 0;

    do {
      randomId = getNumber(min,max);
    } while (idNumber.includes(randomId));

    idNumber.push(randomId);
    return randomId;
  };
};
/*Создание системных переменных*/
const PhotoId = getRandomId(1, PHOTO_ID);
const UserId = getRandomId();
const PhotoLink = getRandomId(1, PHOTO_LINK);
const getRandomArrayElement = (elements) => elements[getNumber(0, elements.length - 1)];
/*Создание данных для пользователя*/
const getComment = () => ({
  id: UserId(),
  avatar: `img/avatar-${getNumber(1, AVATAR__NUMBER)}.svg`,
  message: `${getRandomArrayElement(COMMENT_LINES)} ${getRandomArrayElement(COMMENT_LINES)}`,
  name: getRandomArrayElement(NAMES)
});
/*Создание системных данных*/
const createPhoto = () => ({
  id: PhotoId(),
  url: `photos/${PhotoLink()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getNumber(MIN_LIKES, MAX_LIKES),
  comments: Array.from({
    length: getNumber(0, COMMENTS)}, getComment)
});
/*Склейка результата*/
const creatingArray = Array.from({length: MAX_ID }, createPhoto);
/*console.log(creatingArray);*/
/*Не знаю, понадобится или нет вывод в консоль. Закрыл, чтобы ESLinter не ругался*/
