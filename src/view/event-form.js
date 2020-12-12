import {createEventHeaderTemplate} from "./event-header";
import {createOffersTemplate} from "./offers";
import {createDestinationTemplate} from "./destination";

export const createEventFormTemplate = () => `<form class="event event--edit" action="#" method="post">
  ${createEventHeaderTemplate()}
  <section class="event__details">
    ${createOffersTemplate()}
    ${createDestinationTemplate()}
  </section>
</form>`;
