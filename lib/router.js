Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'home',
  action: function() {
    this.render('home');
  }
});