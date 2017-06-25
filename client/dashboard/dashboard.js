Template.dashboard.helpers({
	usuario: function () {
		return Meteor.user();
	},
	ready: function(){
		return FlowRouter.subsReady('datosUsuario');
	},
	tituloHeader: 'Cursos'
});
Template.dashboard.events({
	'click #linkSalir': function (e) {
		e.preventDefault();
		Meteor.logout();
		FlowRouter.go("/");
	}
});
