Cursos = new Mongo.Collection('cursos');
var cursosSchema = new SimpleSchema({
	titulo: {
		type: String
	},
	autor: {
		type: String
	},
	descripcion: {
		type: String
	},
	inicio:{
		type: Date
	}
});
Cursos.attachSchema(cursosSchema);