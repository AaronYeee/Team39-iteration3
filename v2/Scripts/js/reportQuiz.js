$(document).ready(function () {
    
    var radioValue = null;
    var brithinfo = null;
    var Ready = null;
    var visaType = null;
    var kinderType = null;
    var suburb = [];
    var postcode = null;

    $("#requizzz").hide();
    $("#greetingCH").hide();
    $("#greetingUS").hide();
    $("#greetingBrit").hide();
    $("#greetingFilip").hide();
    $("#greetingGerman").hide();
    $("#greetingIndia").hide();
    $("#greetingIndone").hide();
    $("#greetingMalay").hide();
    $("#greetingSingap").hide();
    $("#greetingVietna").hide();
     $("#greetingSri").hide();
    $("#greetingAfri").hide();
    $("#greetingOther").hide();
    
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
    $("#Q5").hide();


    $("#support").hide();
    $("#options1").hide(); 
    

    $("#ready4").hide();
    $("#ready41").hide();
    $("#ready3").hide();
    $("#ready31").hide();
    $("#ready2").hide();
    $("#ready100").hide();

    
    $("#privateKinderPie").hide();
    $("#publicKinderPie").hide();
    $("#publicKinderPie1").hide();
    $("#privateKinderPie1").hide();
    $("#unknow").hide();

    $("#rec_table").hide();
    //$("#loadview").hide();


    /*
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
    $("#Q5").hide();
    

    
     
    $("#public-prefer").hide();
    $("#publicKinderPie").hide();
    $("#ready4").hide();
    $("#private-prefer").hide();
    $("#rec_table").hide();
    
    */

    //q1 submite
    $("#next1").click(function () {
        radioValue = $("input[name='options']:checked").val();
        

        if (radioValue == null) {
            alert("Select one option please");
        }
        else{
            /*
            switch (radioValue) {
                case "CH":
                    $("#greetingCH").show();
                    break;
                case "USA":
                    $("#greetingUS").show();
                    break;
                case "Britain":
                    $("#greetingBrit").show();
                    break;
                case "Philip":
                    $("#greetingFilip").show();
                    break;
                case "German":
                    $("#greetingGerman").show();
                    break;
                case "India":
                    $("#greetingIndia").show();
                    break;
                case "Indon":
                    $("#greetingIndone").show();
                    break;
                case "Malay":
                    $("#greetingMalay").show();
                    break;
                case "Sin":
                    $("#greetingSingap").show();
                    break;
                case "Vietnam":
                    $("#greetingVietna").show();
                    break;
                case "Sri":
                    $("#greetingSri").show();
                    break;
                case "Africa":
                    $("#greetingAfri").show();
                    break;
                case "Other":
                    $("#greetingOther").show();
                    break;
                
            }
            */
            
            



            $("#Q1").hide();
            $("#step11").addClass("done");
            $("#step12").addClass("active");


            $("#Q3").hide();
            $("#Q4").hide();
            $("#Q5").hide();

            $("#Q2").show();  




        }
       
    });

    //q2 submite 
    //4月30日
    $("#next2").click(function () {
      
        brithinfo = $("input[name='birthday']").val();
        
        if (brithinfo =="") {
            alert("input correct brithday");
        }
        else {
            var temp = brithinfo.split("-");
            var year = parseInt(temp[0]);
            var month = parseInt(temp[1]);
            var day = parseInt(temp[2]);        
            let [curyear,curdate, curmonth] = (new Date()).toLocaleDateString().split("/");
            //right year <current year
       

            
            if (parseInt(curyear) - year < 0) {

                alert("Input correct brithday");
                return;
            }

            //return kinder type 
            else if (parseInt(curyear) - year >= 6) {
                ready = 100;


            }

            else if ((parseInt(curyear) - year > 4) && (parseInt(curyear) - year < 6)) {
                ready = 4;

            }
            else if ((parseInt(curyear) - year == 4) && (month > 4)) {
                ready = 41;

            }


            else if ((parseInt(curyear) - year == 4) && (month <= 4)) {
                ready = 4;

            }

            else if ((parseInt(curyear) - year == 3) && (month <= 4)) {
                ready = 3;

            }

            else if ((parseInt(curyear) - year == 3) && (month > 4)) {
                ready = 31;

            }
            else {
                ready = 2;
            }


            /*

            switch (ready) {
                case 4:
                    $("#ready4").show();
                    break;
                case 41:
                    $("#ready41").show();
                    break;
                case 3:
                    $("#ready3").show();
                    break;
                case 31:
                    $("#ready31").show();
                    break;
                case 2:
                    $("#ready2").show();
                    break;
                case 100:
                    $("#ready100").show();
                    break;
               

            }
            */

            $("#Q1").hide();
            $("#Q2").hide();
            $("#step12").addClass("done");
            $("#step12").addClass("active");
            $("#step13").addClass("active");
            $("#Q4").hide();
            $("#Q5").hide();

            $("#Q3").show();   

        }
       
    });

    //q2 pre
    $("#previous1").click(function () {

        $("#Q1").show();
        $("#step11").addClass("active");
        $("#step11").removeClass("done");

        $("#Q2").hide();
        $("#step12").removeClass("done");
        $("#step12").removeClass("active");

        
        $("#Q4").hide();
        $("#step14").removeClass("active");
        $("#step14").removeClass("done");
        $("#Q5").hide();
        $("#step15").removeClass("active");
        $("#step15").removeClass("done");
        $("#Q3").hide();
        $("#step13").removeClass("active");
        $("#step13").removeClass("done");

        $("#greetingCH").hide();
        $("#greetingUS").hide();
        $("#greetingBrit").hide();
        $("#greetingFilip").hide();
        $("#greetingGerman").hide();
        $("#greetingIndia").hide();
        $("#greetingIndone").hide();
        $("#greetingMalay").hide();
        $("#greetingSingap").hide();
        $("#greetingVietna").hide();
        $("#greetingSri").hide();
        $("#greetingAfri").hide();
        $("#greetingOther").hide();

    });

    //re-do quiz
    $("#re-quiz2").click(function () {

        $("#loadview").hide();
        $("#questionpart").show();
        $("#greetingCH").hide();
        $("#greetingUS").hide();
        $("#greetingBrit").hide();
        $("#greetingFilip").hide();
        $("#greetingGerman").hide();
        $("#greetingIndia").hide();
        $("#greetingIndone").hide();
        $("#greetingMalay").hide();
        $("#greetingSingap").hide();
        $("#greetingVietna").hide();
        $("#greetingSri").hide();
        $("#greetingAfri").hide();
        $("#greetingOther").hide();
        $("#Q1").show();
        $("#Q2").hide();
        $("#Q3").hide();
        $("#Q4").hide();
        $("#Q5").hide();


        $("#support").hide();
        $("#options1").hide();


        $("#ready4").hide();
        $("#ready41").hide();
        $("#ready3").hide();
        $("#ready31").hide();
        $("#ready2").hide();
        $("#ready100").hide();


        $("#privateKinderPie").hide();
        $("#publicKinderPie").hide();
        $("#publicKinderPie1").hide();
        $("#privateKinderPie1").hide();
        $("#unknow").hide();

        $("#rec_table").hide();


       
        $("#step11").addClass("active");
        $("#step11").removeClass("done");

        
        $("#step12").removeClass("done");
        $("#step12").removeClass("active");


       
        $("#step14").removeClass("active");
        $("#step14").removeClass("done");
       
        $("#step15").removeClass("active");
        $("#step15").removeClass("done");
    
        $("#step13").removeClass("active");
        $("#step13").removeClass("done");
        $("#requizzz").hide();

        $("#loadview").remove();
        var e = $('<div></div>');
        $('#forloadview').append(e);
        e.attr('id', 'loadview');
    });

    //re-do quiz
    $("#re-do12").click(function () {
        $("#loadview").remove();
        var e = $('<div></div>');
        $('#forloadview').append(e);
        e.attr('id', 'loadview');
       
        
        $("#requizzz").hide();
        $("#questionpart").show();
        $("#greetingCH").hide();
        $("#greetingUS").hide();
        $("#greetingBrit").hide();
        $("#greetingFilip").hide();
        $("#greetingGerman").hide();
        $("#greetingIndia").hide();
        $("#greetingIndone").hide();
        $("#greetingMalay").hide();
        $("#greetingSingap").hide();
        $("#greetingVietna").hide();
        $("#greetingSri").hide();
        $("#greetingAfri").hide();
        $("#greetingOther").hide();
        $("#Q1").show();
        $("#Q2").hide();
        $("#Q3").hide();
        $("#Q4").hide();
        $("#Q5").hide();


        $("#support").hide();
        $("#options1").hide();


        $("#ready4").hide();
        $("#ready41").hide();
        $("#ready3").hide();
        $("#ready31").hide();
        $("#ready2").hide();
        $("#ready100").hide();


        $("#privateKinderPie").hide();
        $("#publicKinderPie").hide();
        $("#publicKinderPie1").hide();
        $("#privateKinderPie1").hide();
        $("#unknow").hide();

        $("#rec_table").hide();



        $("#step11").addClass("active");
        $("#step11").removeClass("done");


        $("#step12").removeClass("done");
        $("#step12").removeClass("active");



        $("#step14").removeClass("active");
        $("#step14").removeClass("done");

        $("#step15").removeClass("active");
        $("#step15").removeClass("done");

        $("#step13").removeClass("active");
        $("#step13").removeClass("done");


    });
    

    //q3
    $("#next3").click(function () {
      
        visaType = $("input[name='visas']:checked").val();
        
        if (visaType == null) {
            alert("Select one of the option");
            return;
        }
        else {



            /*
            switch (visaType) {
                case 1:
                    $("#support").show();
                    $("#options1").show(); 
                    break;
                case 2:
                    $("#options1").show(); 
                    break;
                
            }
            */


            $("#Q1").hide();
            $("#Q2").hide();
            $("#Q3").hide();
            $("#step13").addClass("done");
            $("#step13").addClass("active");
            $("#step14").addClass("active");
            $("#Q5").hide();

            $("#Q4").show();
        }

    });

    $("#previous2").click(function () {

        $("#Q2").show();
        $("#step12").addClass("active");
        $("#step12").removeClass("done");

        $("#Q3").hide();
        $("#step13").removeClass("done");
        $("#step13").removeClass("active");


        $("#Q4").hide();
        $("#step14").removeClass("active");
        $("#step14").removeClass("done");
        $("#Q5").hide();
        $("#step15").removeClass("active");
        $("#step15").removeClass("done");

        $("#ready4").hide();
        $("#ready41").hide();
        $("#ready3").hide();
        $("#ready31").hide();
        $("#ready2").hide();
        $("#ready100").hide();
        

    });


     $("#next4").click(function () {
         
         kinderType = $("input[name='kinderTypes']:checked").val();
         if (kinderType == null) {
             alert("Select one of the option");
             return;
         }
         else {
             
             /*
             switch (kinderType) {
                 case "a":
                     $("#privateKinderPie").show();
                     $("#publicKinderPie").hide();
                     break;
                 case "b":
                     $("#publicKinderPie1").show();
                     $("#privateKinderPie1").hide();

                     break;
                 case "c":
                     $("#unknow").show();
                     break;
             }
             */



             /*
             $("#private-prefer").hide();
             $("#public-prefer").hide();
             $("#unknow").hide();
             */

             //alert(visaType);
             
             $("#Q1").hide();
             $("#Q2").hide();
             $("#Q3").hide();
             $("#Q4").hide();
             $("#step14").addClass("done");
             $("#step14").addClass("active");
             $("#step15").addClass("active");
             $("#Q5").show();
         }

     });


    $("#previous3").click(function () {
        $("#private-prefer").hide();
        $("#public-prefer").hide();
        $("#unknow").hide();

        $("#Q3").show();
        $("#step13").addClass("active");
        $("#step13").removeClass("done");

        $("#Q4").hide();
        $("#step14").removeClass("done");
        $("#step14").removeClass("active");


        $("#Q5").hide();
        $("#step15").removeClass("active");
        $("#step15").removeClass("done");
       

    });

    $("#next5").click(function () {
        switch (radioValue) {
            case "CH":
                
                $("#loadview").load('/kinderInfoSets/mapCH');
                setTimeout(function () { $("#greetingCH").show(); }, 3000);
                
                break;
            case "USA":
                $("#loadview").load('/kinderInfoSets/mapUS');
                setTimeout(function () { $("#greetingUS").show();}, 3000);
                
                break;
            case "Britain":
                $("#loadview").load('/kinderInfoSets/mapBrit');
                setTimeout(function () { $("#greetingBrit").show(); }, 3000);
                
                break;
            case "Philip":
                $("#loadview").load('/kinderInfoSets/mapPhil');
                setTimeout(function () { $("#greetingFilip").show(); }, 3000);
               
                break;
            case "German":
                $("#loadview").load('/kinderInfoSets/mapGermany');
                setTimeout(function () { $("#greetingGerman").show(); }, 3000);
                
                break;
            case "India":
                $("#loadview").load('/kinderInfoSets/mapIndia');
                setTimeout(function () { $("#greetingIndia").show(); }, 3000);
                
                break;
            case "Indon":
                $("#loadview").load('/kinderInfoSets/mapIndonesia');
                setTimeout(function () { $("#greetingIndone").show();}, 3000);
                break;
            case "Malay":
                $("#loadview").load('/kinderInfoSets/mapMalyasia');
                setTimeout(function () { $("#greetingMalay").show(); }, 3000);
                
                break;
            case "Sin":

                $("#loadview").load('/kinderInfoSets/mapSingapore');
                setTimeout(function () { $("#greetingSingap").show();}, 3000);
                break;
            case "Vietnam":
                $("#loadview").load('/kinderInfoSets/mapVietnam');
                setTimeout(function () { $("#greetingVietna").show(); }, 3000);
                break;
            case "Sri":
                $("#loadview").load('/kinderInfoSets/mapSri_LanKan');
                setTimeout(function () { $("#greetingSri").show(); }, 3000);
                
                break;
            case "Africa":
                $("#loadview").load('/kinderInfoSets/mapAfrican');
                setTimeout(function () { $("#greetingAfri").show(); }, 3000);
                
                break;
            case "Other":
                $("#loadview").load('/kinderInfoSets/mapother');
                setTimeout(function () { $("#greetingOther").show(); }, 3000);
                break;

        }


        setTimeout(function () { 
        suburb = $("#Suburb").val();
        postcode = $("#PostCode").val();
        if (suburb =="" || postcode =="" ) {
            alert("please input suburb name and postcode");
            return;
        }
        $.ajax({

            url: '/kinderInfoSets/kinder_table',//'@Url.Action("Index", "kinderInfoSets")'
            type: 'POST',
            data: { "postcode": postcode }, //if you need to post Model data, use this
            success: function (result) {
                $("#target3").html(result);


            }
        });
        
        // pick counrties
       /*
        switch (radioValue) {
            case "CH":
                $("#greetingCH").show();
                break;
            case "USA":
                $("#greetingUS").show();
                break;
            case "Britain":
                $("#greetingBrit").show();
                break;
            case "Philip":
                $("#greetingFilip").show();
                break;
            case "German":
                $("#greetingGerman").show();
                break;
            case "India":
                $("#greetingIndia").show();
                break;
            case "Indon":
                $("#greetingIndone").show();
                break;
            case "Malay":
                $("#greetingMalay").show();
                break;
            case "Sin":
                $("#greetingSingap").show();
                break;
            case "Vietnam":
                $("#greetingVietna").show();
                break;
            case "Sri":
                $("#greetingSri").show();
                break;
            case "Africa":
                $("#greetingAfri").show();
                break;
            case "Other":
                $("#greetingOther").show();
                break;

        }
        */
        

      
       
                


          




        //check age
       
        switch (ready) {
            case 4:
                $("#ready4").show();
                break;
            case 41:
                $("#ready41").show();
                break;
            case 3:
                $("#ready3").show();
                break;
            case 31:
                $("#ready31").show();
                break;
            case 2:
                $("#ready2").show();
                break;
            case 100:
                $("#ready100").show();
                break;


        }

        //q3 visa
        
        console.log(visaType);
        if (visaType=="a") {
            $("#support").show();
            $("#options1").show();
            console.log("aa")
        }
        else if (visaType == "b"){
           
            $("#options1").show();
            console.log("bb")
        }
        /*
        switch (visaType) {
            case "a":
                $("#support").show();
                break;
            case "b":
                $("#support").hide();
                break;

        }
        */


        //q4
       
        switch (kinderType) {
            case "a":
                $("#privateKinderPie").show();
                $("#publicKinderPie").hide();
                break;
            case "b":
                $("#publicKinderPie1").show();
                $("#privateKinderPie1").hide();

                break;
            case "c":
                $("#unknow").show();
                break;
        }

        //q5
        $("#rec_table").show();

        $("#questionpart").hide();
        $("#requizzz").show();

      
        
        }, 5000);
        
        

        

    });

    $("#previous4").click(function () {

        $("#Q4").show();
        $("#step14").addClass("active");
        $("#step14").removeClass("done");

        $("#Q5").hide();
        $("#step15").removeClass("done");
        $("#step15").removeClass("active");



    });


    $("#show-public").click(function () {

        $("#privateKinderPie").hide();


        $("#publicKinderPie").show();
     
    });

    $("#hide-public").click(function () {

        $("#privateKinderPie").show();


        $("#publicKinderPie").hide();

    });


    $("#show-public1").click(function () {

        $("#privateKinderPie1").hide();


        $("#publicKinderPie1").show();

    });

    $("#hide-public1").click(function () {

        $("#privateKinderPie1").show();


        $("#publicKinderPie1").hide();

    });






});