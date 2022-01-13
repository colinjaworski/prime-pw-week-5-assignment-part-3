console.log('***** Music Collection *****')

let collection = []
console.log('collection of music', collection);

function addToCollection(title, artest, yearPublished){

  const album = {
    title:title, artest:artest, yearPublished:yearPublished
  }

  collection.push(album);

  return addToCollection

}
addToCollection('red', 'tSwift', '2012');

console.log('collection array', collection);
