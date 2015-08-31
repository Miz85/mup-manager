Meteor.subscribe('projectsList');

Template.projectsList.helpers({
  projects: function(){
    return Projects.find({});
  }
});

Template.projectsList.events({
  'click a#setup-server': function(event){
    event.preventDefault();

    var projectId = $(event.target).siblings('input').val();
    var projectConfig = Projects.findOne({_id: projectId}, {_id:0});

    projectConfig.servers.forEach(function(server){
      server.os = server.os || 'linux';
    });
    
    Meteor.call('Mup.setupServer', projectConfig, function(error, result){
      if(error){
        throw new Error(error);
      }
    });
  }
});