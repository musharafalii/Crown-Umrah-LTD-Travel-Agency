/// <reference path="../jquery-ui-1.12.1.min.js" />

$(document).on('click', 'input[name=FlightTripType]', function() {
    switch ($(this).val().toUpperCase()) {
        case "O":
            $('#txtFReturn').prop("disabled", true);
            $('#txtFReturn').css("background", "rgb(241, 237, 237)");
            $('#txtFReturn').val('');
            $("#MainMulticity").hide();
            $("#MainFlight").show();
            $('#chkFlexi').prop("disabled", false);
            break;
            
        case "R":
            $('#txtFReturn').prop("disabled", false);
            $('#txtFReturn').val();
            $('#txtFReturn').css("background", (window.location.pathname.toLowerCase() == "/flight/result" ? "#026bcd" : "rgb(255, 255, 255)"));
            $("#MainMulticity").hide();
            $("#MainFlight").show();
            $('#chkFlexi').prop("disabled", false);
            $('#chkdirect').prop("disabled", false);
            var temp = $('#txtFDepart').val().split('/');
            var date = new Date(temp[2], temp[1] - 1, temp[0]);
            var startdate = new Date(date.setDate(date.getDate()));
            var next_date = new Date(date.setDate(date.getDate() + 7));

            $("#txtFSource").focus(200);


            break;
        case "M":
            $("#MainMulticity").show();
            $("#MainFlight").hide();
            $('#chkFlexi').prop("disabled", true);
            break;

    }
});
$(document).on('click', '.FlightTraveller', function() {
    var TotalPerson = parseInt($("#txtFAdult").val()) + parseInt($("#txtFChild").val()) + parseInt($("#txtFYouth").val());
    switch ($(this).attr('passengertype')) {
        case "adult+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFAdult").val(parseInt($("#txtFAdult").val()) + 1);
            }
            break;
        case "adult-":
            if (parseInt($("#txtFAdult").val()) > 1) {
                $("#txtFAdult").val(parseInt($("#txtFAdult").val()) - 1);
            }
            if (parseInt($("#txtFInfant").val()) > parseInt($("#txtFAdult").val())) {
                $("#txtFInfant").val($("#txtFAdult").val());
            }
            break;
        case "child+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFChild").val(parseInt($("#txtFChild").val()) + 1);
            }
            break;
        case "child-":
            if (parseInt($("#txtFChild").val()) > 0) {
                $("#txtFChild").val(parseInt($("#txtFChild").val()) - 1);
            }
            break;
        case "youth+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFYouth").val(parseInt($("#txtFYouth").val()) + 1);
            }
            break;
        case "youth-":
            if (parseInt($("#txtFYouth").val()) > 0) {
                $("#txtFYouth").val(parseInt($("#txtFYouth").val()) - 1);
            }
            break;
        case "infant+":
            if (parseInt($("#txtFInfant").val()) < parseInt($("#txtFAdult").val())) {
                $("#txtFInfant").val(parseInt($("#txtFInfant").val()) + 1);
            }
            break;
        case "infant-":
            if (parseInt($("#txtFInfant").val()) > 0) {
                $("#txtFInfant").val(parseInt($("#txtFInfant").val()) - 1);
            }
            break;
    }

    $("#SpanFlightTotalPax").text(parseInt($("#txtFAdult").val()) + parseInt($("#txtFChild").val()) + parseInt($("#txtFInfant").val()) + parseInt($("#txtFYouth").val()));
});
$(document).on('click', '.FlightTravellerM', function() {
    var TotalPerson = parseInt($("#txtFAdultM").val()) + parseInt($("#txtFChildM").val()) + parseInt($("#txtFYouthM").val());
    switch ($(this).attr('passengertype')) {
        case "adult+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFAdultM").val(parseInt($("#txtFAdultM").val()) + 1);
            }
            break;
        case "adult-":
            if (parseInt($("#txtFAdultM").val()) > 1) {
                $("#txtFAdultM").val(parseInt($("#txtFAdultM").val()) - 1);
            }
            if (parseInt($("#txtFInfantM").val()) > parseInt($("#txtFAdultM").val())) {
                $("#txtFInfantM").val($("#txtFAdultM").val());
            }
            break;
        case "child+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFChildM").val(parseInt($("#txtFChildM").val()) + 1);
            }
            break;
        case "child-":
            if (parseInt($("#txtFChildM").val()) > 0) {
                $("#txtFChildM").val(parseInt($("#txtFChildM").val()) - 1);
            }
            break;
        case "youth+":
            if (parseInt(TotalPerson) < 9) {
                $("#txtFYouthM").val(parseInt($("#txtFYouthM").val()) + 1);
            }
            break;
        case "youth-":
            if (parseInt($("#txtFYouthM").val()) > 0) {
                $("#txtFYouthM").val(parseInt($("#txtFYouthM").val()) - 1);
            }
            break;
        case "infant+":
            if (parseInt($("#txtFInfantM").val()) < parseInt($("#txtFAdultM").val())) {
                $("#txtFInfantM").val(parseInt($("#txtFInfantM").val()) + 1);
            }
            break;
        case "infant-":
            if (parseInt($("#txtFInfantM").val()) > 0) {
                $("#txtFInfant").val(parseInt($("#txtFInfant").val()) - 1);
            }
            break;
    }

    $("#SpanFlightTotalPaxM").text(parseInt($("#txtFAdultM").val()) + parseInt($("#txtFChildM").val()) + parseInt($("#txtFInfantM").val()) + parseInt($("#txtFYouthM").val()));
});
$(document).on('change', '#ddlFCabin', function() {

    $("#SpanFlightCabinClass").text($("#ddlFCabin option:selected").text());
});
$(document).on('change', '#ddlFCabinM', function() {

    $("#SpanFlightCabinClassM").text($("#ddlFCabinM option:selected").text());
});


