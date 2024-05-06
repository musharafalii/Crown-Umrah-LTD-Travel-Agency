(function($) {
    'use strict';
    $(function() {
        $('#txtdepartdatequote').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        });
        $('#txtreturndatequote').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        });
        $('#daterange').daterangepicker({
            autoApply: true
        });
        $('#datetime').daterangepicker({
            timePicker: true,

            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });
        //flight start
        //$('#txtFDepart1').daterangepicker({
        //    singleDatePicker: true,
        //    months:2,
        //    minDate: new Date(new Date().setDate(new Date().getDate())),
        //    maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        //    locale: {
        //        format: 'DD/MM/YYYY',
        //    },
        //}, flightCallback);



        //function flightCallback(start) {

        //    if ($("input[name=FlightTripType]:checked").val().toUpperCase() == "R")
        //    {
        //            var date = new Date(start);
        //            var next_date = new Date(date.setDate(date.getDate() + 7));
        //            $('#txtFReturn1').daterangepicker({
        //            singleDatePicker: true,
        //            minDate: start,
        //            startDate:next_date,
        //            locale: {
        //                format: 'DD/MM/YYYY'
        //            }
        //        });
        //    }



        //}

        //$('#txtFReturn1').daterangepicker({
        //    singleDatePicker: true,
        //    minDate: ($('#txtFReturn1').val() != "" ? $('#txtFReturn1').val() : new Date(new Date().setDate(new Date().getDate()))),
        //    startDate: ($('#txtFReturn1').val() != "" ? $('#txtFReturn1').val() : new Date(new Date().setDate(new Date().getDate()))),
        //    locale: {
        //        format: 'DD/MM/YYYY'
        //    }
        //});
        ////flight end
        // Date Picker date

        //flight start

        $('#txtFDepart').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {

                if ($("#FlightRoundTrip").val() == "R") {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        date.setDate(date.getDate() + 3);
                        $('#txtFReturn').datepicker("option", "minDate", date);
                    }
                }
            },
            onClose: function(selectedDate) {
                if ($("#FlightRoundTrip").val() == "R") {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        date.setDate(date.getDate() + 3);
                        $('#txtFReturn').datepicker("option", "minDate", date);
                    }
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#txtFDepart').val() != "" ? ChangeDateFormat($('#txtFDepart').val()) : new Date())).setDate(new Date(($('#txtFDepart').val() != "" ? ChangeDateFormat($('#txtFDepart').val()) : new Date())).getDate())));;

        $('#txtFReturn').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        }).datepicker("setDate", new Date(new Date(($('#txtFReturn').val() != "" ? ChangeDateFormat($('#txtFReturn').val()) : new Date())).setDate(new Date(($('#txtFReturn').val() != "" ? ChangeDateFormat($('#txtFReturn').val()) : new Date())).getDate())));;
        //flight end


        //Hotel Double calendra start

        $('#txtHCheckIn').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    date.setDate(date.getDate() + 2);
                    $('#txtHCheckOut').datepicker("option", "minDate", date);
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    date.setDate(date.getDate() + 2);
                    $('#txtHCheckOut').datepicker("option", "minDate", date);
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#txtHCheckIn').val() != "" ? ChangeDateFormat($('#txtHCheckIn').val()) : new Date())).setDate(new Date(($('#txtHCheckIn').val() != "" ? ChangeDateFormat($('#txtHCheckIn').val()) : new Date())).getDate())));;

        $('#txtHCheckOut').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        }).datepicker("setDate", new Date(new Date(($('#txtHCheckOut').val() != "" ? ChangeDateFormat($('#txtHCheckOut').val()) : new Date())).setDate(new Date(($('#txtHCheckOut').val() != "" ? ChangeDateFormat($('#txtHCheckOut').val()) : new Date())).getDate())));;
        //Hotel Double calendra  end


        //Hotel Double calendra start

        $('#txtHaCheckIn').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    date.setDate(date.getDate() + 2);
                    $('#txtHaCheckOut').datepicker("option", "minDate", date);
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    date.setDate(date.getDate() + 2);
                    $('#txtHaCheckOut').datepicker("option", "minDate", date);
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#txtHaCheckIn').val() != "" ? ChangeDateFormat($('#txtHaCheckIn').val()) : new Date())).setDate(new Date(($('#txtHaCheckIn').val() != "" ? ChangeDateFormat($('#txtHaCheckIn').val()) : new Date())).getDate())));;

        $('#txtHaCheckOut').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        }).datepicker("setDate", new Date(new Date(($('#txtHaCheckOut').val() != "" ? ChangeDateFormat($('#txtHaCheckOut').val()) : new Date())).setDate(new Date(($('#txtHaCheckOut').val() != "" ? ChangeDateFormat($('#txtHaCheckOut').val()) : new Date())).getDate())));;
        //Hotel Double calendra  end




        //flightHotel double start


        $('#FHCheckIn').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    var predate = date;
                    date.setDate(date.getDate() + 7);
                    $('#FHCheckOut').datepicker("option", "minDate", predate);
                    $('#txtFHNights').val("7 Nights");
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    var predate = date;
                    date.setDate(date.getDate() + 7);
                    $('#FHCheckOut').datepicker("option", "minDate", predate);
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#FHCheckIn').val() != "" ? ChangeDateFormat($('#FHCheckIn').val()) : new Date())).setDate(new Date(($('#FHCheckIn').val() != "" ? ChangeDateFormat($('#FHCheckIn').val()) : new Date())).getDate())));;

        $('#FHCheckOut').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    getNightFHCheckout(date);
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    getNightFHCheckout(date);
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#FHCheckOut').val() != "" ? ChangeDateFormat($('#FHCheckOut').val()) : new Date())).setDate(new Date(($('#FHCheckOut').val() != "" ? ChangeDateFormat($('#FHCheckOut').val()) : new Date())).getDate())));;


        function getNightFHCheckout(start) {
            var d1 = new Date(start);
            var indate = $('#FHCheckIn').val().split('/');
            var newdate = indate[2] + '-' + indate[1] + '-' + indate[0];
            var d2 = new Date(newdate);
            var timeDiff = d1.getTime() - d2.getTime();
            var DaysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
            $('#txtFHNights').val(DaysDiff + (DaysDiff == 1 ? " Night" : " Nights"));

        }



        //flight hotel double end


        //Umrah double start


        $('#txtUmrahDepartureDate').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {

                    var date = $(this).datepicker("getDate");
                    var predate = date;
                    predate.setDate(predate.getDate() + 7);
                    $('#txtUmrahReturnDate').datepicker("option", "minDate", $(this).datepicker("getDate"));
                    $('#txtUmrahReturnDate').datepicker("setDate", predate);
                    getDaysNightsValue(selectedDate, $('#txtUmrahReturnDate').val(), 'Makka');
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    var predate = date;
                    predate.setDate(predate.getDate() + 7);
                    $('#txtUmrahReturnDate').datepicker("option", "minDate", $(this).datepicker("getDate"));
                    $('#txtUmrahReturnDate').datepicker("setDate", predate);
                    getDaysNightsValue(selectedDate, $('#txtUmrahReturnDate').val(), 'Makka');
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).setDate(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).getDate())));;

        $('#txtUmrahReturnDate').datepicker({
            minDate: new Date(new Date().setDate(new Date().getDate())),
            dateFormat: returnDateFormat(),
            changeMonth: false,
            numberOfMonths: 1,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function(selectedDate) {
                if (selectedDate != "") {
                    // var date = $(this).datepicker("getDate");
                    // getNightUmrahCheckout(date);
                    getDaysNightsValue($('#txtUmrahDepartureDate').val(), selectedDate, 'Madina');
                }
            },
            onClose: function(selectedDate) {
                if (selectedDate != "") {
                    var date = $(this).datepicker("getDate");
                    //  getNightUmrahCheckout(date);
                    getDaysNightsValue($('#txtUmrahDepartureDate').val(), selectedDate, 'Madina');
                }
            }
        }).datepicker("setDate", new Date(new Date(($('#txtUmrahReturnDate').val() != "" ? ChangeDateFormat($('#txtUmrahReturnDate').val()) : new Date())).setDate(new Date(($('#txtUmrahReturnDate').val() != "" ? ChangeDateFormat($('#txtUmrahReturnDate').val()) : new Date())).getDate())));;

        $('#ddlmakka').change(function() {

            var Days = $(this).val();
            var MadinaDays = $('#ddlmadina').val();

            $('#txtUmrahDepartureDate').datepicker({
                minDate: new Date(new Date().setDate(new Date().getDate())),
                dateFormat: returnDateFormat(),
                changeMonth: false,
                numberOfMonths: 1,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function(selectedDate) {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        var predate = date;
                        date.setDate(date.getDate() + 7);
                        //$('#txtUmrahReturnDate').datepicker("option", "minDate", predate);
                        $('#txtUmrahReturnDate').datepicker("option", "minDate", $(this).datepicker("getDate"));
                        $('#txtUmrahReturnDate').datepicker("setDate", predate);
                        getDaysNightsValue(selectedDate, $('#txtUmrahReturnDate').val(), 'Makka');
                    }
                },
                onClose: function(selectedDate) {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        var predate = date;
                        date.setDate(date.getDate() + 7);
                        $('#txtUmrahReturnDate').datepicker("option", "minDate", $(this).datepicker("getDate"));
                        $('#txtUmrahReturnDate').datepicker("setDate", predate);
                        getDaysNightsValue(selectedDate, $('#txtUmrahReturnDate').val(), 'Makka');
                    }
                }
            }).datepicker("setDate", new Date(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).setDate(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).getDate())));;


            $('#txtUmrahReturnDate').datepicker({
                minDate: new Date(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).setDate(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).getDate())),
                dateFormat: returnDateFormat(),
                changeMonth: false,
                numberOfMonths: 1,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function(selectedDate) {
                    if (selectedDate != "") {
                        // var date = $(this).datepicker("getDate");
                        // getNightUmrahCheckout(date);
                    }
                },
                onClose: function(selectedDate) {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        //  getNightUmrahCheckout(date);
                    }
                }
            }).datepicker("setDate", new Date(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).setDate(new Date(($('#txtUmrahDepartureDate').val() != "" ? ChangeDateFormat($('#txtUmrahDepartureDate').val()) : new Date())).getDate() + (parseInt(Days) + parseInt(MadinaDays)))));

        });


        $('#ddlmadina').change(function() {

            var Days = $(this).val();
            var MakkaDays = $('#ddlmakka').val();
            var departDate = $('#txtUmrahDepartureDate').val().split('/');
            var NewDate = new Date(departDate[2], parseInt(departDate[1]) - 1, departDate[0]);


            $('#txtUmrahReturnDate').datepicker({
                minDate: new Date(new Date(NewDate).setDate(new Date(NewDate).getDate())),
                dateFormat: returnDateFormat(),
                changeMonth: false,
                numberOfMonths: 1,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function(selectedDate) {
                    if (selectedDate != "") {
                        // var date = $(this).datepicker("getDate");
                        // getNightUmrahCheckout(date);
                    }
                },
                onClose: function(selectedDate) {
                    if (selectedDate != "") {
                        var date = $(this).datepicker("getDate");
                        //  getNightUmrahCheckout(date);
                    }
                }
            }).datepicker("setDate", new Date(new Date(NewDate).setDate(new Date(NewDate).getDate() + (parseInt(Days) + parseInt(MakkaDays)))));

        });



        //Umrah double end




        //Hotel start
        $('#txtHCheckIns').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        }, HotelCallback);

        function HotelCallback(start) {

            var date = new Date(start);
            var next_date = new Date(date.setDate(date.getDate() + 2));
            $('#txtHCheckOut').daterangepicker({
                singleDatePicker: true,
                minDate: start,
                startDate: next_date,
                locale: {
                    format: 'DD/MM/YYYY'
                }
            });
            //$('#txtNights').val(2 + " Nights");
        }

        $('#txtHCheckOuts').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            startDate: $('#txtHCheckOut').val() == "" ? new Date(new Date().setDate(new Date().getDate() + 2)) : $('#txtHCheckOut').val(),
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        function CalculateNights(start) {

            var d1 = new Date(start);
            var indate = $('#txtHCheckIn').val().split('/');
            var newdate = indate[2] + '-' + indate[1] + '-' + indate[0];
            var d2 = new Date(newdate);
            var timeDiff = d1.getTime() - d2.getTime();
            var DaysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
            $('#txtNights').val(DaysDiff + (DaysDiff == 1 ? " Night" : " Nights"));
        }
        //Hotel end

        //flightHotel start
        $('#FHCheckIns').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        }, flighthotelCallback);

        function flighthotelCallback(start) {


            var date = new Date(start);
            var next_date = new Date(date.setDate(date.getDate() + 7));
            $('#FHCheckOut').daterangepicker({
                singleDatePicker: true,
                minDate: start,
                startDate: next_date,
                locale: {
                    format: 'DD/MM/YYYY'
                }
            }, flighthotelcheckoutcallback);
            $('#txtFHNights').val("7 Nights");
        }
        $('#FHCheckOuts').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            startDate: $('#FHCheckOut').val() == "" ? new Date(new Date().setDate(new Date().getDate() + 3)) : $('#FHCheckOut').val(),
            locale: {
                format: 'DD/MM/YYYY'
            }
        }, flighthotelcheckoutcallback);

        function flighthotelcheckoutcallback(start) {

            var d1 = new Date(start);
            var indate = $('#FHCheckIn').val().split('/');
            var newdate = indate[2] + '-' + indate[1] + '-' + indate[0];
            var d2 = new Date(newdate);
            var timeDiff = d1.getTime() - d2.getTime();
            var DaysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
            $('#txtFHNights').val(DaysDiff + (DaysDiff == 1 ? " Night" : " Nights"));


        }
        //flight hotel end

        //Attraction start
        $('#txtAttractionDeparture').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        });


        //Attraction end
        //start multicity
        if (location.pathname.toLowerCase() == "/flight/result" || location.pathname.toLowerCase() == "/" || location.pathname.toLowerCase() == "/home/index") {
            MulticityDatepicker();
        }


        //end multicity
        //Umrah start
        $('#txtUmrahDepartureDates').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        }, flightCallbackUmrah);

        function flightCallbackUmrah(start) {

            var date = new Date(start);
            var next_date = new Date(date.setDate(date.getDate() + 7));
            $('#txtUmrahReturnDate').daterangepicker({
                singleDatePicker: true,
                minDate: start,
                startDate: next_date,
                locale: {
                    format: 'DD/MM/YYYY'
                }
            }, umrahnightscount);



        }
        $('#txtUmrahReturnDates').daterangepicker({
            singleDatePicker: true,
            minDate: new Date(new Date().setDate(new Date().getDate())),
            locale: {
                format: 'DD/MM/YYYY'
            }
        }, umrahnightscount);

        function umrahnightscount(start) {

            $('#txtUmrahReturnDate').val(start.format("DD/MM/YYYY"));
            GetDaysUmrah();
        }
        //umrah end
    });

})(jQuery);


