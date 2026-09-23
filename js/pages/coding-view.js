import { $ } from '../utils.js';
import { codingProj } from '../data/index.js';
import { vCodingProject } from '../views/coding-project.js';
import { vCodingProjectNotFound } from '../views/notfound.js';
import { hideLoader } from '../loader.js';

var slug = new URLSearchParams(location.search).get('coding');

if(!slug){
  location.replace('/coding/');
} else if(!codingProj(slug)){
  $('#app').innerHTML = vCodingProjectNotFound(slug);
  document.title = 'Project not found - Tech Titans';
  hideLoader();
} else {
  $('#app').innerHTML = vCodingProject(slug);
  document.title = $('#app h1').textContent + ' - Tech Titans';
  hideLoader();
}
