(function () {
    'use strict';

    angular
        .module('teamMeetings')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'teamMeetings',
                config: {
                    name: 'teamMeetings',
                    url: '/teamMeetings',
                    templateUrl: 'dist/views/TeamMeetings/teamMeetings.html',
                    controller: 'TeamMeetings',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();