function MulticityDatepicker() {

    var temp1 = $('#txtFDepart1').val().split('/');
    var date1 = new Date(temp1[2], temp1[1] - 1, temp1[0]);
    var startdate1 = new Date(date1.setDate(date1.getDate()));

    $('#txtFDepart1').daterangepicker({
        singleDatePicker: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        startDate: (temp1[0] == "" ? new Date(new Date().setDate(new Date().getDate())) : startdate1),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        locale: {
            format: 'DD/MM/YYYY',
        },
    }, flightCallback1);

    function flightCallback1(start) {



        var date = new Date(start);
        var next_date = new Date(date.setDate(date.getDate() + 7));
        $('#txtFDepart2').daterangepicker({
            singleDatePicker: true,
            minDate: start,
            startDate: next_date,
            locale: {
                format: 'DD/MM/YYYY'
            }
        }, flightCallback2);

        function flightCallback2(start) {


            var date = new Date(start);
            var next_date = new Date(date.setDate(date.getDate() + 6));
            $('#txtFDepart3').daterangepicker({
                singleDatePicker: true,
                minDate: start,
                startDate: next_date,
                locale: {
                    format: 'DD/MM/YYYY'
                }
            }, flightCallback3);

            function flightCallback3(start) {


                var date = new Date(start);
                var next_date = new Date(date.setDate(date.getDate() + 6));
                $('#txtFDepart4').daterangepicker({
                    singleDatePicker: true,
                    minDate: start,
                    startDate: next_date,
                    locale: {
                        format: 'DD/MM/YYYY'
                    }
                }, flightCallback4);

                function flightCallback4(start) {


                    var date = new Date(start);
                    var next_date = new Date(date.setDate(date.getDate() + 6));
                    $('#txtFDepart5').daterangepicker({
                        singleDatePicker: true,
                        minDate: start,
                        startDate: next_date,
                        locale: {
                            format: 'DD/MM/YYYY'
                        }
                    });

                }
            }

        }

    }
    var temp2 = $('#txtFDepart2').val().split('/');
    var date2 = new Date(temp2[2], temp2[1] - 1, temp2[0]);
    var startdate2 = new Date(date2.setDate(date2.getDate()));
    $('#txtFDepart2').daterangepicker({
        singleDatePicker: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        startDate: ($('#txtFDepart2').val() == "" ? new Date(new Date().setDate(new Date().getDate() + 6)) : startdate2),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        locale: {
            format: 'DD/MM/YYYY',
        },
    });
    $('#txtFDepart3').daterangepicker({
        singleDatePicker: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        locale: {
            format: 'DD/MM/YYYY',
        },
    });
    $('#txtFDepart4').daterangepicker({
        singleDatePicker: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        locale: {
            format: 'DD/MM/YYYY',
        },
    });
    $('#txtFDepart5').daterangepicker({
        singleDatePicker: true,
        minDate: new Date(new Date().setDate(new Date().getDate())),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
        locale: {
            format: 'DD/MM/YYYY',
        },
    });
}


function returnDateFormat() {

    return "dd/mm/yy";
}


function ChangeDateFormat(SelectDate) {
    if (SelectDate != undefined && SelectDate != "") {
        var SplitDate = SelectDate.split('/');
        var NewDate = SplitDate[1] + "/" + SplitDate[0] + "/" + SplitDate[2];
        return NewDate;
    } else {
        return new Date();
    }
}