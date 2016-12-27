// Use Angular module function to construct module.
angular
    .module("myApp",[]);

// Tell angular to use controller.
angular
    .module("myApp")
    .controller("MyController", myController);

// Define controller.
function myController() {
    this.name = "Thuy";
}
