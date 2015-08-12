var childProcess = Npm.require('child_process');
var process = Npm.require('process');
var path = Npm.require('path');
var fs = Npm.require('fs');

var Config = Npm.require('mup/lib/config');
var helpers = Npm.require('mup/lib/helpers');
var ActionsRegistry = Npm.require('mup/lib/actions.js');

Meteor.methods({
  /**
    Initializes Meteor up in the given directory

    @method Mup.init
    @param {String} dirPath The path to the directory you want to initialize for Meteor up
  */
  "Mup.init" : function(dirPath){
    console.log('cwd: ' + process.cwd());
    var destMupJson = path.resolve(dirPath, 'mup.json');
    var destSettingsJson = path.resolve(dirPath, 'settings.json');

    if(fs.existsSync(destMupJson) || fs.existsSync(destSettingsJson)) {
      console.error('A Project Already Exists'.bold.red);
      process.exit(1);
    }

    var exampleMupJson = path.resolve('./npm/mizan_mup/node_modules/mup/example/mup.json');
    var exampleSettingsJson = path.resolve('./npm/mizan_mup/node_modules/mup/example/settings.json');

    copyFile(exampleMupJson, destMupJson);
    copyFile(exampleSettingsJson, destSettingsJson);

    console.log('Empty Project Initialized!'.bold.green);

    function copyFile(src, dest) {
      var content = fs.readFileSync(src, 'utf8');
      fs.writeFileSync(dest, content);
    }
  }
});