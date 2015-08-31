Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'home',
  action: function() {
    this.render('home');
  }
});

Router.route('/project/add', {
  name: 'project.add',
  action: function(){
    this.render('projectsAdd');
  }
});

Router.route('/project/:appName', {
  name: 'project.edit',
  action: function(){
    this.render('projectsEdit');
  },
  data: function(){
    return Projects.findOne({name:this.params.name});
  } 
});