$(document).on("click", "#aDonePaxData", function() {
    $('#divPaxInfo_Fight1').removeClass('in');
    $('#divFlightTraveller').addClass('collapsed');
    $('#divFlightTraveller').attr("aria-expanded", "false");
});


$(document).on("click", "#aDonePaxDatas", function() {
    $('#divPaxInfo_Fight2').removeClass('in');
    $('#divFlightTraveller1').addClass('collapsed');
    $('#divFlightTraveller1').attr("aria-expanded", "false");
});


function GetSearchData() {
    var trip = $("input[name=FlightTripType]:checked").val().toUpperCase();
    var FlightDetails = [];
    switch (trip) {
        case "O":
            FlightDetails.push({
                Source: $("#txtFSource").val(),
                Destination: $("#txtFDestination").val(),
                Date: $("#txtFDepart").val()
            })
            break;
        case "R":
            FlightDetails.push({
                Source: $("#txtFSource").val(),
                Destination: $("#txtFDestination").val(),
                Date: $("#txtFDepart").val()
            }, {
                Source: $("#txtFDestination").val(),
                Destination: $("#txtFSource").val(),
                Date: $("#txtFReturn").val()
            })
            break;
        case "M":
            for (var i = 1; i <= 5; i++) {
                FlightDetails.push({
                    Source: $("#txtFSource" + i).val(),
                    Destination: $("#txtFDestination" + i).val(),
                    Date: $("#txtFDepart" + i).val()
                })
            }
            break;

    }

    var JsonData = {
        FlightDetails: FlightDetails,
        Adult: parseInt($("#txtFAdult" + (trip == "M" ? "M" : "")).val()),
        Child: parseInt($("#txtFChild" + (trip == "M" ? "M" : "")).val()),
        Youth: parseInt($("#txtFYouth" + (trip == "M" ? "M" : "")).val()),
        Infant: parseInt($("#txtFInfant" + (trip == "M" ? "M" : "")).val()),
        Airline: $("#ddlFairlines" + (trip == "M" ? "M" : "")).val(),
        CabinClass: $("#ddlFCabin" + (trip == "M" ? "M" : "")).val(),
        Trip: $("input[name=FlightTripType]:checked").val().toUpperCase(),
        DirectFlight: $("#chkdirect").prop('checked'),
        Flexi: $("#chkFlexi").prop('checked'),
    };
    return JsonData;
}

