// Use Angular module function to construct module.
// Takes two arguments: 
    // 1) string referring to app name defined in ng-app directive. 
    // 2) Array of module dependencies (empty in example).
// Note that we are storing our module in a variable. Will use it later to reference the module.

angular
    .module("myApp",[]);

// Tell angular to use controller.
// Controller method takes two arguments:
    // 1) String representation of controller name used to identify it in the view.
    // 2) The function string representation will point to.

angular
    .module("myApp")
    .controller("MyController", myController); // Make sure function is the same letter case.

angular
    .module("myApp")
    .controller("CtrlOne", ctrlOne);

angular
    .module("myApp")
    .controller("CtrlTwo", ctrlTwo);


// Define controller function and give it a property named "greeting".
// When you make a controller, you pass the $scope object as an argument. 

function myController() {
    this.greeting = "Well, hello.";
    this.name = "Jay";
}

function ctrlOne() {
    this.greeting = "Hello from CtrlOne!";
}

function ctrlTwo() {
    this.greeting = "Hello from CtrlTwo!";
}