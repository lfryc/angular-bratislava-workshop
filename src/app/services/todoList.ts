class TodoList {

  list;
  filteredList;
  filterState = 'all';

  constructor() {
    this.filteredList = this.list = [];
  }

  add(description) {
    var task = new Task(description);
    this.list.push(task);
    this.$refreshList();

    return task;
  }

  toggleAll() {
    const complete = this.countPending() !== 0;
    this.list = this.list.map(function (task) {
      task.complete = !!complete;
      return task;
    });

    this.$filter();
  }

  toggleStatus(task) {
    task.complete = !task.complete;
    this.$filter();
  }

  remove(item) {
    this.list = this.list.filter(function (todo) {
      return todo !== item
    });
    this.$filter();
  }

  clearCompleted() {
    this.list = this.list.filter(function (todo) {
      return !todo.complete
    });
    this.$filter();
  }

  showCompleted() {
    this.filterState = 'completed';
    this.$filter();
  }

  showActive() {
    this.filterState = 'active';
    this.$filter();
  }

  showAll() {
    this.filterState = 'all';
    this.$filter();
  }

  $filter(filterState = this.filterState) {
    const showAll = ('all' === filterState);
    const showCompleted = 'completed' === filterState;

    this.filteredList = this.list.filter(function (item) {
      return (showAll || showCompleted === item.complete)
    });
  }

  countPending() {
    return this.list.filter(function (item) {
      return !item.complete
    }).length;
  }

  countCompleted() {
    return this.list.filter(function (item) {
      return item.complete;
    }).length;
  }

  hasTasks() {
    return 0 !== this.list.length;
  }

  $refreshList() {
    this.$filter();
  }

}

function Task(description) {
  this.id = guid();
  this.description = description;
  this.complete = false;

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
  }
}

angular
    .module('app.services', [])
    .service('todoList', TodoList);
