import { $, esc, copyText } from '../utils.js';
import { STAGES } from '../data/config.js';
import { proj } from '../data/index.js';

export function bar(st){
  var pct = Math.round(st / (STAGES.length - 1) * 100);
  return '<div class="bar"><i style="width:' + pct + '%"></i></div><p style="font-size:.84rem">' + esc(STAGES[st]) + '</p>';
}

export function steps(st){
  return '<ul class="steps">' + STAGES.map(function(s, i){
    return '<li class="' + (i < st ? 'done' : i === st ? 'cur' : '') + '"><span class="dot"></span>' + s + '</li>';
  }).join('') + '</ul>';
}

export function embed(id){
  if(!id || /REPLACE/.test(id)) return '<div class="embed"><div class="ph">Google Drive embed - set this episode&rsquo;s <code>drive</code> file ID in the data block.</div></div>';
  return '<div class="embed"><iframe src="https://drive.google.com/file/d/' + esc(id) + '/preview" allow="autoplay" allowfullscreen title="Episode video"></iframe></div>';
}

function stateMeta(state){
  if(state === 'airing') return { cls: 't-ok', label: 'Airing now' };
  if(state === 'aired') return { cls: 't-idle', label: 'Aired' };
  return { cls: 't-warn', label: 'In production' };
}

function hasRealDrive(id){
  return !!id && !/REPLACE/.test(id);
}

function driveViewUrl(id){
  return 'https://drive.google.com/file/d/' + id + '/view';
}

export function group(label, list, slug){
  if(!list.length) return '';
  var h = '<h3 style="margin-top:1.6rem">' + label + '</h3><div class="grid" style="margin-top:.7rem">';
  list.forEach(function(pair){
    var e = pair[0], i = pair[1];
    var m = stateMeta(e.state);
    h += '<button class="card" data-ep="' + slug + ':' + i + '"><span class="tag ' + m.cls + '">' + m.label + '</span><h3>' + esc(e.title) + '</h3>' +
         (e.state === 'production' ? bar(e.stage || 0) : '<p>Open for synopsis and video.</p>') + '</button>';
  });
  return h + '</div>';
}

// The dialog element is static and reused for every episode - openEp() only
// ever rewrites #dlgBody. That means the fix belongs here, once, rather than
// in openEp(): whenever the dialog closes, by ANY method (X button, Escape,
// or a backdrop click), wipe #dlgBody so any embedded iframe is actually
// removed from the DOM. Just closing the dialog hides it but leaves the
// iframe running, which is why the video kept playing in the background.
var dlg = $('#dlg');
if(dlg){
  dlg.addEventListener('close', function(){
    $('#dlgBody').innerHTML = '';
  });
  // Native <dialog> only closes on Escape or an explicit .close() call -
  // clicking the backdrop does nothing by default. A backdrop click always
  // targets the <dialog> element itself (never a child), so this is the
  // standard way to add click-outside-to-close.
  dlg.addEventListener('click', function(e){
    if(e.target === dlg) dlg.close();
  });
}

export function openEp(key){
  var parts = key.split(':'), p = proj(parts[0]); if(!p) return;
  var e = p.episodes[Number(parts[1])]; if(!e) return;
  var m = stateMeta(e.state);
  var canCopy = e.state !== 'production' && hasRealDrive(e.drive);

  var h = '<button class="x" id="xBtn" aria-label="Close">&#10005;</button>' +
          '<div class="eyebrow">' + esc(p.title) + '</div>' +
          '<span class="tag ' + m.cls + '">' + m.label + '</span>' +
          '<h1 style="font-size:1.45rem">' + esc(e.title) + '</h1><p>' + esc(e.synopsis) + '</p>' +
          (e.state === 'production' ? '<h3>Production progress</h3>' + bar(e.stage || 0) + steps(e.stage || 0) : embed(e.drive)) +
          (canCopy ? '<div class="btns"><button class="btn ghost" id="copyBtn" type="button">Copy Drive link</button></div>' : '');

  $('#dlgBody').innerHTML = h;
  var dialog = $('#dlg');
  dialog.showModal();

  var xBtn = $('#xBtn');
  xBtn.onclick = function(){ dialog.close(); };
  xBtn.focus();

  if(canCopy){
    var cb = $('#copyBtn');
    cb.onclick = function(){
      copyText(driveViewUrl(e.drive)).then(function(){
        cb.textContent = 'Copied!';
      }).catch(function(){
        cb.textContent = "Couldn't copy - copy manually";
      }).then(function(){
        setTimeout(function(){ cb.textContent = 'Copy Drive link'; }, 1600);
      });
    };
  }
}
