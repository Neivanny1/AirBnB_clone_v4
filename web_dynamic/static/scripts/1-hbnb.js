$(document).ready(function(){

/**
 listen for changes on each input checkbox tag:
    if the checkbox is checked, store the Amenity ID in a variable (dictionary or list)
    if the checkbox is unchecked, remove the Amenity ID from the variable
update the h4 tag inside the div Amenities with the list of Amenities checked
 * */
    let selectedAmenities = []; // an empty list to store our names
    $("input[type=checkbox]").change(function(){
        let name = $(this).attr('data-name'); // variabel to hold the name of our checkbox
        //carry out actions depending on the check state
        if ($(this).change(":checked")){
            selectectedAmenities.push(name) // store the name in the array if its checked

        } else {
            const updatedAmenities = selectectedAmenities.filter(amenity => amenity !== name);

            selectectedAmenities = updatedAmenities;
        }
        $('.amenities h4').text(selectedAmenities.join(', '));
    });
});
