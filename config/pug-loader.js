const path = require('path');
const fs = require('fs');
const ncp = require('ncp').ncp;

const relativePathToViewsSource = 'src/server/views';
const relativePathToViewsDest = 'lib/server/views';

const viewsSource = path.resolve(__dirname, '..', relativePathToViewsSource);
const viewsDest = path.resolve(__dirname, '..', relativePathToViewsDest);

console.log(viewsSource);
console.log(viewsDest);

ncp(viewsSource, viewsDest, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Pug files are loaded successfully: ${relativePathToViewsSource} -> ${relativePathToViewsDest}`);
});
