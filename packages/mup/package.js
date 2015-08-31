Package.describe({
  name: 'mizan:mup',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package wrapper for meteor up',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "mup":"0.11.1",
  "process": "0.11.1"
});

Package.registerBuildPlugin({
  name: "initializing-mup-support",
  sources: [
    "plugins/init_mup.js"
  ],
  npmDependencies: {
    "mkdirp": "0.5.1",
    "ncp":"2.0.0",
    "process":"0.11.1"
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('server/mup.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mizan:mup');
  api.addFiles('mup-tests.js');
});
