console.log('***** Music Collection *****')

let collection = []
console.log('collection of music', collection);
let album = {}

function addToCollection(title, artist, yearPublished){

  album = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  }

  collection.push(album);

  return album

}

addToCollection('Red', 'Taylor Swift', '2012');
console.log('album 1 ', album);
addToCollection('Dopamine', 'Borns', '2015');
console.log('album 2 ', album);
addToCollection('Somebody Else (single)', 'The 1975', '2016');
console.log('album 3', album);
addToCollection('Too Late Now', 'Wet Leg', '2021');
console.log('album 4', album);
addToCollection('This is Happening', 'LCD Soundsystem', '2010');
console.log('album 5', album);
addToCollection('Record Player (single)', 'Daisy The Great', '2021');
console.log('album 6', album);
addToCollection('Plural', 'Electric Guest', '2017');
console.log('album 7', album);

console.log('collection array', collection);
