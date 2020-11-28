import {createInfoTemplate} from "./view/info";
import {createRouteInfoTemplate} from "./view/route-info";
import {createRouteCostTemplate} from "./view/route-cost";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createRouteListTemplate} from "./view/route-list";
import {createRouteItemTemplate} from "./view/route-item";
import {createAddRouteItemTemplate} from "./view/add-route-item";
import {createItemTemplate} from "./view/item";

const ITEMS_COUNT = 3;

const main = document.querySelector(`.trip-main`);
const events = document.querySelector(`.trip-events`);

const render = (container, template, position = `beforeend`) =>
  container.insertAdjacentHTML(position, template);

render(main, createInfoTemplate(), `afterbegin`);

const info = main.querySelector(`.trip-info`);
render(info, createRouteInfoTemplate());
render(info, createRouteCostTemplate());

const controls = main.querySelector(`.trip-controls`);
const menuHeader = controls.querySelector(`h2`);

render(menuHeader, createMenuTemplate(), `afterend`);
render(controls, createFilterTemplate());

render(events, createSortTemplate());
render(events, createRouteListTemplate());

const list = events.querySelector(`.trip-events__list`);
render(list, createRouteItemTemplate());

const item = list.querySelector(`.trip-events__item`);
render(item, createAddRouteItemTemplate());

for (let i = 0; i < ITEMS_COUNT; i++) {
  render(list, createRouteItemTemplate());
  const lastItem = list.querySelector(`.trip-events__item:last-child`);
  render(lastItem, createItemTemplate());
}
