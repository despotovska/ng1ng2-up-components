
app.config(function($routeProvider) {

  // for some reason, sometimes it takes a REALLY long time to route to the 2nd ng1 route you choose.
  // it's very weird
  
  $routeProvider
    
    .when('/home', {
      template: '<home ></home>',
    })
    .when('/users', {
      template: '<users></users>',
    })
    // it's strange that an ng1 route is required for any ng2 routes, but this appears to be the case
    // it won't work when this is removed.
    // .when('/settings', {
    //   template: '<settings></settings>',
    // })
    .otherwise('/home')
})