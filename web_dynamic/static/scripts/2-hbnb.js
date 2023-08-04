$(document).ready(function() {
    const checkedBoxes = {};
 
    function updateAmenities() {
	let listOfAmenities = Object.values(checkedBoxes);
	$(".amenities h4").text("" + listOfAmenities.join(", "))
	console.log($(".amenities h4")[0])
    }
    updateAmenities()

    $("input[type='checkbox']").change(function() {
	if ($(this).prop("checked")) {
	    checkedBoxes[$(this).data("id")] = $(this).data("name")
	} else {
	    if (checkedBoxes[$(this).data("id")]) {
		delete checkedBoxes[$(this).data("id")]
	    }
	}
    })
})

