(function() {
    'use strict';

    angular
        .module('mc437App')
        .controller('SkillDetailController', SkillDetailController);

    SkillDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Skill'];

    function SkillDetailController($scope, $rootScope, $stateParams, previousState, entity, Skill) {
        var vm = this;

        vm.skill = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('mc437App:skillUpdate', function(event, result) {
            vm.skill = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
