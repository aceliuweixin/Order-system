(function() {
    'use strict';

    angular
        .module('app.parts.design', ['app.custom']);

    try{
        angular.module('app.custom');
    } catch(e){
        angular.module('app.custom',[]);
    }
})();