function ValidationFlight() {
    //debugger
    if ($("input[name=FlightTripType]:checked").val().toUpperCase() == "R" || $("input[name=FlightTripType]:checked").val().toUpperCase() == "O") {
        var Status = "Y";
        if ($('#txtFSource').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please enter source!"
            });
            Status = "N";
        } else if ($('#txtFDestination').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please enter destination!"
            });
            Status = "N";
        } else if ($('#txtFSource').val() == $('#txtFDestination').val()) {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Source and destination location should not be same!"
            });
            Status = "N";
        } else if ($('#txtFSource').val().indexOf("-") < 0) {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please enter correct source!"
            });
            Status = "N";
        } else if ($('#txtFDestination').val().indexOf("-") < 0) {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Correct Destination!"
            });
            Status = "N";
        } else if ($('#txtFDepart').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select Depart Date!"
            });
            Status = "N";
        } else if ($("input[name=FlightTripType]:checked").val().toUpperCase() == "R") {
            if ($('#txtFReturn').val() == "") {
                $("#growls-default").empty();
                $.growl.warning({
                    message: "Please Select Return Date!"
                });
                Status = "N";
            }
        }
        return Status;
    } else if ($("input[name=FlightTripType]:checked").val().toUpperCase() == "M") {
        //debugger
        var Status = "Y";
        if ($('#txtFSource1').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please enter source!"
            });
            $("#txtFSource1").focus();
            Status = "N";
        } else if ($('#txtFDestination1').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please enter destination!"
            });
            $("#txtFDestination1").focus();
            Status = "N";
        } else if ($('#txtFSource1').val() == $('#txtFDestination1').val()) {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Source and destination location should not be same!"
            });
            Status = "N";
        } else if ($('#txtFDepart1').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select Depart Date!"
            });
            Status = "N";
        }

    }
    return Status;
}


function FlightSearch() {
    //debugger
    $("#flighthotelpopup").show();
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    if (ValidationFlight() == "Y") {
        $.post('/Flight/Search', GetSearchData(), function(Response) {
            if (Response.Status) {
                window.location.href = '/Flight/Result?Token=' + Response.Token;
            } else {
                ShowAlert('No flight found for this location!', 'Please try diffrent location', 'error');
                $("#flighthotelpopup").hide();
                $('html, body').css({
                    overflow: 'auto',
                    height: 'auto'
                });
            }
        });
    }
}

function FlexiBookFlight(Id) {
    $('.roundTrip').hide();
    $('.roundTrip').each(function() {
        var flightid = $(this).attr('flightid');
        if (flightid == Id) {
            $(this).show();
        }
    });
}

function GetFlexiFilter(date) {
    $.ajax({
        url: '/Flight/FlexiFilterOneway',
        type: 'POST',
        data: {
            Date: date,
            Token: $("#Token").val()
        },
        success: function(Rval) {
            //debugger
            $('.package').removeClass("active");
            $("#" + date).addClass("active");
            $("#divFlightResult").empty();
            if (Rval != "") {
                $("#divFlightResult").append(Rval);
            } else {
                $("#divFlightResult").append('<h4>No Flights Found</h4>');
            }
            $("#flightcount").text(($("#bingo_width").find('.btn_sortDeparture').length > 1 ? $("#bingo_width").find('.btn_sortDeparture').length + " Flights Found" : $("#bingo_width").find('.btn_sortDeparture').length + " Flight Found"));
        },
        error: function(Rval) {}
    });
}

