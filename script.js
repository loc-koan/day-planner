$(document).ready(function () { /* adding this makes sure javascript fully checked/ran before executing */

  // adding date under heading
  $("#currentDay").text(moment().format("YYYY MMMM Do")); /* moment website / document was painfully long*/ 

  // check what moment spits out and is working
  console.log(moment());
  console.log(typeof(moment()));
  
  var currentTime = moment().hour(); /* time changes so should be var*/
  console.log(currentTime); /* tells current hour */

  // color code timeblocks
  
//   function timeReview () {
//     if(currentTime.isBefore(currentTime)){
//       xxxxx.attr("class", "past");
//     } else if (xxxx === currentHour) {
//       xxxxx.attr("class", "present");
//     } else (xxxxx.isAfter(xxxxx)) {
//       xxxxx.attr("class", "future");
//     }
//   }
//   timeReview(); /* runs function */

  // save buttons
//   $(".saveBtn").click(function() { /* click not onclick */
//     var timeArea = $(this).parent().attr("id");
//     var enteredText = $(this).siblings(".description").val();
//     localStorage.setItem("timeArea", "enteredText"); /* in between parenthesis is name/key and its value */

//   })

  // localStorage.setItem(, JSON.stringify(events));
});