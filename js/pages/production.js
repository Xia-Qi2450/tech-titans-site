import { $ } from '../utils.js';
import { vProduction } from '../views/production.js';
import { hideLoader } from '../loader.js';

$('#app').innerHTML = vProduction();
hideLoader();
