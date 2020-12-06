$(document).ready(function() {
    // Save Local Storage
    $("#currentDay").text(moment().format("llll"));
    $(".btn").click(function() {
        var description = $(this).siblings(".description").val();
        var rowId = $(this).parent().attr("id");
        localStorage.setItem(rowId, description);
    });

    //Set row colors based on time
    function rowColors() {
        var now = moment().hours();
        console.log(now)

        $(".time-block").each(function () {
            var getTime = parseInt($(this).attr("id").split("-")[1]);
            console.log(getTime)

            if (now > getTime) {
                $('textarea', this).addClass("past");
                console.log("Correct");
            } else if (getTime === now) {
                $('textarea', this).removeClass("past")
                $('textarea', this).addClass("present");
            } else {
                $('textarea', this).removeClass("past");
                $('textarea', this).removeClass("present");
                $('textarea', this).addClass("future");
            }
        });
    }
    rowColors();

    // Retrieve local storage
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




