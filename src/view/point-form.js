import {createPointHeaderTemplate} from "./point-header";
import {createPointOffersTemplate} from "./point-offers";
import {createPointDestinationTemplate} from "./point-destination";

export const createPointFormTemplate = () => `<form class="event event--edit" action="#" method="post">
  ${createPointHeaderTemplate()}
  <section class="event__details">
    ${createPointOffersTemplate()}
    ${createPointDestinationTemplate()}
  </section>
</form>`;
