import dayjs from "dayjs";
import {DESTINATIONS, EVENT_TYPES} from "../constants";
import {countTotalPrice} from "../utils";

export const createEventHeaderTemplate = (event) => {
  const {type, destination, startTime, endTime, price, offers} = event;
  const iconUrl = `img/icons/${type.toLowerCase()}.png`;
  const formattedStartTime = dayjs(startTime).format(`YY/MM/DD HH:mm`);
  const formattedEndTime = dayjs(endTime).format(`YY/MM/DD HH:mm`);
  const totalPrice = countTotalPrice(price, offers);

  return (`<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src=${iconUrl} alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${EVENT_TYPES.map((x) => {
      const formattedType = x.toLowerCase();
      const isChecked = type === x ? `checked` : ``;
      return (`<div class="event__type-item">
        <input id="event-type-${formattedType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${formattedType}" ${isChecked}>
        <label class="event__type-label  event__type-label--${formattedType}" for="event-type-${formattedType}-1">${x}</label>
        </div>`);
    }).join(``)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${destination} list="destination-list-1">
      <datalist id="destination-list-1">
      ${DESTINATIONS.map((x) => `<option value=${x}></option>`).join(``)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formattedStartTime}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formattedEndTime}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${totalPrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>`);
};
