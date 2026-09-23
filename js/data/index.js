import { people } from './people.js';
import { production } from './production.js';
import { coding } from './coding.js';

export var DATA = { people: people, production: production, coding: coding };

export function proj(slug){
  return DATA.production.projects.filter(function(p){ return p.slug === slug; })[0];
}

export function codingProj(slug){
  return DATA.coding.projects.filter(function(p){ return p.slug === slug; })[0];
}

export function person(slug){
  return DATA.people.filter(function(p){ return p.slug === slug; })[0];
}
