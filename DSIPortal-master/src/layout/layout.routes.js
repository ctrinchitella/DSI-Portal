(function () {
    'use strict';

    angular
        .module('layout')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    name: 'home',
                    url: '/',
                    templateUrl: 'dist/views/layout/layout.html',
                    controller: 'Layout',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();