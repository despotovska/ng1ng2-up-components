app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
        template: '<home ></home>',
    })
        .when('/parent', {
        template: '<parent></parent>',
    })
        .when('/settings', {
        template: '<settings></settings>',
    })
        .otherwise('/home');
});
//# sourceMappingURL=routes.js.map