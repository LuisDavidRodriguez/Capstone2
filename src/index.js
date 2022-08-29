import './styles/main.scss';
import { getShows } from './modules/tvmaze';
import * as invApi from './modules/involvementApi';

getShows();
invApi.getLikes();