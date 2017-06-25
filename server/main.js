import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('datosUsuario', function(){
		return Meteor.users.find({_id: this.userId});
	});
	/*---- Methods ----*/
	Meteor.methods({
		'crearCurso': function(curso){
			Cursos.insert(curso);
		}
	});
});
