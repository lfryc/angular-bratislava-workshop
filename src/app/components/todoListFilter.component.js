angular
  .module('app.components')
  .component('todoListFilter', {
    bindings: {
      onFilter: '&',
      filterState: '='
    },
    template: require('./todoListFilter.component.html'),
    controller: TodoListFilter,
    controllerAs: 'vm'
  });


function TodoListFilter() {

  this.filter = filter;


  function filter(state) {
    this.onFilter({state: state});
  }
}
