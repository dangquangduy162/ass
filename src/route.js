var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/trang-chu", {
        templateUrl: "./pages/trang-chu.html",
        controller: SanPhamConTroller,
    }).when("/san-pham", {
        templateUrl: "./pages/san-pham.html"
    }).when("/gioi-thieu", {
        templateUrl: "./pages/gioi-thieu.html"
    }).when("/su-kien", {
        templateUrl: "./pages/su-kien.html"
    })
    .otherwise({
        redirectTo: "/trang-chu"
    })
})