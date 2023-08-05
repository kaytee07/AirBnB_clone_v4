$(document).ready(function() {
    const checkedBoxes = {};
 
    function updateAmenities() {
	let listOfAmenities = Object.values(checkedBoxes);
	$(".amenities h4").text("" + listOfAmenities.join(", "))
	console.log($(".amenities h4")[0])
    }
    

    $("input[type='checkbox']").change(function() {
	if ($(this).prop("checked")) {
	    checkedBoxes[$(this).data("id")] = $(this).data("name")
	} else {
	    if (checkedBoxes[$(this).data("id")]) {
		delete checkedBoxes[$(this).data("id")]
	    }
	}
    })

    console.log("dog")

    updateAmenities()

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }

  });
})

