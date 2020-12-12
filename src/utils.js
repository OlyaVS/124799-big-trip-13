import dayjs from "dayjs";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateRandomData = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);

  return data[randomIndex];
};

export const getOffers = (offers, type) => {
  const currentOffers = offers.filter((x) => x.eventType === type);
  const randomLength = currentOffers.length > 1 ? getRandomInteger(0, currentOffers.length - 1) : 1;
  return currentOffers.slice(0, randomLength);
};

export const getRandomDescription = (data) => {
  const rawData = data.split(`.`);
  const randomLength = getRandomInteger(0, 4);

  return new Array(randomLength)
    .fill(null)
    .map(() => rawData[getRandomInteger(0, randomLength)])
    .join(`. `);
};

export const getRandomPhotos = (baseUrl) => {
  const randomLength = getRandomInteger(0, 4);
  return new Array(randomLength)
    .fill(null)
    .map(() =>`${baseUrl}${getRandomInteger(1, 10000)}`);
};

export const getRandomDate = () => {
  const maxDaysGap = 30;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
};

export const getRandomTimeInterval = (date) => {
  const hour = getRandomInteger(0, 48);
  const minutes = getRandomInteger(0, 59);
  const hoursGap = getRandomInteger(0, 23);
  const minutesGap = getRandomInteger(0, 59);
  const startTime = dayjs(date).hour(hour).minute(minutes).toDate();
  const endTime = dayjs(startTime).add(hoursGap, `hour`).add(minutesGap, `minute`).toDate();
  return {startTime, endTime};
};

export const getTimeDuration = (startTime, endTime) => {
  const days = dayjs(endTime).diff(dayjs(startTime), `day`);
  let hours;
  let minutes;

  hours = days > 0 ? dayjs(endTime).diff(dayjs(startTime), `hour`) - (days * 24)
    : dayjs(endTime).diff(dayjs(startTime), `hour`);
  minutes = hours > 0 ? dayjs(endTime).diff(dayjs(startTime), `minute`) - (hours * 60)
    : dayjs(endTime).diff(dayjs(startTime), `minute`);
  if (hours === 0 && days === 0) {
    return `${minutes}M`;
  }

  return days > 0 ? `${days}D ${hours}H ${minutes}M` : `${hours}H ${minutes}M`;
};
