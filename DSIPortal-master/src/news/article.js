(function() {
'use strict';

    angular
        .module('news')
        .controller('Article', Article);

    function Article($state, $stateParams) {
        var vm = this;
        
        vm.news = {};

        activate();

        ////////////////

        function activate() {
            vm.news = $stateParams.news;
        }
    }
})();