jq$ = jQuery.noConflict();

jq$('.form .section:first-child').show().siblings().hide();


jq$('.form .section button').click(function(e){
  const hasNext = jq$(this).parents('.section').next('.section').length;
  if (hasNext > 0) {
    jq$(this).parents('.section').hide().next('.section').show();
  }
})


jq$('.form .section .back').click(function (e) {
  const hasPrevious = jq$(this).parents('.section').prev('.section').length;
  if (hasPrevious > 0){
    jq$(this).parents('.section').hide().prev('.section').show();
  }
})