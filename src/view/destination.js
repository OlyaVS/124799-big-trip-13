export const createDestinationTemplate = (event) => {
  const {details} = event;
  return (`<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${details.description}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${details.photos.map((x) => `<img class="event__photo" src="${x}" alt="Event photo">`).join(``)}
      </div>
    </div>
  </section>`);
};
