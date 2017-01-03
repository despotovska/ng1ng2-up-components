app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
        template: '<home ></home>',
    })
        .when('/parent', {
        template: '<parent></parent>',
    })
        .otherwise('/home');
});
//# sourceMappingURL=routes-old.js.map