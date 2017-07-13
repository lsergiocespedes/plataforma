var tiempo = new ReactiveVar();
Template.respuestas.events({
	'submit form': function (e) {
		e.preventDefault();
		var target = e.target;
		var respuesta = {
			idPregunta : target.idPregunta.value,
			idUsuario : Meteor.userId(),
			texto : target.respuesta.value,
			createdAt : new Date(),
		}
		Meteor.call('insertarRespuesta', respuesta);
		target.respuesta.value = '';
	}
});

Template.respuestas.helpers({
	respuestas : function(idMaterial){
		return Respuestas.find({idPregunta:idMaterial});
	},
	autorRespuesta : function(){
		return Meteor.users.findOne({_id : this.idUsuario});
	},
	moment: function(fecha){
		tiempo.set(moment(fecha).fromNow());
		return tiempo.get();
	}
});