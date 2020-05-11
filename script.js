$(document).ready(function () { /* adding this makes sure javascript fully checked/ran before executing */

    // adding date under heading
    $("#currentDay").text(moment().format("YYYY MMMM Do")); /* moment website / document was painfully long*/ 

    // check what moment spits out and is working
    console.log(moment());
    console.log(typeof(moment()));

    var clock;
    var currentTime = moment();
    var currentHour = moment().hour(); /* time changes so should be var*/
    var currentMin = moment().minutes(); 
    console.log(currentHour); /* tells current hour */
    console.log(currentMin); /* tells current minutes */

    // color code timeblocks
	$(".time-block").each(function() {
	  
        // var currentTime = moment().hours();
        var hourBlock = parseInt($(this).attr("id"));
  
        if (currentHour > hourBlock) { /* odd that after $ classes needs . but after addClass, it does not need . */
          $(".description").addClass("past"); 
        } else if (currentHour === hourBlock) {
          $(".description").addClass("present");
        } else {
          $(".description").addClass("future");
        }
  
      })

    // save buttons
    //   $(".saveBtn").click(function() { /* click not onclick */
    //     var timeArea = $(this).parent().attr("id");
    //     var enteredText = $(this).siblings(".description").val();
    //     localStorage.setItem("timeArea", "enteredText"); /* in between parenthesis is name/key and its value */

    //   })

    // localStorage.setItem(, JSON.stringify(events));
});