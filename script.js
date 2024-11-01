const genesis = document.getElementById('gen');
const exodus = document.getElementById('exo');
const leviticus = document.getElementById('lev');
const deutoronomy = document.getElementById('deu');
const joshua = document.getElementById('jos');
const judges = document.getElementById('jud');
const ruth = document.getElementById('rut');
const oneSamuel = document.getElementById('sam1');
const twoSamuel = document.getElementById('sam2');
const oneKings = document.getElementById('kin1');
const twoKings = document.getElementById('kin2');
const oneChronicles = document.getElementById('chron1');
const twoChronicles = document.getElementById('chron2');
const ezra = document.getElementById('ezr');
const nehmaiah = document.getElementById('neh');
const esther = document.getElementById('est');
const job = document.getElementById('job');
const psalms = document.getElementById('psa');
const proverbs = document.getElementById('pro');
const ecclesiastes = document.getElementById('ecc');
const songsOfSongs = document.getElementById('son');
const isaiah = document.getElementById('isa');
const jermiah = document.getElementById('jer');
const lamentations = document.getElementById('lam');
const ezekiel = document.getElementById('eze');
const daniel = document.getElementById('dan');
const hosea = document.getElementById('hos');
const joel = document.getElementById('joe');
const amos = document.getElementById('amo');
const obadiah = document.getElementById('oba');
const jonah = document.getElementById('jon');
const micah = document.getElementById('mic');
const nahum = document.getElementById('nah');
const habakkuk = document.getElementById('hab');
const zephaniah = document.getElementById('zep');
const haggai = document.getElementById('hag');
const zechariah = document.getElementById('zec');
const malachi = document.getElementById('mal');
const matthew = document.getElementById('mat');
const mark = document.getElementById('mar');
const luke = document.getElementById('luk');
const john = document.getElementById('joh');
const acts = document.getElementById('act');
const romans = document.getElementById('rom');
const oneCorinthians = document.getElementById('cor1');
const twoCorinthians = document.getElementById('cor2');
const galatians = document.getElementById('gal');
const ephesians = document.getElementById('eph');
const philipians = document.getElementById('phi');
const colossians = document.getElementById('col');
const oneThessalonians = document.getElementById('the1');
const twoThessalonians = document.getElementById('the2');
const oneTimothy = document.getElementById('tim1');
const twoTimothy = document.getElementById('tim2');
const titus = document.getElementById('titus');
const philemon = document.getElementById('phil');
const hebrews = document.getElementById('heb');
const james = document.getElementById('jam');
const onePeter = document.getElementById('pet1');
const twoPeter = document.getElementById('pet2');
const oneJohn = document.getElementById('joh1');
const twoJohn = document.getElementById('joh2');
const threeJohn = document.getElementById('joh3');
const jude = document.getElementById('jude');
const revelation = document.getElementById('rev');

let direct = window.location;

let returning = 'none';

// This is what i have to do for all the scriptures
genesis.addEventListener('click', function genesisRD() {
  returning = 'genesis';
  redirect();
});

exodus.addEventListener('click', function exodusRD() {
  returning = 'exodus';
  redirect();
});

leviticus.addEventListener('click', function levitRD() {
  returning = 'leviticus';
  redirect();
});

deutoronomy.addEventListener('click', function deutRD() {
  returning = 'deutoronomy';
  redirect();
});

joshua.addEventListener('click', function joshRD() {
  returning = 'joshua';
  redirect();
});

judges.addEventListener('click', function judgRD() {
  returning = 'judges';
  redirect();
});

ruth.addEventListener('click', function ruthRD() {
  returning = 'ruth';
  redirect();
});

oneSamuel.addEventListener('click', function oneSamRD() {
  returning = 'oneSam';
  redirect();
});

twoSamuel.addEventListener('click', function twoSamRD() {
  returning = 'twoSam';
  redirect();
});

oneKings.addEventListener('click', function oneKings() {
  returning = 'oneKings';
  redirect();
});

twoKings.addEventListener('click', function twoKings() {
  returning = 'twoKings';
  redirect();
});

oneChronicles.addEventListener('click', function oneChron() {
  returning = 'oneChron';
  redirect();
});

twoChronicles.addEventListener('click', function twoChron() {
  returning = 'twoChron';
  redirect();
});

ezra.addEventListener('click', function ezraRD() {
  returning = 'ezra';
  redirect();
});

nehmaiah.addEventListener('click', function nehmiahRD() {
  returning = 'nehmiah';
  redirect();
});

esther.addEventListener('click', function estherRD() {
  returning = 'esther';
  redirect();
});

job.addEventListener('click', function jobRD() {
  returning = 'job';
  redirect();
});

psalms.addEventListener('click', function psalmsRD() {
  returning = 'psalms';
  redirect();
});

proverbs.addEventListener('click', function proverbsRD() {
  returning = 'proverbs';
  redirect();
});

ecclesiastes.addEventListener('click', function ecclesasitesRD() {
  returning = 'ecclesiastes';
  redirect();
});