function AddMulticity() {
    var i = parseInt($("#othermulticity").attr('totaldiv')) + 1;
    if (i <= 5) {
        var html = '';
        html += "<div class=\"row_data\" id=\"divmulticity" + i + "\">";
        html += "<div class=\"width_large\">";
        html += "<div class=\"form_full\"> ";
        html += "<div class=\"form-group\">";
        html += "<label>Flying From</label>";
        html += "<span class=\"icon\">";
        html += "<i class=\"fa fa-map-marker\"></i>";
        html += "</span>";
        html += "<input type=\"text\" class=\"form-control FlightAutoComplete\" id=\"txtFSource" + i + "\" placeholder=\"City or Airport\" onclick=\"this.select()\">";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "<div class=\"width_large\">";
        html += "<div class=\"form_full\">";
        html += "<div class=\"form-group\">";
        html += "<label>Flying To</label>";
        html += "<span class=\"icon\">";
        html += "<i class=\"fa fa-map-marker\"></i>";
        html += "</span>";
        html += "<input type=\"text\" class=\"form-control FlightAutoComplete\" id=\"txtFDestination" + i + "\" placeholder=\"City or Airport\" onclick=\"this.select()\">";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "<div class=\"width_small\">";
        html += "<div class=\"form_full\">";
        html += "<div class=\"form-group\">";
        html += "<label>Departure</label>";
        html += "<span class=\"icon\">";
        html += "<i class=\"fa fa-calendar\"></i>";
        html += "</span>";
        html += "<input type=\"text\" class=\"form-control\" id=\"txtFDepart" + i + "\" placeholder=\"dd/mm/yyyy\" readonly>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "<div class=\"width_small\">";
        html += "<div class=\"form_full\">";
        html += "<div class=\"\">";
        html += "<div class=\"plus_button\">";
        html += "<div class=\"form_full\">";
        html += "<div class=\"form-group\">";
        html += "<button onclick=\"RemoveMultiCity('divmulticity" + i + "')\" style=\"background-image: url(/content/images/icons/minus.png); width: 20px; height: 20px;border:none;background-repeat:no-repeat;background-color:transparent;\"></button";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        $("#othermulticity").append(html);
        $("#othermulticity").attr('totaldiv', i);
        $("#txtFSource" + i).val($("#txtFDestination" + (i - 1)).val());
        MulticityDatepicker();

        var temp = $('#txtFDepart' + (i - 1)).val().split('/');
        var date = new Date(temp[2], temp[1] - 1, temp[0]);
        var startdate = new Date(date.setDate(date.getDate()));
        var next_date = new Date(date.setDate(date.getDate() + 6));
        $('#txtFDepart' + i).daterangepicker({
            singleDatePicker: true,
            startDate: next_date,
            minDate: startdate,
            maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
            locale: {
                format: 'DD/MM/YYYY',
            },
        });
        $("#txtFSource" + i).focus(200);

        $(".FlightAutoComplete").autocomplete("/Handler/Flight.ashx", {
            delay: 10,
            minChars: 3,
            matchSubset: 1,
            matchContains: 1,
            cacheLength: 10,
            selectFirst: true,
            width: 346,
            autoFill: false,
            scroll: true
        });
    }
}

function RemoveMultiCity(id) {
    var i = parseInt($("#othermulticity").attr('totaldiv')) - 1;
    $("#othermulticity").attr('totaldiv', i);
    $("#" + id).remove();
}

