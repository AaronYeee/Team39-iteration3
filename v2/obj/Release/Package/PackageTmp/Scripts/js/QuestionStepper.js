
    $(document).ready(function () {

        // Hide div 2 by default
        $('#Eli-1').show();
            $('#Eli-2').hide();
            $('#Eli-3').hide();
            $('#Eli-4').hide();

            $('#step11').addClass("active");
            $('#step12').removeClass("active");
            $('#step13').removeClass("active");
            $('#step14').removeClass("active");
            $('#step15').removeClass("active");

            $('#step11').removeClass("done");
            $('#step12').removeClass("done");
            $('#step13').removeClass("done");
            $('#step14').removeClass("done");
            $('#step15').removeClass("done");
         


            $('#step11').click(function () {

                $('#Eli-1').show();
                $('#Eli-2').hide();
                $('#Eli-3').hide();
                $('#Eli-4').hide();




                $('#step12').removeClass("active");
                $('#step13').removeClass("active");
                $('#step14').removeClass("active");

                $('#step11').removeClass("done");
                $('#step12').removeClass("done");
                $('#step13').removeClass("done");
                $('#step14').removeClass("done");


            });

            $('#step12').click(function () {
                 $('#Eli-1').hide();
                $('#Eli-3').hide();
                $('#Eli-4').hide();

                $('#Eli-2').show();

                $('#step12').removeClass("done");
                $('#step11').addClass("done");

                $('#step12').addClass("active");

                $('#step13').removeClass("active");
                $('#step14').removeClass("active");


                $('#step13').removeClass("done");
                $('#step14').removeClass("done");


            });

            $('#step13').click(function () {
                 $('#Eli-1').hide();
                $('#Eli-2').hide();
                $('#Eli-4').hide();
                $('#Eli-3').show();

                $('#step12').addClass("active");
                $('#step12').addClass("done");
                $('#step13').addClass("active");

                $('#step14').removeClass("active");
                $('#step13').removeClass("done");
                $('#step14').removeClass("done");





            });

            $('#step14').click(function () {
                $('#Eli-1').hide();
                $('#Eli-2').hide();
                $('#Eli-3').hide();
                $('#Eli-4').show();

                $('#step13').addClass("done");
                
                $('#step14').addClass("active");
                $('#step14').addClass("done");
            });

       
     
        });
