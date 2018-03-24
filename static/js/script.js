var weather = 'none';
var season=1;
var workingday;
var sliderAmount1;
var sliderAmount2;
var sliderAmount3;
var sliderAmount4;
var slider1;
var slider2;
var slider3;
var slider4;
var xaxis = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,30,13,12,14,15,16,14,34,67,22,23,24,25];
var yaxis;
var Weekday=0;
var Holiday=0;
var name1;
var name2;
var name3;

var temp, atemp, windspeed, humidity;
var _a, _b;

[season, _a, Holiday, Weekday, workingday, weather, temp, atemp, windspeed, humidity] 
= [1, 12, 0, 1, 1, 2, 0.215833, 0.223487, 0.5775, 0.154846];

function myFunction(choice){
    if(choice == 'Summer') {
     season=2
     $('#test1').addClass('pink');
     $('#test2').removeClass('pink');
     $('#test3').removeClass('pink');
     $('#test4').removeClass('pink');
   }

   else if (choice == 'Winter') {
        season=4
        $('#test1').removeClass('pink');
        $('#test2').addClass('pink');
$('#test3').removeClass('pink');
$('#test4').removeClass('pink');
    }
   else if (choice == 'Spring') {
       season=1
       $('#test1').removeClass('pink');
       $('#test2').removeClass('pink');
       $('#test3').removeClass('pink');
       $('#test4').addClass('pink');
    }
    
    else if (choice == 'Autumn') {
        season=3
        $('#test1').removeClass('pink');
        $('#test2').removeClass('pink');
        $('#test3').addClass('pink');
    $('#test4').removeClass('pink');
    }


    if (choice == 'Rainy') {
        weather=4
    }
    else if (choice == 'Stormy') {
        weather=3
    }
    else if (choice == 'Sunny') {
        weather=1
    }
    else if (choice == 'Cloudy') {
        weather=2
    }

    if (choice == 'Weekend') {
        Holiday= 1 - Holiday
    }
    else if (choice == 'Holiday') {
        Holiday= 1- Holiday
    }
    else if (choice == 'Weekday') {
        Weekday= 1- Weekday
    }
    else if (choice == 'Weekday') {
        workingday = 1 - workingday
    }
}
// season int64
// yr int64
// mnth int64
// holiday int64
// weekday int64
// workingday int64
// weathersit int64
// temp float64
// atemp float64
// hum float64
// windspeed float64

function submit(){
    x = [635, season, 2012, 4, Holiday, Weekday, workingday, weather, temp/100, atemp/100, windspeed, humidity]
    console.log(x);
        $.ajax({
            url: '/predict',
            data: JSON.stringify({
                'data': x
            }),
            contentType: 'application/json;charset=UTF-8',
            type: 'POST',
            error: function (error) {
                console.log(error);
            },
            success: function(result){
                console.log(result);
                r = JSON.parse(result);
                $('#response').html(`Casual Users: ${r['y_cas']}<br>Regular Users: ${r['y_reg']}<br>`)
            }
        });
}

function  draw_graph(wts,uts) {
  Highcharts.chart('container', {
  title: {
       text: 'Number of Users per Hour in a Day'
   },
  xAxis: {
    title: {
        enabled: true,
        text: 'Hours of the Day'
    },
       type: 'datetime',
       tickInterval: 3600 * 1000,
       min: Date.UTC(2011,01,01),
       max: Date.UTC(2011,12,31),


    },
    yAxis: {
           title: {
               text: 'No of users'
           }
       },
       plotOptions: {
       series: {
           pointStart: Date.UTC(2013, 4, 22),
           pointInterval: 3600 * 1000 // one day
       }
   },
  series: [{
        data:wts
    }, {
        data:uts
    }]
});

console.log(wts, uts);
}

function updateSlider1(sliderAmount1) {
    // sliderDiv1 = document.getElementById("sliderAmount1");
    // sliderDiv1.innerHTML = sliderAmount1;
    temp=$('#sliderDiv1').val();
    $('#temp_label').text(temp);
}
function updateSlider2(sliderAmount2) {
    //sliderDiv2 = document.getElementById("sliderAmount2");
    //sliderDiv2.innerHTML = sliderAmount2;
    atemp=$('#sliderDiv2').val();
    $('#atemp_label').text(atemp);
}
function updateSlider3(sliderAmount3) {
    //sliderDiv3 = document.getElementById("sliderAmount3");
    //sliderDiv3.innerHTML = sliderAmount3;
    windspeed=$('#sliderDiv3').val();
    $('#windspeed_label').text(windspeed);
}
function updateSlider4(sliderAmount4) {
    //sliderDiv3 = document.getElementById("sliderAmount3");
    //sliderDiv3.innerHTML = sliderAmount3;
    humidity=$('#sliderDiv4').val();
    $('#humidity_label').text(humidity);
}

 function show(xaxis,yaxis){
  
    name1 = document.getElementById("first_name1").value;
    name2 = document.getElementById("first_name2").value;
    name3 = name2+name3;
    console.log(slider1)
    console.log(slider2)
    console.log(slider3)
    console.log(slider4)
    console.log(Holiday)
    console.log(Weekday)
    console.log(name1)
    console.log(name2)
    console.log(name3)
    draw_graph(xaxis,yaxis)
}

function update(){
    slider1=$('#sliderDiv1').val();
    slider2=$('#sliderDiv2').val();
    slider3=$('#sliderDiv3').val();
    slider4=$('#sliderDiv4').val();
    season=1;
    weather=1;
    day=0;
}
