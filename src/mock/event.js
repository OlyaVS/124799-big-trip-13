import {EVENT_TYPES} from "../constants";
import {generateRandomData, getRandomDescription, getOffers, getRandomPhotos, getRandomInteger, getRandomDate, getRandomTimeInterval} from "../utils";

const destinations = [`Amsterdam`, `Chamonix`, `Geneva`];
const offers = [
  {
    eventType: `Flight`,
    title: `Add luggage`,
    price: 30
  },
  {
    eventType: `Flight`,
    title: `Switch to comfort class`,
    price: 100
  },
  {
    eventType: `Flight`,
    title: `Add meal`,
    price: 15
  },
  {
    eventType: `Flight`,
    title: `Add luggage`,
    price: 50
  },
  {
    eventType: `Flight`,
    title: `Choose seats`,
    price: 5
  },
  {
    eventType: `Transport`,
    title: `Travel by train`,
    price: 40
  },
  {
    eventType: `Drive`,
    title: `Rent a car`,
    price: 200
  },
  {
    eventType: `CheckIn`,
    title: `Add breakfast`,
    price: 50
  },
  {
    eventType: `Sightseeing`,
    title: `Book tickets`,
    price: 40
  },
  {
    eventType: `Sightseeing`,
    title: `Lunch in city`,
    price: 30
  },
  {
    eventType: `Taxi`,
    title: `Order Uber`,
    price: 20
  }
];
const rawDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget.
Fusce tristique felis at fermentum pharetra.
Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis.
Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const photoBaseUrl = `http://picsum.photos/248/152?r=`;

export const generateEvent = () => {
  const date = getRandomDate();
  const type = generateRandomData(EVENT_TYPES);
  const destination = generateRandomData(destinations);
  const {startTime, endTime} = getRandomTimeInterval(date);
  const price = getRandomInteger(50, 800);
  const currentOffers = getOffers(offers, type);
  const description = getRandomDescription(rawDescription);
  const photos = getRandomPhotos(photoBaseUrl);
  return {
    date,
    type,
    destination,
    startTime,
    endTime,
    price,
    offers: currentOffers,
    details: {
      description,
      photos,
    },
    isFavourite: Boolean(getRandomInteger(0, 1)),
  };
};