function Filter() {
    var Stop = $('input[name="stop"]:checked').map(function() {
        return $(this).val();
    }).get().join(",");
    var DepartureTime = departTime;
    var ReturnTime = returnTime;
    var Airline = $('input[name="airline"]:checked').map(function() {
        return $(this).val();
    }).get().join(",");
    var DeptAirport = $('input[name="DeptAirport"]:checked').map(function() {
        return $(this).val();
    }).get().join(",");
    var ConTime = $('input[name="contime"]:checked').map(function() {
        return $(this).val();
    }).get().join(",");
    $('.result').hide();
    var count = 0;
    $('.result').each(function() {
        //debugger
        var stop = $(this).attr('stop');
        var retstop = $(this).attr('retstop');
        var airline = $(this).attr('airline');
        var deptairport = $(this).attr('deptairport');
        var depttime = $(this).attr('depttime');
        var rettime = $(this).attr('rettime');
        var totalprice = $(this).attr('price');
        var conTime = $(this).attr('layovertime');
        var retconTime = $(this).attr('retlayovertime');
        var retconTimeData = retconTime;

        var statusstop = false;
        var statusretstop = false;
        var statusairline = false;
        var statusdeptairport = false;
        var statusdepttime = false;
        var statusrettime = false;
        var statusprice = false;
        var statusconTime = false;
        if (Stop != "" && stop != "") {
            var stopdata = Stop.split(',');
            for (var j = 0; j < stopdata.length; j++) {
                if (parseInt(stopdata[j]) == parseInt(stop)) {
                    statusstop = true;
                    break;
                } else if (parseInt(stop) > 1 && parseInt(stopdata[j]) > 1) {
                    statusstop = true;
                    break;
                }
            }
        } else {
            statusstop = true;
        }
        if (ConTime != "" && conTime != "") {
            var res = conTime.split(":");
            var res1;
            var retconTime;
            if (retconTime != "") {
                res1 = retconTime.split(":");
                retconTime = ConTime.split(',');
            }
            var conTime = ConTime.split(',');
            if (retconTimeData != "") {
                for (var i = 0; i < conTime.length; i++) {
                    if (parseInt(conTime[i]) == 0) {
                        if (parseInt(res[0]) < 2 && parseInt(res1[0]) < 2) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 2) {
                        if (parseInt(res[0]) > 1 && parseInt(res[0]) < 4 && parseInt(res1[0]) > 1 && parseInt(res1[0]) < 4) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 4) {
                        if (parseInt(res[0]) > 3 && parseInt(res[0]) < 8 && parseInt(res1[0]) > 3 && parseInt(res1[0]) < 8) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 8) {
                        if (parseInt(res[0]) > 7 && parseInt(res[0]) < 24 && parseInt(res1[0]) > 7 && parseInt(res1[0]) < 24) {
                            statusconTime = true;
                        }
                    }
                }
            } else {
                for (var i = 0; i < conTime.length; i++) {
                    if (parseInt(conTime[i]) == 0) {
                        if (parseInt(res[0]) < 2) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 2) {
                        if (parseInt(res[0]) > 1 && parseInt(res[0]) < 4) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 4) {
                        if (parseInt(res[0]) > 3 && parseInt(res[0]) < 8) {
                            statusconTime = true;
                        }
                    } else if (parseInt(conTime[i]) == 8) {
                        if (parseInt(res[0]) > 7 && parseInt(res[0]) < 24) {
                            statusconTime = true;
                        }
                    }
                }
            }
        } else {
            statusconTime = true;
        }
        if (Airline != "" && airline != "") {
            for (var j = 0; j < Airline.split(',').length; j++) {

                if (Airline.split(',')[j].toUpperCase() == airline.toUpperCase()) {
                    statusairline = true;
                    break;
                }

            }
        } else {
            statusairline = true;
        }
        if (DepartureTime != "" && depttime != "") {
            var res = depttime.split(":");
            var departtime = DepartureTime.split(',');
            for (var i = 0; i < departtime.length; i++) {
                if (parseInt(departtime[i]) == 6) {
                    if (parseInt(res[0]) < 6) {
                        statusdepttime = true;
                    }
                } else if (parseInt(departtime[i]) == 12) {
                    if (parseInt(res[0]) > 06 && parseInt(res[0]) < 12) {
                        statusdepttime = true;
                    }
                } else if (parseInt(departtime[i]) == 18) {
                    if (parseInt(res[0]) > 12 && parseInt(res[0]) < 18) {
                        statusdepttime = true;
                    }
                } else if (parseInt(departtime[i]) == 24) {
                    if (parseInt(res[0]) > 18 && parseInt(res[0]) < 24) {
                        statusdepttime = true;
                    }
                }
            }

        } else {
            statusdepttime = true;
        }
        if (ReturnTime != "" && rettime != "" && rettime != undefined) {
            var res = rettime.split(":");
            var returntime = ReturnTime.split(',');
            for (var i = 0; i < returntime.length; i++) {
                if (parseInt(returntime[i]) == 6) {
                    if (parseInt(res[0]) < 6) {
                        statusrettime = true;
                    }
                } else if (parseInt(returntime[i]) == 12) {
                    if (parseInt(res[0]) > 06 && parseInt(res[0]) < 12) {
                        statusrettime = true;
                    }
                } else if (parseInt(returntime[i]) == 18) {
                    if (parseInt(res[0]) > 12 && parseInt(res[0]) < 18) {
                        statusrettime = true;
                    }
                } else if (parseInt(returntime[i]) == 24) {
                    if (parseInt(res[0]) > 18 && parseInt(res[0]) < 24) {
                        statusrettime = true;
                    }
                }
            }

        } else {
            statusrettime = true;
        }
        if (DeptAirport != "" && deptairport != "") {
            for (var i = 0; i < DeptAirport.split(',').length; i++) {
                if (DeptAirport.split(',')[i].toUpperCase() == deptairport.toUpperCase()) {
                    statusdeptairport = true;
                    break;
                }
            }
        } else {
            statusdeptairport = true;
        }
        if ($(".multi-range").attr('data-lbound') != undefined && $(".multi-range").attr('data-ubound') != undefined) {

            if (parseFloat(totalprice) >= parseFloat($(".multi-range").attr('data-lbound')) && parseFloat(totalprice) <= parseFloat($(".multi-range").attr('data-ubound'))) {
                statusprice = true;
            }
        } else {
            statusprice = true;
        }
        if (statusdeptairport && statusairline && statusstop && statusdepttime && statusrettime && statusprice && statusconTime) {
            $(this).show();
            count++;
        }

    });
    if (count == 0) {
        ShowAlert('No Flight Available on the particular Filter!', 'Please try diffrent with different filter', 'error');
    }
}
var departTime = '';
var returnTime = '';
$(document).on('click', '.getdeparture', function() {
    if ($(this).hasClass("active")) {
        $('.getdeparture').removeClass("active");
        $(this).removeClass("active");
        departTime = '';
    } else {
        $('.getdeparture').removeClass("active");
        $(this).addClass("active");
        departTime = $(this).attr('attr-stop');
    }
    Filter();
});
$(document).on('click', '.getarrival', function() {

    if ($(this).hasClass("active")) {
        $('.getarrival').removeClass("active");
        $(this).removeClass("active");
        returnTime = '';
    } else {
        $('.getarrival').removeClass("active");
        $(this).addClass("active");
        returnTime = $(this).attr('attr-stop');
    }
    Filter();
});




