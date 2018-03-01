$(document).ready(function () {
    function displayTime() {


        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var merdiem = "AM";

        if (hours > 12) {
            hours -= 12;
            merdiem = "PM";
        } else if (hours === 0) {
            hourse = 12;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        var clockDiv = document.getElementById('clock');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + merdiem;
    }

function displayDate() {
        var currentDate = new Date();
    var year = currentDate.getYear();
        var month = currentDate.getMonth();
     var date = currentDate.getDate();
        var day = currentDate.getDay();

        var months = new Array(12);
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        month = months[month];

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thur";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        day = weekday[day];
        var dateDiv = document.getElementById('date');
        var dayDiv = document.getElementById('day');

        dateDiv.innerText = month + " " + date + ", " + (year + 1900);
        dayDiv.innerText = day;
    }


    displayTime();
    displayDate();

    setInterval(displayTime, 1000);

});
