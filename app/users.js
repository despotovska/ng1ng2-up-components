angular.module('app').component('users', {
    template: '<h1>Users</h1><div ng-repeat="user in $ctrl.users">{{user.name}}</div>',
    controller: function () {
        this.users = [
            { name: "Victor" },
            { name: "Joe" },
            { name: "John" }
        ];
    }
});
//# sourceMappingURL=users.js.map