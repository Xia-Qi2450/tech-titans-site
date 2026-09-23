export var production = {
  name:'Production Team',
  lead:'We make video podcasts and other programmes - discussion-led shows built around the school community, from teacher interviews to student submissions.',
  projects: [
    { slug:'heart', title:'H.E.A.R.T.', status:'active', featured:true,
      blurb:'A discussion series on our school values, with teacher interviews on each one.',
      about:'Each episode takes one school value, unpacks what it means to us as students, then brings in a teacher to give their own perspective on it.',
      formUrl:'',
      episodes:[
        {title:'Honor Draft', state:'aired', synopsis:'Discussion on the school value of Honor. feat. Mr Joe', drive:'1Xy-l75O0-CvFufkqss0jjIULFSBcFsfh'},
        {title:'Honor', state:'production', synopsis:'Honor means high respect, moral integrity, or a public award that shows great appreciation. What does it mean to students and teachers? How is it applied in day-to-day school life? In this episode we will answer all of the above and featuring a special guest.', stage:3, estimatedRelease:'2026-10-13'},
        {title:'Empathy', state:'production', synopsis:'[WIP]', stage:3, estimatedRelease:'2026-10-14'},
        {title:'Accountability', state:'production', synopsis:'[WIP]', stage:2, estimatedRelease:'2026-10-26'},
        {title:'Respect', state:'production', synopsis:'[WIP]', stage:1},
        {title:'Tenacity', state:'production', synopsis:'[WIP]', stage:1},
      ]},
    { slug:'reviewed', title:'REVIEWED', status:'todo', featured:true,
      blurb:'Weekly release reviewing media students send in. Anime and books so far.',
      about:'Students submit a title, we review it on air. Two categories are open - anime and books - with more added as submissions come in.',
      formUrl:'https://forms.gle/REPLACE_REVIEWED_FORM',
      episodes:[{title:'REPLACE - first review', state:'production', synopsis:'REPLACE - planned synopsis.', stage:1}]},
    { slug:'point-taken', title:'Point Taken', status:'todo', featured:true,
      blurb:'Weekly debate on controversial-but-school-appropriate student questions.',
      about:'Students send in a question. We discuss and argue it, award points on the arguments made, then run a one-hour research speedrun on those points before landing on our conclusions.',
      formUrl:'https://forms.gle/REPLACE_POINTTAKEN_FORM',
      episodes:[{title:'REPLACE - first question', state:'production', synopsis:'REPLACE - planned synopsis.', stage:1}]}
  ]
};
