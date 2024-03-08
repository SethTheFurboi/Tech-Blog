const { Painting } = require('../models');

const paintingdata = [
  {
    title: `I wish there was an easier way`,
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'manually typing SUCKS',
  },
  {
    title: `EZ`,
    artist: 'WStudio',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'So easy SMH',
  },
  {
    title: 'building blocks',
    artist: 'S_Photo',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: `Don't be like me and forget this shit, you'll need it`,
  },
  {
    title: `Issues`,
    artist: 'icemanphotos',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: '04-beach-chairs.jpg',
    description: 'Anyone else having "HTML positioning" issues?',
  },
  {
    title: `Integration`,
    artist: 'VRstudio',
    exhibition_date: 'August 14, 2016',
    gallery_id: 2,
    filename: '05-beach-sunrise.jpg',
    description: `HTML's easy, integrating everything is not.`,
  },
  {
    title: `Similarities`,
    artist: 'DrivingJack',
    exhibition_date: 'October 15, 2018',
    gallery_id: 3,
    filename: '06-fall-colors.jpg',
    description:
      `It's similar to other languages I've learned`,
  },
  {
    title: `Help`,
    artist: 'Vitalii_Mamchuk',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: '07-autumn-mountains.jpg',
    description:
      `It's so hard to compreheeeeennndd`,
  },
  {
    title: `git gud`,
    artist: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: '08-frozen-river.jpg',
    description:
      `SQL's so easy lmao just get good`,
  },
  {
    title: `PAIN`,
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
