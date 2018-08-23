(function () {
    'use strict';

    angular
        .module('licenses')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'licenses',
                config: {
                    name: 'licenses',
                    abstract: true,
                    templateUrl: 'dist/views/Licenses/licenses.html',
                    controller: 'Licenses',
                    controllerAs: 'vm'
                }
            },{
                state: 'licenses.protocolo',
                config: {
                    name: 'protocolo',
                    url: '/licenses',
                    templateUrl: 'dist/views/Licenses/protocolo.html'
                }
            },{
                state: 'licenses.formulario',
                config: {
                    name: 'formulario',
                    url: '/licenses/formulario',
                    templateUrl: 'dist/views/Licenses/formulario.html'
                }
            }, {
                state: 'licenses.planilla',
                config: {
                    name: 'planilla',
                    url: '/licenses/planilla',
                    templateUrl: 'dist/views/Licenses/planilla.html'
                }
            }

        ];
    }

})();