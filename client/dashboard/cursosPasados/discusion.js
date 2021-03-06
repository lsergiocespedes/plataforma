var tiempo = new ReactiveVar();
Template.discusion.events({
	'click .btnLike': function(){
		Meteor.call('votarPregunta', this._id);
	},
	'click .btnDisLike': function(){
		Meteor.call('cancelarVotacion', this._id);
	},
	'click .btnAnswer': function(){
		var idPregunta = this._id;
		$('#answers-'+idPregunta).show(1000);
		$('#btn-answer-'+idPregunta).removeClass('btnAnswer');
		$('#btn-answer-'+idPregunta).addClass('btnNotAnswer');
	},
	'click .btnNotAnswer': function(){
		var idPregunta = this._id;
		$('#answers-'+idPregunta).hide(1000);
		$('#btn-answer-'+idPregunta).removeClass('btnNotAnswer');
		$('#btn-answer-'+idPregunta).addClass('btnAnswer');
	}
});

Template.discusion.helpers({
	listaPreguntas: function(){
		return Preguntas.find();
	},
	autorPregunta: function(){
		return Meteor.users.findOne({_id : this.idUsuario});
	},
	moment(fecha){
		tiempo.set(moment(fecha).fromNow());
		return tiempo.get();
	},
	votosPregunta: function(){
		return VotosPreguntas.find({idPregunta:this._id}).count();
	},
	votado: function(){
		var voto = VotosPreguntas.find({$and:[
			{idUsuario : Meteor.userId()},
			{idPregunta : this._id}
			]}).count();
		if(voto > 0){
			return true;
		}
		return false;
	},
	cantRespuestas: function(){
		return Respuestas.find({idPregunta:this._id}).count();
	}
});