console.log('I am the barber');

let d = document;

$(document).ready(function() {
    $('#booking').click(function() {
        submitBooking();
        $('#booked-date').show(function() {
            $('#booking').submit()

        });


    });
});

function submitBooking() {
    let choosenDate = d.getElementById('booked-date');
    console.log('yes')
        // let submitButton = $(document).getElementById('booking').btn;
    let bookingDate = choosenDate.getDay;

    // let y = choosenDate.checked || 0;
    console.log(choosenDate.value)
    console.log(choosenDate.checked)

    if (choosenDate.value !== '') {
        alert('You have scheduled a booking on ' + choosenDate.value)
    } else {
        alert('No bookings scheduled');
    }





}

//Form validation

$(document).ready(function() {
    $("form#form").submit(function(event) {
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#subject").val();
        if (name && email) {
            alert(name + ", we have received your message. Thank you for considering us. We shall respond as soon as possible.Big up!!");
        } else {
            alert("Please enter your name and email!");
        }

    });

});