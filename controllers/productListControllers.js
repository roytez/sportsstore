angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCont", 3)
    .controller("productListCtrl", function ($scope, $filter,
        productListActiveClass, productListPageCont) {
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCont;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectedPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
    });