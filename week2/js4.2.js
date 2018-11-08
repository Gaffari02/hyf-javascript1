let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');  //2.1
console.log(favoriteAnimals); // 2.2

favoriteAnimals.splice(1, 0, 'meerkat'); //2.3
console.log('meerkat will be placed to the 1st index') //2.4
console.log(favoriteAnimals); //2.5

console.log(favoriteAnimals.length);
console.log('The array has a length of:' + favoriteAnimals.length); // 2.6

favoriteAnimals.splice(3,1); //2.7
console.log(favoriteAnimals); // 2.8

favoriteAnimals.indexOf('meerkat'); // 2.9
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat')); // 2.10