function GetGender(Title, Type) {
    var Gender = 'M';
    if (Type == "Adult") {
        switch (Title.toLowerCase()) {
            case "mr.":
                Gender = "M";
                break;
            case "mrs.":
                Gender = "F";
                break;
            case "dr.":
                Gender = "M";
                break;
            case "miss":
                Gender = "F";
                break;
        }
    } else {
        switch (Title.toLowerCase()) {
            case "master":
                Gender = "M";
                break;
            case "miss":
                Gender = "F";
                break;
        }
    }
    return Gender;
}

function GetBookingData() {
    var AdultList = [];
    var ChildList = [];
    var YouthList = [];
    var InfantList = [];
    var adult = parseInt($('#btnbooking').attr('adult'));
    var child = parseInt($('#btnbooking').attr('child'));
    var youth = parseInt($('#btnbooking').attr('youth'));
    var infant = parseInt($('#btnbooking').attr('infant'));
    if (adult > 0) {
        for (var i = 1; i <= adult; i++) {
            AdultList.push({
                Title: $("#ddlATitle_" + i).val(),
                FirstName: $("#txtAFName_" + i).val(),
                LastName: $("#txtALName_" + i).val(),
                Day: $("#txtADay_" + i).val(),
                Month: $("#txtAMonth_" + i).val(),
                Year: $("#txtAYear_" + i).val(),
                DOB: $("#txtAYear_" + i).val() + '-' + $("#txtAMonth_" + i).val() + '-' + $("#txtADay_" + i).val(),
                Gender: GetGender($("#ddlATitle_" + i).val(), "Adult")
            })
        }
    }
    if (child > 0) {
        for (var i = 1; i <= child; i++) {
            ChildList.push({
                Title: $("#ddlCTitle_" + i).val(),
                FirstName: $("#txtCFName_" + i).val(),
                LastName: $("#txtCLName_" + i).val(),
                Day: $("#txtCDay_" + i).val(),
                Month: $("#txtCMonth_" + i).val(),
                Year: $("#txtCYear_" + i).val(),
                DOB: $("#txtCYear_" + i).val() + '-' + $("#txtCMonth_" + i).val() + '-' + $("#txtCDay_" + i).val(),

                Gender: GetGender($("#ddlCTitle_" + i).val(), "Child")
            })
        }
    }
    if (youth > 0) {
        for (var i = 1; i <= youth; i++) {
            YouthList.push({
                Title: $("#ddlYTitle_" + i).val(),
                FirstName: $("#txtYFName_" + i).val(),
                LastName: $("#txtYLName_" + i).val(),
                Day: $("#txtYDay_" + i).val(),
                Month: $("#txtYMonth_" + i).val(),
                Year: $("#txtYYear_" + i).val(),
                DOB: $("#txtYYear_" + i).val() + '-' + $("#txtYMonth_" + i).val() + '-' + $("#txtYDay_" + i).val(),

                Gender: GetGender($("#ddlYTitle_" + i).val(), "Youth")
            })
        }
    }
    if (infant > 0) {
        for (var i = 1; i <= infant; i++) {
            InfantList.push({
                Title: $("#ddlITitle_" + i).val(),
                FirstName: $("#txtIFName_" + i).val(),
                LastName: $("#txtILName_" + i).val(),
                Day: $("#txtIDay_" + i).val(),
                Month: $("#txtIMonth_" + i).val(),
                Year: $("#txtIYear_" + i).val(),
                DOB: $("#txtIYear_" + i).val() + '-' + $("#txtIMonth_" + i).val() + '-' + $("#txtIDay_" + i).val(),

                Gender: GetGender($("#ddlITitle_" + i).val(), "Infant")
            })
        }
    }

    var JsonData = {
        Adult: AdultList,
        Child: ChildList,
        Youth: YouthList,
        Infant: InfantList,
        Name: $("#GuestName").val(),
        Country: $("#GuestCountry option:selected").text(),
        Address: $("#GuestAddress").val(),
        Contact: $("#GuestContact").val(),
        Email: $("#GuestEmail").val(),
        City: $("#GuestCity").val(),
        Zip: $("#GuestPost").val(),
        Token: $('#btnbooking').attr('token'),
        Price: parseFloat($('#btnbooking').attr('totalprice'))
    };
    return JsonData;
}


