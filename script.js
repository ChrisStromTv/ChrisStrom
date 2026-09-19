const films = [
  {title:"KILL THE BOOGEYMAN",year:"2025 · ca. 40 Min.",type:"Horrorfilm",id:"tKlETFiQpdA",desc:"Rund 40-minütiger Horrorfilm und bisher umfangreichstes veröffentlichtes Filmprojekt. Produktion über ungefähr ein Jahr; veröffentlicht auf YouTube."},
  {title:"HALLOWEEN",year:"2023",type:"Fan Film",id:"pPvz3jh9_xI",desc:"Stärker auf eine vollständige Kurzfilmproduktion ausgerichteter Horrorfilm. Auf YouTube veröffentlicht und rund 50.000 Aufrufe erreicht."},
  {title:"I WANT TO BELIEVE",year:"2022 · ca. 18 Min.",type:"Dokumentation",id:"PAT3wTM-Xy0",desc:"Rund 18-minütige Dokumentation und Einstieg in die eigenständige Produktion längerer dokumentarischer Inhalte."},
  {title:"ROOM 237",year:"2020",type:"Kurzfilm",id:"A59MfZ2HjjY",desc:"Schwarz-Weiß-Kurzfilm und erster online veröffentlichter eigener Film."},
  {title:"Green Fireballs: Das UFO-Rätsel von New Mexico",year:"2026 · Signal Null",type:"Dokumentation",id:"sMLgfzniKLk",desc:"Dokumentarisches Projekt über mysteriöse UFO-/UAP-Akten und die Green-Fireballs-Thematik von New Mexico."}
];

const rail=document.getElementById('filmRail');
const modal=document.getElementById('playerModal');
const frame=document.getElementById('playerFrame');
const title=document.getElementById('playerTitle');
const meta=document.getElementById('playerMeta');
const description=document.getElementById('playerDescription');

films.forEach(film=>{
  const card=document.createElement('article');
  card.className='card';
  card.innerHTML=`<div class="thumb" style="background-image:linear-gradient(180deg,transparent 35%,#000d),url('https://i.ytimg.com/vi/${film.id}/hqdefault.jpg')"></div><div class="card-body"><div class="badge">${film.type}</div><h3>${film.title}</h3><p>${film.year}</p></div>`;
  card.addEventListener('click',()=>openPlayer(film));
  rail.appendChild(card);
});

function openPlayer(film){
  frame.src=`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`;
  title.textContent=film.title;
  meta.textContent=`${film.type} · ${film.year}`;
  description.textContent=film.desc;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closePlayer(){
  frame.src='';
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closePlayer));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePlayer()});
