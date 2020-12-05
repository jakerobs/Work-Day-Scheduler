$(document).ready(function() {
    $(".btn").click(function() {
    var description = $(this).siblings(".description").val();
    var rowId = $(this).parent().attr("id");
    localStorage.setItem(rowId, description);
    console.log(rowId);
    console.log(description);
    });

    
})




