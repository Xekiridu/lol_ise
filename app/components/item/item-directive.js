'use strict';

angular.module('appLolIse.item.item-directive', [])

.directive('item', [function() {
    var version = '6.24.1';
    var url = "http://ddragon.leagueoflegends.com/cdn/"+version+"/img";

    return {
        link: function(scope){
            scope.url = url;
        },
        restrict: 'E',
        scope: {
            item: '=value'
        },
        template: '<div class="ise-item"><div style="background-image: url({{url + \'/sprite/\' + item.image.sprite}}); background-position: {{item.image.x}}px {{item.image.y}}px;"/></div>'
    }
}]);
