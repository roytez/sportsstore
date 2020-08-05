angular.module("sportsStoreAdmin")
    .constant("productUrl", "http://localhost:5500/products/")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("productCtrl", function ($scope, $resource, productUrl) {
        $scope.productsResource = $resource(productUrl + "id:", { id: "@id" });
        $scope.listProducts = function () {
            $scope.products = $scope.productsResource.query();
        }

    })
