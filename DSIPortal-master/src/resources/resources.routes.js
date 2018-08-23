(function () {
    'use strict';

    angular
        .module('resources')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'resources',
                config: {
                    name: 'resources',
                    url: '/resources',
                    templateUrl: 'dist/views/resources/resources.html',
                    controller: 'Resources',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();