$(document).on('click', '#btnContinueGuest', function() {
    //$('#divPassCredential').hide();
    //$('#btnbooking').show();
    $('#btnbooking').click();
});

$(document).on('click', '#btnbooking', function() {
    var status = validationStatus();
    if (status) {
        $(this).text('Please Wait...');
        $.post('/Flight/Booking', GetBookingData(), function(Response) {
            if (Response.Status) {
                // window.location.href = '/Flight/Confirmation?Token=' + Response.Token;
                window.location.href = '/Payment/Process?Token=' + Response.Token + '&Product=Flight';
                // window.location.href = '/Payment/Process';
            } else {
                $('#btnbooking').text('Proceed To Payment');
                ShowAlertLoad('Booking failed!', 'Please try with diffrent flights', 'error', '/Flight/Result?Token=' + Response.Token + '');
            }
        })
    }
});

function validationStatus() {
    var status = true;
    var ac = $('#hdnAdultCount').val();
    var cc = $('#hdnChildCount').val();
    var yc = $('#hdnYouthCount').val();
    var ic = $('#hdnInfantCount').val();
    if (ac > 0) {
        status = PaxValidation(ac, 'A');
    }
    if (cc > 0) {
        status = PaxValidation(ac, 'C');
    }
    if (yc > 0) {
        status = PaxValidation(ac, 'Y');
    }
    if (ic > 0) {
        status = PaxValidation(ac, 'I');
    }

    if (status) {

        if ($("#GuestName").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Lead Passenger Full Name !"
            });
            $("#GuestName").focus();
            status = false;
        } else if ($("#GuestAddress").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Lead Passenger Address 1 !"
            });
            $("#GuestAddress").focus();
            status = false;
        } else if ($("#GuestAddress1").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Lead Passenger Address 2 !"
            });
            $("#GuestAddress1").focus();
            status = false;
        } else if ($("#GuestContact").val() == "") {

            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Contact Number !"
            });
            $("#GuestContact").focus();
            status = false;
        } else if ($("#GuestEmail").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Email !"
            });
            $("#GuestEmail").focus();
            status = false;
        }

        if (!EmailValidate($("#GuestEmail").val())) {
            $("#GuestEmail").focus();
            status = false;
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Correct Email !"
            });
        } else if ($("#GuestCity").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter City Name !"
            });
            $("#GuestCity").focus();
            status = false;
        } else if ($("#GuestCountry").val() == "0") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select Country!"
            });
            $("#txtLeadCountry").focus();
            status = false;
        } else if ($("#GuestPost").val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter Post Code !"
            });
            $("#GuestPost").focus();
            status = false;
        } else if ($("#chkterm").not(':checked').length > 0) {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Accept The Term & Condition !"
            });
            $("#chkterm").focus();
            status = false;
        }
    }

    return status;
}

function getPaxType(T) {
    var Type = '';
    switch (T) {
        case "A":
            Type = 'Adult ';
            break;
        case "C":
            Type = 'Child ';
            break;
        case "Y":
            Type = 'Youth ';
            break;
        case "I":
            Type = 'Infant ';
            break;
        default:
            break
    }
    return Type;
}

