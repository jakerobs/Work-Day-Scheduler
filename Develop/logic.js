$(document).ready(function() {
    $("#currentDay").text(moment().format("llll"));
    $(".btn").click(function() {
    var description = $(this).siblings(".description").val();
    var rowId = $(this).parent().attr("id");
    localStorage.setItem(rowId, description);
    console.log(rowId);
    console.log(description);
    });

    function rowColors() {
        var now = moment().hours();
        console.log(now);

        $(".time-block").each(function() {
            var getTime = parseInt($(this).attr("id").split("-")[1]);
            console.log(typeof(getTime));

            if (now < getTime) {
                $(this).addClass("past");
                console.log("Correct");
            } else if (getTime === now) {
                $(this).removeClass("past")
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            setInterval(rowColors, 1000);
        })
    }
    rowColors();
    $("#row-8am .description").val(localStorage.getItem("row-8am"));
    $("#row-9am .description").val(localStorage.getItem("row-9am"));
    $("#row-10am .description").val(localStorage.getItem("row-10am"));
    $("#row-11am .description").val(localStorage.getItem("row-11am"));
    $("#row-12pm .description").val(localStorage.getItem("row-12pm"));
    $("#row-1pm .description").val(localStorage.getItem("row-1pm"));
    $("#row-2pm .description").val(localStorage.getItem("row-2pm"));
    $("#row-3pm .description").val(localStorage.getItem("row-3pm"));
    $("#row-4pm .description").val(localStorage.getItem("row-4pm"));
    $("#row-5pm .description").val(localStorage.getItem("row-5pm"));
    $("#row-6pm .description").val(localStorage.getItem("row-6pm"));
    $("#row-7pm .description").val(localStorage.getItem("row-7pm"));
    $("#row-8pm .description").val(localStorage.getItem("row-8pm"));
    $("#row-9pm .description").val(localStorage.getItem("row-9pm"));
})




