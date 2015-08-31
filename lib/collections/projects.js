Projects = new Mongo.Collection('projects');

var schema = new SimpleSchema({
  appName: {
    type: String,
    label: "Name",
    max: 200
  },
  app: {
    type: String,
    label: "Path"
  },
  setupMongo: {
    type: Boolean,
    label: "Setup Mongo"
  },
  setupNode: {
    type: Boolean,
    label: "Setup Node"
  },
  nodeVersion: {
    type: String,
    label: "Node Version"
  },
  setupPhantom: {
    type: Boolean,
    label: "Setup Phantom"
  },

  servers: {
    type: Array,
    label: "Servers"
  },
  'servers.$': {
    type: Object,
    label: "Server"
  },
  'servers.$.host': {
    type: String,
    label: "Host"
  },
  'servers.$.username': {
    type: String,
    label: "Username"
  },
  'servers.$.pem': {
    type: String,
    label: "PEM"
  },

  // Show a progress bar during the upload of the bundle to the server. 
  // Might cause an error in some rare cases if set to true, for instance in Shippable CI
  "enableUploadProgressBar": {
    type: Boolean,
    label: "Enable Upload Progress Bar"
  },

  // Configure environment
  "env": {
    type: Object,
    label: "Env"
  },

  "env.ROOT_URL": {
    type: String
  }

//   // Meteor Up checks if the app comes online just after the deployment
//   // before mup checks that, it will wait for no. of seconds configured below
//   "deployCheckWaitTime": 15
});

Projects.attachSchema(schema);

Projects.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, docs, fields, modifier){
    return true;
  }
});