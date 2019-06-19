$('.form .section:first-child').show().siblings().hide(); // hide all sections except first section

$('.form .section button').click(function(e){ // add click event to 'Next' button
  const hasNext = $(this).parents('.section').next('.section').length; // check if the active element has a next sibling
  
  if (hasNext > 0) {
    $(this).parents('.section').hide().next('.section').show(); // hide this element and show the next element 
  }
});

$('.form .section .back').click(function (e) { // add click event to 'Back' link
  const hasPrevious = $(this).parents('.section').prev('.section').length; // check if the active element has a previous sibling
  
  if (hasPrevious > 0){
    jq$(this).parents('.section').hide().prev('.section').show(); // hide this element and show the previous slement
  }
});