songsOfSongs.addEventListener('click', function SongOfSongsRD() {
  returning = 'songOfSong';
  redirect();
});

isaiah.addEventListener('click', function isaiahRD() {
  returning = 'isaiah';
  redirect();
});

jermiah.addEventListener('click', function jermiahRD() {
  returning = 'jermiah';
  redirect();
});

lamentations.addEventListener('click', function lamentationsRD() {
  returning = 'lamentations';
  redirect();
});

ezekiel.addEventListener('click', function ezekielRD() {
  returning = 'ezekiel';
  redirect();
});

daniel.addEventListener('click', function danielRD() {
  returning = 'daniel';
  redirect();
});

hosea.addEventListener('click', function hoseaRD() {
  returning = 'hosea';
  redirect();
});

joel.addEventListener('click', function joelRD() {
  returning = 'joel';
  redirect();
});

amos.addEventListener('click', function amosRD() {
  returning = 'amos';
  redirect();
});

obadiah.addEventListener('click', function obadiahRD() {
  returning = 'obadiah';
  redirect();
});

jonah.addEventListener('click', function jonahRD() {
  returning = 'jonah';
  redirect();
});

micah.addEventListener('click', function michaRD() {
  returning = 'micha';
  redirect();
});

nahum.addEventListener('click', function nahumRD() {
  returning = 'nahum';
  redirect();
});

habakkuk.addEventListener('click', function habakkukRD() {
  returning = 'habakkuk';
  redirect();
});

zephaniah.addEventListener('click', function zephaniahRD() {
  returning = 'zephaniah';
  redirect();
});

haggai.addEventListener('click', function haggaiRD() {
  returning = 'haggai';
  redirect();
});

zechariah.addEventListener('click', function ZechariahRD() {
  returning = 'zechariah';
  redirect();
});

malachi.addEventListener('click', function malachiRD() {
  returning = 'malachi';
  redirect();
});

matthew.addEventListener('click', function matthewRD() {
  returning = 'matthew';
  redirect();
});

mark.addEventListener('click', function markRD() {
  returning = 'mark';
  redirect();
});

luke.addEventListener('click', function lukeRD() {
  returning = 'luke';
  redirect();
});

john.addEventListener('click', function johnRD() {
  returning = 'john';
  redirect();
});

acts.addEventListener('click', function actsRD() {
  returning = 'acts';
  redirect();
});

romans.addEventListener('click', function romansRD() {
  returning = 'romans';
  redirect();
});

oneCorinthians.addEventListener('click', function oneCorinthRD() {
  returning = 'oneCorinthians';
  redirect();
});

twoCorinthians.addEventListener('click', function twoCorinthRD() {
  returning = 'twoCorinthians';
  redirect();
});

galatians.addEventListener('click', function galatiansRD() {
  returning = 'galatians';
  redirect();
});

ephesians.addEventListener('click', function ephesiansRD() {
  returning = 'ephesians';
  redirect();
});

philipians.addEventListener('click', function philipiansRD() {
  returning = 'philipians';
  redirect();
});

colossians.addEventListener('click', function colossiansRD() {
  returning = 'colossians';
  redirect();
});

oneThessalonians.addEventListener('click', function oneThessaloniansRD() {
  returning = 'oneThessalonians';
  redirect();
});

twoThessalonians.addEventListener('click', function twoThessaloniansRD() {
  returning = 'twoThessalonians';
  redirect();
});

oneTimothy.addEventListener('click', function oneTimothyRD() {
  returning = 'oneTimothy';
  redirect();
});

twoTimothy.addEventListener('click', function twoTimothyRD() {
  returning = 'twoTimothy';
  redirect();
});

titus.addEventListener('click', function titusRD() {
  returning = 'titus';
  redirect();
});

philemon.addEventListener('click', function philemonRD() {
  returning = 'philemon';
  redirect();
});

hebrews.addEventListener('click', function hebrewsRD() {
  returning = 'hebrews';
  redirect();
});

james.addEventListener('click', function jamesRD() {
  returning = 'james';
  redirect();
});

onePeter.addEventListener('click', function onePeterRD() {
  returning = 'onePeter';
  redirect();
});

twoPeter.addEventListener('click', function twoPeterRD() {
  returning = 'twoPeter';
  redirect();
});

oneJohn.addEventListener('click', function oneJohnRD(){
  returning = 'oneJohn';
  redirect()
})

twoJohn.addEventListener('click', function twoJohnRD() {
  returning = 'twoJohn';
  redirect();
});

threeJohn.addEventListener('click', function threeJohnRD() {
  returning = 'threeJohn';
  redirect();
});

jude.addEventListener('click', function judeRD() {
  returning = 'jude';
  redirect();
});

revelation.addEventListener('click', function revelationRD() {
  returning = 'revelation';
  redirect();
});

function redirect() {
  direct.href = returning + '.html';
  returning = 'none';
}

//fetch


