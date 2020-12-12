import {createEventHeaderTemplate} from "./event-header";
import {createOffersTemplate} from "./offers";
import {createDestinationTemplate} from "./destination";

export const createEventFormTemplate = (event) => `<form class="event event--edit" action="#" method="post">
  ${createEventHeaderTemplate(event)}
  <section class="event__details">
    ${createOffersTemplate(event)}
    ${createDestinationTemplate(event)}
  </section>
</form>`;
