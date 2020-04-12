var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});

// load any saved data from localStorage 

// 9am
$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */));

// 10am
$("#10am-row .description").val(localStorage.getItem("#10am-row" /* localStorage KEY also the row id */));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row" /* localStorage KEY also the row id */));

// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" /* localStorage KEY also the row id */));

// 1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row" /* localStorage KEY also the row id */));

// 2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row" /* localStorage KEY also the row id */));

// 3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row" /* localStorage KEY also the row id */));

// 4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row" /* localStorage KEY also the row id */));

// 5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row" /* localStorage KEY also the row id */));