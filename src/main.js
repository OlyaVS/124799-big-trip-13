import {createTripInfoTemplate} from "./view/trip-info";
import {createInfoTemplate} from "./view/info";
import {createCostTemplate} from "./view/cost";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createPointListTemplate} from "./view/point-list";
import {createPointListItemTemplate} from "./view/point-list-item";
import {createPointFormTemplate} from "./view/point-form";
import {createPointTemplate} from "./view/point";

const ITEMS_COUNT = 4;

const mainElement = document.querySelector(`.trip-main`);
const eventsElement = document.querySelector(`.trip-events`);

const render = (container, template, position = `beforeend`) =>
  container.insertAdjacentHTML(position, template);

render(mainElement, createTripInfoTemplate(), `afterbegin`);

const infoElement = mainElement.querySelector(`.trip-info`);
render(infoElement, createInfoTemplate());
render(infoElement, createCostTemplate());

const controlsElement = mainElement.querySelector(`.trip-controls`);
const menuHeaderElement = controlsElement.querySelector(`h2`);

render(menuHeaderElement, createMenuTemplate(), `afterend`);
render(controlsElement, createFilterTemplate());

render(eventsElement, createSortTemplate());
render(eventsElement, createPointListTemplate());

const listElement = eventsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < ITEMS_COUNT; i++) {
  render(listElement, createPointListItemTemplate());
}

const liElements = listElement.querySelectorAll(`li`);
liElements.forEach((li, index) => {
  if (index === 0) {
    render(li, createPointFormTemplate());
  } else {
    render(li, createPointTemplate());
  }
});
