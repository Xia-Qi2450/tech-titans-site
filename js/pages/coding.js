import { $ } from '../utils.js';
import { vCoding } from '../views/coding.js';
import { hideLoader } from '../loader.js';

$('#app').innerHTML = vCoding();
hideLoader();
