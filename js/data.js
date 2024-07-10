import{getNumber, getRandomId} from './util';
const AVATAR__NUMBER = 6;
const PHOTO_ID = 25;
const PHOTO_LINK = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COMMENTS = 30;
const MAX_ID = [25];
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
const PhotoId = getRandomId(1, PHOTO_ID);
const UserId = getRandomId();
const PhotoLink = getRandomId(1, PHOTO_LINK);
const getRandomArrayElement = (elements) => elements[getNumber(0, elements.length - 1)];
const getComment = () => ({
  id: UserId(),
  avatar: `img/avatar-${getNumber(1, AVATAR__NUMBER)}.svg`,
  message: `${getRandomArrayElement(COMMENT_LINES)} ${getRandomArrayElement(COMMENT_LINES)}`,
  name: getRandomArrayElement(NAMES)
});
const createPhoto = () => ({
  id: PhotoId(),
  url: `photos/${PhotoLink()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getNumber(MIN_LIKES, MAX_LIKES),
  comments: Array.from({
    length: getNumber(0, COMMENTS)}, getComment)
});
const creatingArray = Array.from({length: MAX_ID }, createPhoto);

export{creatingArray};
