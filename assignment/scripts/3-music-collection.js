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

addToCollection('Prisencolinensinainciusol (single)', 'Adriano Celentano', '1972');
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
addToCollection('Someone Great', 'LCD Soundsystem', '2007')

console.log('collection array', collection);

function showCollection(collection){
  console.log('number of items in collection array', collection.length);
  // for (let i = 0; i < collection.length; i++) {
  //   console.log(album.title);
  // }
  for (let item of collection){
    console.log(item.title, 'by', item.artist, ', published in', item.yearPublished);
  }
}
showCollection(collection)

function findByArtist(artist){
  let array1 = [];
  for (let item of collection){
    if (item.artist === artist) {
      array1.push(item)
    }
    // else {
    //   return 'empty array'
    // }
  }
  return array1
}
console.log(findByArtist('skjfhbv'));
console.log(findByArtist('LCD Soundsystem'));
console.log(findByArtist('Borns'));
