import { $ } from '../utils.js';
import { person } from '../data/index.js';
import { vPerson } from '../views/person.js';
import { v404 } from '../views/notfound.js';
import { hideLoader } from '../loader.js';

var slug = new URLSearchParams(location.search).get('person');

if(!slug){
  location.replace('/');
} else if(!person(slug)){
  $('#app').innerHTML = v404();
  hideLoader();
} else {
  $('#app').innerHTML = vPerson(slug);
  document.title = $('#app h1').textContent + ' - Tech Titans';
  hideLoader();
}
