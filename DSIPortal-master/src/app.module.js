(function() {
    'use strict';

    angular.module('app', [
        
        'app.core',
        'services',

        /* Features */
        'layout',
        'licenses',
        'rocket',
        'teamMeetings',
        'training',
        'resources',
        'news'
    ]);

})();
