var path = Npm.require('path');
var fs = Npm.require('fs');
var process = Npm.require('process');
var mkdirp = Npm.require('mkdirp');
var ncp = Npm.require('ncp');

var exampleFolder = path.resolve('./example');

function copyFile(src, dest) {
  var content = fs.readFileSync(src, 'utf8');
  fs.writeFileSync(dest, content);
}

console.log('cwd: ' + process.cwd());
// create the examples folder if it doesn't exist
if(!fs.existsSync(exampleFolder)){
  // Create the example folder
  mkdirp(exampleFolder);

  // Copy the example files we need
  copyFile('./packages/mup/.npm/package/node_modules/mup/example/mup.json', path.join(exampleFolder, 'mup.json'));
  copyFile('./packages/mup/.npm/package/node_modules/mup/example/settings.json', path.join(exampleFolder, 'settings.json'));
}

