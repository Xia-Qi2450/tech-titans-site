import { DATA } from '../data/index.js';
import { esc } from '../utils.js';
import { members } from '../components/members.js';

export function vProduction(){
  var d = DATA.production, ps = d.projects.filter(function(p){ return p.featured; }).slice(0, 5);
  var h = '<a class="back" href="./">&larr; All departments</a><div class="eyebrow">Department</div><h1>' + esc(d.name) + '</h1><p class="lead">' + esc(d.lead) + '</p>';
  h += '<h2>Featured projects</h2><div class="grid">';
  ps.forEach(function(p){
    var ok = p.status === 'active';
    h += '<a class="card" href="./production/view/?production=' + encodeURIComponent(p.slug) + '"><span class="tag ' + (ok ? 't-ok' : 't-warn') + '">' + (ok ? 'Active' : 'Planned') + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.blurb) + '</p><span class="arrow">View project &rarr;</span></a>';
  });
  h += '</div>';
  if(d.projects.length > ps.length) h += '<p style="margin-top:1rem">Showing ' + ps.length + ' of ' + d.projects.length + ' projects.</p>';
  return h + members('production');
}
