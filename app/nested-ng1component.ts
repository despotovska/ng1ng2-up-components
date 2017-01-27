angular.module('app').component('nested', {
  template: '<h2>I am a nested ng1 component {{$ctrl.message}}<h2>',
  bindings: {
  },
  controller: function() {
    this.message = "baby!";
  }
});