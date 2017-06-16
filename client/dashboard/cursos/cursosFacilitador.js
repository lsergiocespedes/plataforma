Template.chatWidget.onCreated(function () {
  var self = this;
  self.subscribe("cursos");
});

Template.cursosFacilitador.helpers({
	cursosList: function () {
		return Cursos.find();
	}
});