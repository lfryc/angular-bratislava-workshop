angular
  .module('app.services', [])
  .service('todoList', TodoList);


function TodoList() {

  this.filterState = 'all';
  this.filteredList = this.list = [];

  this.add = add;
  this.toggleAll = toggleAll;
  this.toggleStatus = toggleStatus;
  this.remove = remove;
  this.clearCompleted = clearCompleted;
  this.showCompleted = showCompleted;
  this.showActive = showActive;
  this.showAll = showAll;
  this.$filter = $filter;
  this.countPending = countPending;
  this.countCompleted = countCompleted;
  this.hasTasks = hasTasks;
  this.$refreshList = $refreshList;

  function add(description) {
    var task = new Task(description);
    this.list.push(task);
    this.$refreshList();

    return task;
  }

  function toggleAll() {
    const complete = this.countPending() !== 0;
    this.list = this.list.map(function (task) {
      task.complete = !!complete;
      return task;
    });

    this.$filter();
  }

  function toggleStatus(task) {
    task.complete = !task.complete;
    this.$filter();
  }

  function remove(item) {
    this.list = this.list.filter(function (todo) {
      return todo !== item
    });
    this.$filter();
  }

  function clearCompleted() {
    this.list = this.list.filter(function (todo) {
      return !todo.complete
    });
    this.$filter();
  }

  function showCompleted() {
    this.filterState = 'completed';
    this.$filter();
  }

  function showActive() {
    this.filterState = 'active';
    this.$filter();
  }

  function showAll() {
    this.filterState = 'all';
    this.$filter();
  }

  function $filter(filterState) {
    this.filterState = filterState || this.filterState;
    const showAll = ('all' === this.filterState);
    const showCompleted = 'completed' === this.filterState;

    this.filteredList = this.list.filter(function (item) {
      return (showAll || showCompleted === item.complete)
    });
  }

  function countPending() {
    return this.list.filter(function (item) {
      return !item.complete
    }).length;
  }

  function countCompleted() {
    return this.list.filter(function (item) {
      return item.complete;
    }).length;
  }

  function hasTasks() {
    return 0 !== this.list.length;
  }

  function $refreshList() {
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