function PaxValidation(pc, t) {
    var status = true;
    for (var a = 1; a <= pc; a++) {
        if ($('#txt' + t + 'FName_' + a + '').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " First Name !"
            });
            $('#txt' + t + 'FName_' + a + '').focus();
            status = false;
            break;
        }
        if (parseInt($('#txt' + t + 'FName_' + a + '').val().length) <= 2) {
            status = false;
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter minumum 3 characters for " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " First Name !"
            });
            $('#txt' + t + 'FName_' + a + '').focus();
            break;
        }

        if ($('#txt' + t + 'LName_' + a + '').val() == "") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Enter " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " Last Name !"
            });
            $('#txt' + t + 'LName_' + a + '').focus();
            status = false;
            break;
        }

        if ($('#txt' + t + 'Day_' + a + '').val() == "0") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " DOB Day !"
            });
            $('#txt' + t + 'Day_' + a + '').focus();
            status = false;
            break;
        }

        if ($('#txt' + t + 'Month_' + a + '').val() == "0") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " DOB Month !"
            });
            $('#txt' + t + 'Month_' + a + '').focus();
            status = false;
            break;
        }
        if ($('#txt' + t + 'Year_' + a + '').val() == "0") {
            $("#growls-default").empty();
            $.growl.warning({
                message: "Please Select " + a + "" + (a == 1 ? "st" : (a == 2 ? "nd" : (a == 3 ? "rd" : "th"))) + getPaxType(t) + " DOB Year !"
            });
            $('#txt' + t + 'Year_' + a + '').focus();
            status = false;
            break;
        }
    }
    return status;
}

$(document).on('keydown', '#GuestContact', function(evt) {
    isNumberKey(evt);
});

$(document).on('keyup', '#GuestEmail', function(evt) {
    isEmail($(this).val());
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode > 47 && charCode < 58) || (charCode > 97 && charCode < 108)) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}

$(".clsName").keydown(function(event) {
    k = event.which;
    return validateName(k)
});

function validateName(k) {
    var status = true;
    if ((k >= 65 && k <= 90) || k >= 37 && k <= 40 || k == 32 || k == 46 || k == 9 || k == 13 || k == 17 || k >= 112 && k <= 123 || k == 8) {
        status = true;
    } else {
        event.preventDefault();
        status = false;
    }
    return status;
}


function EmailValidate(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var status = regex.test(email);
    return status;
}

function isEmail(email) {
    var status = EmailValidate(email);
    if (status) {
        $("#GuestEmail").focus();
        $("#GuestEmail").attr("style", "border-color:#e5e5e5");
        return false;
    } else {
        $("#GuestEmail").attr("style", "border-color:red");
    }
}

function FilterFlightId(Id, Guid) {
    debugger

    $.ajax({
        url: '/Flight/FilterFlightId',
        type: 'POST',
        data: {
            Token: Guid + "~" + Id
        },
        success: function(Rval) {
            debugger

            $("#divpopup").empty();
            $("#divpopup").append(Rval);
            $("#btnShowPopup").click();
            // $('#d_1').click();
            //$('#rd_1').attr('checked', 'checked');
            //F_out = parseInt($('#d_1').attr('outbound'));
            //outPrice = parseInt($('#d_1').attr('fareprice'));
            var F_out = 0;
            $('#totalPrice').text(parseInt($('#d_1').attr('fareprice')));
            $(".c-bottom .show-btn").click(function() {
                $(".c-bottom").addClass("active");
                $(".drrbrb-content .ul-flight-detail").addClass("active");
            });
            $(".c-bottom .hide-btn").click(function() {
                $(".c-bottom").removeClass("active");
                $(".drrbrb-content .ul-flight-detail").removeClass("active");
            });
            $(".drrbl-text5 .stopage").click(function() {
                $(".drrbl-text5 .stopage_in").slideToggle(600);
                $(this).toggleClass("in");
            });
            $('[id^=d_]').click(function() {
                debugger
                $('[id^=d_]').removeClass('active');
                //alert('show msg');
                $(this).addClass('active');
                $(this).find($('[id^=rd_]')).attr('checked', 'checked');
                //outPrice = parseInt($(this).attr('fareprice'));
                //totalprice = outPrice + inprice;
                F_out = parseInt($(this).attr('outbound'));
                $("#dlFareRulesLists").empty();
                $('#divLoader').show();
                $('#totalPrice').text(parseInt($(this).attr('fareprice')));

            });
            $('#d_1').click();
            $('#btnContinuebooking').click(function() {
                debugger;
                window.location.href = "/Flight/Details?Token=" + Guid + "&Fid=" + F_out + " ";
                ///Flight/Details?Token=@Request.QueryString["Token"]&Fid=@Details.SelectSingleNode("Id").InnerText"
            })

        },
        error: function(Rval) {}
    });

}