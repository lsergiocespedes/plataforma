FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal');
	}
});
var adminSection = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function(context, redirect) {
    if (Meteor.loggingIn() || Meteor.user() ) {
			BlazeLayout.render('dashboard');
		}
		else{
			redirect("/");
		}
  }]
});
adminSection.route('/',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('listaCursos', Meteor.subscribe('listaCursos'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'cursos'});
	}	
});

adminSection.route('/perfil',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'perfil'});
	}	
});