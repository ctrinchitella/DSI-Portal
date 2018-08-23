(function () {
    'use strict';

    angular
        .module('rocket')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'rocket',
                config: {
                    name: 'rocket',
                    url: '/rocketDownload',
                    templateUrl: 'dist/views/rocket/rocket.html',
                    controller: 'Rocket',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();