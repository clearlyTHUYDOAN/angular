$(document).ready(function() {
    console.log("There were no errors loading the page. Let's-a-go!'");
    $("input")
        .keyup(function() {
            var value = $(this).val();
            console.log(value);
            // console.log(this);
            $("p").text(value);
        })
        .keyup(); // Allows text beside input to render before anything is typed.
        // .keypress(); would show text beside input only after you start typing.
        // Without either, text would not show beside input.
})