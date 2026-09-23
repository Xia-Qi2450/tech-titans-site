import { $ } from '../utils.js';
import { proj } from '../data/index.js';
import { vProject } from '../views/project.js';
import { vProjectNotFound } from '../views/notfound.js';
import { openEp } from '../components/episode.js';

var slug = new URLSearchParams(location.search).get('production');

if(!slug){
  // No project specified - send them to the department page instead of showing an empty template.
  location.replace('/production/');
} else if(!proj(slug)){
  $('#app').innerHTML = vProjectNotFound(slug);
  document.title = 'Project not found - Tech Titans';
} else {
  $('#app').innerHTML = vProject(slug);
  document.title = $('#app h1').textContent + ' - Tech Titans';
}

// Episode cards on this page open the synopsis/video modal - same behavior as before.
document.addEventListener('click', function(e){
  var ep = e.target.closest('[data-ep]');
  if(ep) openEp(ep.getAttribute('data-ep'));
});
