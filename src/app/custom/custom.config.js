(function () {
    'use strict';

    angular
        .module('app.custom')
        .config(pagesConfig);

    /* @ngInject */
    function pagesConfig($stateProvider) {
        $stateProvider
            .state('order-main', {
                url: '/order/main/?reserveTime&seatId',
                params: {
                    seatId: '',
                    reserveTime: ''
                },
                views: {
                    'root': {
                        controller: 'OrderMainCtrl',
                        controllerAs: 'orderMain',
                        templateUrl: 'app/custom/order-main.tmpl.html'
                    }
                },
                resolve: {
                    getSyncTime: _core.syncTime,
                    authData: ['$auth', function ($auth) {
                        return $auth.waitForAuth();
                    }]/*,
                    pageData: ['sitesService', '$lazyLoad', '$stateParams', function (sitesService, $lazyLoad, $stateParams) {
                        return new Promise(function (resolve, reject) {
                            sitesService.onReady().then(function () {
                                $lazyLoad.load('page', $stateParams.pageName).then(function (pageData) {
                                    resolve(pageData);
                                });
                            }).catch(reject);
                        });
                    }]*/
                }
            })
    }
})();
