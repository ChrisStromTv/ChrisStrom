const translations = {
  de: {
    'nav.about':'Über mich','nav.kino':'Kino','nav.contact':'Kontakt','nav.play':'PLAY <span>▶</span>',
    'hero.eyebrow':'INDEPENDENT CINEMA','hero.sub':'Unabhängige Filme.<br>Echte Geschichten. Dunkle Ideen.','hero.enter':'Chris Storm Kino öffnen','hero.caption':'REGISSEUR · FILMEMACHER · EDITOR',
    'about.eyebrow':'DER FILMEMACHER','about.heading':'Made<br><i>independent.</i>',
    'about.p1':'Mein Name ist Kristijan Stojcevic, unter meinem Künstlernamen Chris Storm arbeite ich als Regisseur und Filmemacher.',
    'about.p2':'Meine ersten eigenen Filme habe ich bereits im Alter von 16 Jahren gedreht. Gemeinsam mit meinen Cousins entstanden damals erste kleine Kurzfilme, unter anderem im Stil von Jackie-Chan-Filmen. Diese Projekte waren mein Einstieg in die praktische Filmproduktion.',
    'about.p3':'Mit Anfang 20 begann ich, mich intensiver mit Filmproduktion, Filmsprache, Kameraarbeit, Schnitt und visueller Gestaltung auseinanderzusetzen. Viele meiner Projekte entstanden zunächst privat und dienten dazu, neue Techniken auszuprobieren, Fehler zu machen und daraus zu lernen.',
    'about.p4':'Ich habe mir meine Kenntnisse und Fähigkeiten über die Jahre überwiegend selbstständig und autodidaktisch aufgebaut. Durch eigene Projekte, praktische Erfahrungen und die kontinuierliche Auseinandersetzung mit Filmproduktion habe ich mir Kenntnisse in unterschiedlichen Bereichen angeeignet.',
    'about.p5':'Mein Anspruch ist es, eine Idee nicht nur zu entwickeln, sondern sie möglichst selbstständig von der ersten Idee bis zum fertigen Video umzusetzen.',
    'about.onset':'AM SET / 2022','about.note':'DREH · SCHNITT · GRADING · WIEDERHOLEN',
    'bio.job':'BERUF','bio.jobText':'Regisseur · Filmemacher · Video Editor · Videograf','bio.work':'ARBEITSWEISE','bio.workText':'Autodidaktisch · Independent Production','bio.fields':'BEREICHE','bio.fieldsText':'Drehbuch · Konzeption · Regie · Kamera · Schnitt · Color Grading · VFX · Postproduktion','bio.other':'WEITERE ARBEITEN','bio.otherText':'Dokumentation · Commercial · Sport · Social Media','bio.instagram':'INSTAGRAM','bio.contact':'KONTAKT',
    'kino.archive':'ARCHIV / 005','kino.heading':'The<br><i>Films.</i>','kino.intro':'Kurzfilme, Experimente und unabhängiges Kino — alles an einem Ort.',
    'manifesto.eyebrow':'STATEMENT','manifesto.quote':'“HORROR<br><i>LIVES HERE.</i>”','manifesto.text':'Kurzfilme, Experimente und unabhängiges Kino — alles an einem Ort.',
    'contact.eyebrow':'KONTAKT & BOOKING','contact.heading':'Let\'s make<br><i>something.</i>','contact.text':'Für Filmproduktionen, Regie, kreative Projekte, Kooperationen und Buchungen:','contact.instagram':'INSTAGRAM ↗','contact.book':'CHRIS STORM BUCHEN <span>↗</span>',
    'footer.copy':'© 2026 Chris Storm','footer.right':'Independent Cinema / Deutschland','modal.close':'Schließen'
  },
  en: {
    'nav.about':'About','nav.kino':'Cinema','nav.contact':'Contact','nav.play':'PLAY <span>▶</span>',
    'hero.eyebrow':'INDEPENDENT CINEMA','hero.sub':'Independent films.<br>Real stories. Dark ideas.','hero.enter':'Enter Chris Storm Kino','hero.caption':'DIRECTOR · FILMMAKER · EDITOR',
    'about.eyebrow':'THE FILMMAKER','about.heading':'Made<br><i>independent.</i>',
    'about.p1':'My name is Kristijan Stojcevic. Under my artist name Chris Storm, I work as a director and filmmaker.',
    'about.p2':'I made my first films at the age of 16. Together with my cousins, I created early short films, including projects inspired by Jackie Chan movies. These projects became my entry into practical filmmaking.',
    'about.p3':'In my early twenties, I began focusing more deeply on film production, visual language, cinematography, editing and visual design. Many projects started privately as a way to test new techniques, make mistakes and learn from them.',
    'about.p4':'Over the years I have built most of my skills independently and through self-directed learning. Through personal projects, practical experience and continuous work in filmmaking, I have developed skills across different areas of production.',
    'about.p5':'My goal is not only to develop an idea, but to take it as independently as possible from the first concept to the finished film.',
    'about.onset':'ON SET / 2022','about.note':'SHOT · CUT · GRADE · REPEAT',
    'bio.job':'ROLE','bio.jobText':'Director · Filmmaker · Video Editor · Videographer','bio.work':'WORKFLOW','bio.workText':'Self-taught · Independent Production','bio.fields':'FIELDS','bio.fieldsText':'Screenwriting · Concept · Directing · Camera · Editing · Color Grading · VFX · Postproduction','bio.other':'OTHER WORK','bio.otherText':'Documentary · Commercial · Sports · Social Media','bio.instagram':'INSTAGRAM','bio.contact':'CONTACT',
    'kino.archive':'ARCHIVE / 005','kino.heading':'The<br><i>Films.</i>','kino.intro':'Short films, experiments and independent cinema — all in one place.',
    'manifesto.eyebrow':'STATEMENT','manifesto.quote':'“HORROR<br><i>LIVES HERE.</i>”','manifesto.text':'Short films, experiments and independent cinema — all in one place.',
    'contact.eyebrow':'CONTACT & BOOKING','contact.heading':'Let\'s make<br><i>something.</i>','contact.text':'For filmmaking, directing, creative projects, collaborations and booking:','contact.instagram':'INSTAGRAM ↗','contact.book':'BOOK CHRIS STORM <span>↗</span>',
    'footer.copy':'© 2026 Chris Storm','footer.right':'Independent Cinema / Germany','modal.close':'Close'
  }
};

