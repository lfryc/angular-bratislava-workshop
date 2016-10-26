angular
  .module('app.todoTextInput')
  .directive('autofocus', function () {
    return function autofocus(scope, el) {
      setTimeout(function () {
        el[0].focus();
      }, 0);
    };
  });


