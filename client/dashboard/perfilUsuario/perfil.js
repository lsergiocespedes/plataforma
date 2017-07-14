Template.perfil.helpers({
	datosUsuario: function(){
		return Meteor.user();
	},
	avatarExiste: function(){
		//var avatar = Meteor.user().profile.avatar;
		/*if(typeof(Meteor.user().profile.avatar) !== null){
			return true;
		}
		return false;*/
	}
});


Template.perfil.events({
	'submit #avatar': function (e) {
		e.preventDefault();
		var target = e.target;
		//console.log(target.imagen.files[0]);
		var upload = ImagenesAvatar.insert({
			file: target.avatar.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.avatar": upload.config.fileId}});
	}
});