const films = [
  {title:'KILL THE BOOGEYMAN',year:'2025 · ca. 40 Min.',type:'Horrorfilm',id:'tKlETFiQpdA',desc:{de:'Rund 40-minütiger Horrorfilm und bisher umfangreichstes veröffentlichtes Filmprojekt. Produktion über ungefähr ein Jahr; veröffentlicht auf YouTube.',en:'Around 40-minute horror film and the largest published film project so far. Produced over roughly one year and released on YouTube.'}},
  {title:'HALLOWEEN',year:'2023',type:'Fan Film',id:'pPvz3jh9_xI',desc:{de:'Stärker auf eine vollständige Kurzfilmproduktion ausgerichteter Horrorfilm. Auf YouTube veröffentlicht und rund 50.000 Aufrufe erreicht.',en:'A horror fan film focused on a more complete short-film production. Released on YouTube and reached around 50,000 views.'}},
  {title:'I WANT TO BELIEVE',year:'2022 · ca. 18 Min.',type:'Dokumentation',id:'PAT3wTM-Xy0',desc:{de:'Rund 18-minütige Dokumentation und Einstieg in die eigenständige Produktion längerer dokumentarischer Inhalte.',en:'Around 18-minute documentary and an early step into independently producing longer-form documentary content.'}},
  {title:'ROOM 237',year:'2020',type:'Kurzfilm',id:'A59MfZ2HjjY',desc:{de:'Schwarz-Weiß-Kurzfilm und erster online veröffentlichter eigener Film.',en:'Black-and-white short film and the first original film released online.'}},
  {title:'Green Fireballs: Das UFO-Rätsel von New Mexico',year:'2026 · Signal Null',type:'Dokumentation',id:'sMLgfzniKLk',desc:{de:'Dokumentarisches Projekt über mysteriöse UFO-/UAP-Akten und die Green-Fireballs-Thematik von New Mexico.',en:'Documentary project about mysterious UFO/UAP files and the Green Fireballs story of New Mexico.'}}
];

let currentLang=localStorage.getItem('chrisStormLang') || 'de';
const rail=document.getElementById('filmRail');
const modal=document.getElementById('playerModal');
const frame=document.getElementById('playerFrame');
const title=document.getElementById('playerTitle');
const meta=document.getElementById('playerMeta');
const description=document.getElementById('playerDescription');

function renderFilms(){
  rail.innerHTML='';
  films.forEach(film=>{
    const card=document.createElement('article'); card.className='card';
    card.innerHTML=`<div class="thumb" style="background-image:linear-gradient(180deg,transparent 35%,#000d),url('https://i.ytimg.com/vi/${film.id}/hqdefault.jpg')"></div><div class="card-body"><div class="badge">${film.type}</div><h3>${film.title}</h3><p>${film.year}</p></div>`;
    card.addEventListener('click',()=>openPlayer(film)); rail.appendChild(card);
  });
}
function applyLanguage(lang){
  currentLang=lang; localStorage.setItem('chrisStormLang',lang); document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key]!==undefined) el.innerHTML=translations[lang][key];});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(translations[lang][key]!==undefined) el.innerHTML=translations[lang][key];});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const key=el.dataset.i18nAria;if(translations[lang][key]!==undefined) el.setAttribute('aria-label',translations[lang][key]);});
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  if(modal.classList.contains('open')){const film=films.find(f=>f.title===title.textContent);if(film) description.textContent=film.desc[lang];}
}
function openPlayer(film){
  frame.src=`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`;
  title.textContent=film.title; meta.textContent=`${film.type} · ${film.year}`; description.textContent=film.desc[currentLang];
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closePlayer(){frame.src='';modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closePlayer));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePlayer()});
document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
renderFilms(); applyLanguage(currentLang);
