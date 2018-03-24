var weather = 'none';
var season='none';
var sliderAmount1;
var sliderAmount2;
var sliderAmount3;
var sliderAmount4;
var slider1;
var slider2;
var slider3;
var slider4;
var xaxis = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,30,13,12,14,15,16,14,34,67,22,23,24,25];
var yaxis = [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2,30,14,15,23,34,45,65,34,43,21,32,43,21];
var Weekday=0;
var Holiday=0;
var name1;
var name2;
var name3;
function myFunction(choice){
    if(choice == 'Summer')
   {
     season=2
   }

   else if (choice == 'Winter') {
        season=4
    }
   else if (choice == 'Spring') {
        season=1
    }

   else if (choice == 'Autumn') {
        season=3
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
        Holiday=1
    }
    else if (choice == 'Holiday') {
        Holiday=1
    }
    else if (choice == 'Weekday') {
        Weekday=1
    }
}

function  draw_graph(wts,uts)
{
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
       min: Date.UTC(2013,4,22),
       max: Date.UTC(2013,4,23),


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
}
 function updateSlider1(sliderAmount1) {
        // sliderDiv1 = document.getElementById("sliderAmount1");
        // sliderDiv1.innerHTML = sliderAmount1;
        slider1=$('#sliderDiv1').val();
    }
 function updateSlider2(sliderAmount2) {
        //sliderDiv2 = document.getElementById("sliderAmount2");
        //sliderDiv2.innerHTML = sliderAmount2;
        slider2=$('#sliderDiv2').val();
    }
 function updateSlider3(sliderAmount3) {
        //sliderDiv3 = document.getElementById("sliderAmount3");
        //sliderDiv3.innerHTML = sliderAmount3;
        slider3=$('#sliderDiv3').val();
    }
 function updateSlider4(sliderAmount4) {
           //sliderDiv3 = document.getElementById("sliderAmount3");
           //sliderDiv3.innerHTML = sliderAmount3;
           slider4=$('#sliderDiv4').val();
       }

 function show(){
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
