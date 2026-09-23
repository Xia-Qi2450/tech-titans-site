import { people } from './people.js';
import { production } from './production.js';

export var DATA = { people: people, production: production };

export function proj(slug){
  return DATA.production.projects.filter(function(p){ return p.slug === slug; })[0];
}

export function person(slug){
  return DATA.people.filter(function(p){ return p.slug === slug; })[0];
}
