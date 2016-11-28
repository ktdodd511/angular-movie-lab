angular
  .module('movieApp', [])
  .controller('MovieController', MovieController);

  function MovieController () {

    var vm = this;

    vm.moviesToWatch = [
      {
        title: 'Fantastic Beasts and Where to Find Them',
        releaseDate: 2016
      },
      {
        title: 'Malaria',
        releaseDate: 2016
      },
      {
        title: 'The Lion King',
        releaseDate: 1994
      },
      {
        title: 'Aladdin',
        releaseDate: 1992
      }
    ];
    console.log(vm);

    function addMovie () {
      vm.text = '';
      vm.submit = function() {
        if (vm.text) {
          vm.moviesToWatch.push(vm.text);
          vm.text = '';
        };
      }
    }
  };
