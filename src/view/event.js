import dayjs from "dayjs";
import {getTimeDuration} from "../utils";

export const createEventTemplate = (event) => {
  const {date, type, destination, startTime, endTime, price, offers, isFavourite} = event;
  const iconUrl = `img/icons/${type.toLowerCase()}.png`;
  const formattedDateTimeDate = dayjs(startTime).format(`YYYY-MM-DD`);
  const formattedDate = dayjs(date).format(`MMM DD`);
  const formattedDateTimeStart = dayjs(startTime).format();
  const formattedStartTime = dayjs(startTime).format(`HH:mm`);
  const formattedDateTimeEnd = dayjs(endTime).format();
  const formattedEndTime = dayjs(endTime).format(`HH:mm`);
  const favouriteClass = isFavourite ? `event__favorite-btn--active` : ``;

  return (`<div class="event">
  <time class="event__date" datetime="${formattedDateTimeDate}">${formattedDate}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src=${iconUrl} alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${destination}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${formattedDateTimeStart}">${formattedStartTime}</time>
      &mdash;
      <time class="event__end-time" datetime="${formattedDateTimeEnd}">${formattedEndTime}</time>
    </p>
    <p class="event__duration">${getTimeDuration(startTime, endTime)}</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
       ${offers.map((x) => (`<li class="event__offer">
      <span class="event__offer-title">${x.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${x.price}</span>
    </li>`)).join(``)}
  </ul>
  <button class="event__favorite-btn ${favouriteClass}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>`);
};