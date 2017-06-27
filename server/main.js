import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('datosUsuario', function(){
		return Meteor.users.find({_id: this.userId});
	});
	publishComposite('listaCursos', {
		find(){
			return Cursos.find();
		},
		children:[
			{
				find(curso){
					return Meteor.users.find(
						{_id: curso.autor}
					);
				}
			}
		]
	});
	/*---- Methods ----*/
	Meteor.methods({
		'crearCurso': function(curso){
			var idCurso = Cursos.insert(curso);
			return idCurso;
		}
	});
});
