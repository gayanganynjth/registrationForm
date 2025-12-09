$(document).ready(function() {
    $("form[name='registration']").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            rpassword: {
                required: true,
                equalTo: "#password"
            }
        },

        messages: {
            name: {
                required: "Please enter your name."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 5 characters.",
            },
            rpassword: {
                required: "Please confirm your password.",
                equalTo: "Please Re-enter the password."
            }
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element); // place error messages below the input
        }
    });
});