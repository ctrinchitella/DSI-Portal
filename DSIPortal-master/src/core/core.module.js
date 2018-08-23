(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 
        'ui.router',
        'ngTouch',
        'smart-table',
        'ngSanitize',
        'ngToast',
        'angular-carousel',
        
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router'

    ]);
})();
