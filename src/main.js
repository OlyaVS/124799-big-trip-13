import {createTripInfoTemplate} from "./view/trip-info";
import {createInfoTemplate} from "./view/info";
import {createCostTemplate} from "./view/cost";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createEventsListTemplate} from "./view/events-list";
import {createEventsListItemTemplate} from "./view/events-list-item";
import {createEventFormTemplate} from "./view/event-form";
import {createEventTemplate} from "./view/event";
import {generateEvent} from "./mock/event";

const EVENTS_COUNT = 20;
const events = new Array(EVENTS_COUNT).fill(null).map(generateEvent);

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
render(eventsElement, createEventsListTemplate());

const listElement = eventsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_COUNT; i++) {
  render(listElement, createEventsListItemTemplate());
}

const liElements = listElement.querySelectorAll(`li`);
liElements.forEach((li, index) => {
  if (index === 0) {
    render(li, createEventFormTemplate());
  } else {
    render(li, createEventTemplate(events[index]));
  }
});
