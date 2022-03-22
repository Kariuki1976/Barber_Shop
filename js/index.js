console.log('I am the barber');

let d = document;

$(document).ready(function(){
    $('#booking').click(function(){
        $('#booked-date').show(function(){
            $('#booking').submit()

        });
           
            
    });
    });

    function submitBooking(){
        let choosenDate = $(document).getElementById('booked-date').val();
        // let submitButton = $(document).getElementById('booking').btn;
        let bookingDate = choosenDate.getDay();

        let y = choosenDate.checked || 0;

        alert('You have scheduled a booking on ' + bookingDate)



        console.log(choosenDate)
        
    }
  

