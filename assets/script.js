$(".list-group").on("click", "p", function(){
    var text = $(this)
    .text()
    .trim();
    console.log("p was clicked");
})

var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

$(this).replaceWith(textInput);



// createEvent() 

// // save tasks 
// events.toDO.push({
//     text: eventText,
//     time: eventTime 
// })

// // save events to local storage 
// var saveEvents = function () {
//     localStorage.setItem("events", JSON.stringify(events));
// };

// // load events 
// var loadEvents = function () {
//     events = JSON.parse(localStorage.getItem(evetns));
// };