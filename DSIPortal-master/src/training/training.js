(function() {
'use strict';

  angular
    .module('training')
    .controller('Training', Training);

  function Training() {
    var vm = this;
    
    vm.goToUrl = goToUrl;

    activate();

    function goToUrl(url){
      window.open(url, '_blank');
    }

    function activate() { }
  }
})();