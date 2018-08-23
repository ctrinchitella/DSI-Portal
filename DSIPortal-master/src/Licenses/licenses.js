(function () {
  'use strict';

  angular
    .module('licenses')
    .controller('Licenses', Licenses);

  function Licenses($state) {
    var vm = this;
    vm.goToUrl = goToUrl;
    activate();

    function activate() {
      
    }

    function goToUrl(url){
      window.open(url, '_blank');
    }

  }
})();