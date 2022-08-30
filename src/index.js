import './styles/main.scss';
import getShows from './modules/tvmaze.js';
import * as invApi from './modules/involvementApi.js';

getShows();
invApi.getLikes();