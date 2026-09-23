import { proj } from '../data/index.js';
import { esc } from '../utils.js';
import { group } from '../components/episode.js';

export function vProject(slug){
  var p = proj(slug);
  var ok = p.status === 'active';
  var h = '<a class="back" href="/production/">&larr; Production Team</a><div class="eyebrow">Project</div><h1>' + esc(p.title) + '</h1>' +
    '<span class="tag ' + (ok ? 't-ok' : 't-warn') + '">' + (ok ? 'Active' : 'Planned') + '</span><p class="lead">' + esc(p.about) + '</p>';
  var g = { airing: [], aired: [], production: [] };
  (p.episodes || []).forEach(function(e, i){ (g[e.state] || g.production).push([e, i]); });
  h += '<h2>Episode tracker</h2>' + group('Currently airing', g.airing, slug) + group('Already aired', g.aired, slug) + group('In production', g.production, slug);
  if(p.formUrl){
    h += '<div class="note"><p>This show runs on student submissions — send us something and we\'ll queue it for an episode.</p></div>' +
         '<div class="btns"><a class="btn" href="' + esc(p.formUrl) + '" target="_blank" rel="noopener">Submit an idea &rarr;</a></div>';
  }
  return h;
}
