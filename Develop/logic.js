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
})




