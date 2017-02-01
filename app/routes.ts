
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
    .when('/', {
      template: '<home ></home>',
    });


    // .when('/settings', {
    //   template: '<settings></settings>',
    // })

    // !!!!!!!!!!!!!
    // You cannot have an otherwise section. If so, then ng2 routing doesn't work with ng1 routing
    // !!!!!!!!!!!!!
    // .otherwise('/home')
})