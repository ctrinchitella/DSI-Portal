(function () {
    'use strict';

    angular
        .module('training')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'training',
                config: {
                    name: 'training',
                    abstract: true,
                    templateUrl: 'dist/views/training/training.html',
                    controller: 'Training',
                    controllerAs: 'vm'
                }
            },{
                state: 'training.brownbag',
                config: {
                    name: 'brownbag',
                    url: '/Training',
                    templateUrl: 'dist/views/training/brownbag.html',
                    controller: 'Brownbag',
                    controllerAs: 'vm'
                }
            },{
                state: 'training.newbrownbag',
                config: {
                    name: 'brownbag',
                    url: '/Training/NewBrownbag',
                    templateUrl: 'dist/views/training/newBrownbag.html'
                }
            },{
                state: 'training.calendar',
                config: {
                    name: 'calendar',
                    url: '/Training/Calendar',
                    templateUrl: 'dist/views/training/calendar.html'
                }
            }
        ];
    }

})();