import {DESTINATIONS, EVENT_TYPES} from "../constants";
import {generateRandomData, getRandomDescription, getOffers, getRandomPhotos, getRandomInteger, getRandomDate, getRandomTimeInterval} from "../utils";

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
  const destination = generateRandomData(DESTINATIONS);
  const {startTime, endTime} = getRandomTimeInterval(date);
  const price = getRandomInteger(50, 800);
  const currentOffers = getOffers(type);
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
