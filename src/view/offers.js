import {OFFERS} from "../constants";

export const createOffersTemplate = (event) => {
  const {offers: currentOffers, type} = event;
  const availableOffers = OFFERS.filter((x) => x.eventType === type);

  return availableOffers.length ? (`<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
    ${availableOffers.map((x) => {
      const formattedOffer = x.title.toLowerCase();
      const isChecked = currentOffers.some((y) => y.title === x.title) ? `checked` : ``;
      return (`
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${formattedOffer}-1" type="checkbox" name="event-offer-${formattedOffer}" ${isChecked}>
          <label class="event__offer-label" for="event-offer-${formattedOffer}-1">
            <span class="event__offer-title">${x.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${x.price}</span>
          </label>
        </div>`);
    }).join(``)}
    </div>
  </section>`) : ``;
};
