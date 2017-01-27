app.config(function ($routeProvider) {
    // for some reason, sometimes it takes a REALLY long time to route to the 2nd ng1 route you choose.
    // it's very weird
    $routeProvider
        .when('/home', {
        template: '<home ></home>',
    })
        .when('/users', {
        template: '<users></users>',
    })
        .when('/settings', {
        template: '<settings></settings>',
    })
        .otherwise('/home');
});
//# sourceMappingURL=routes.js.map