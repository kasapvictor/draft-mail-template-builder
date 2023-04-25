import {createStore, createApi, createEffect} from "effector";

import {template} from './mock.js'

export const $template = createStore(template);

export const $selectedElement = createStore(null);


