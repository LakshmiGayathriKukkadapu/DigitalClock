function getCurrentTime() {

    var date = new Date(); /**get current date time **/

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();
    var midDay = "AM";

    midDay = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    month = parseInt(month) + 1;
    month = (month < 10) ? ("0" + month) : month;
    min = (min < 10) ? ("0" + min) : min;
    hour = (hour < 10) ? ("0" + hour) : hour;
    document.getElementById("digitalClock").innerHTML
        = date1 + "/" + month +"/" + year+" "+
        hour + " : " + min + " : " + sec + " " + midDay;

    var t = setTimeout(function () {
        getCurrentTime()
    }, 1000);

}
getCurrentTime();