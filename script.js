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

    // save
    var save = []; /* blank array for multiple data */
    var savePoint = JSON.parse(localStorage.getItem("savePoint"));

    /* activity 4.28 */
    if (savePoint !== null) {/* excluding empty */
        save = savePoint;
    }

    // buttons
    $(".btn").each(function() { /* $(selector).each(function(index,element)) */
        for (var i = 0; i < save.length; i++) {
            if($(this).attr("saveBtn") === save[i].location) {
                $(this).parent().prev().val(save[i].input);
            }
        }
    });

    $(".btn").on("click",function() { /* click not onclick...*/ 
        var savedWords = $(this).parent().prev().val();
        var wordsLocation = $(this).attr("saveBtn");
        if (savedWords === "") { /* inserting from empty to string*/
            console.log(savedWords);
            return;
        }

        var savedInfo = {
            location: wordsLocation,
            input: savedWords
            
        };

        save.push(savedInfo);
        localStorage.setItem("savePoint", JSON.stringify(save));

    });
});