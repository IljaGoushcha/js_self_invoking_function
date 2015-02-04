function hideHotSpots() {
  $('#hotspot-1-message').hide();
  $('#hotspot-2-message').hide();
}
function hideHotSpot() {
  console.log(this);
  $(this).children().hide(500);
}
function openHotSpot() {
  console.log(this);
  $(this).children().show(500);
}

jQuery(document).ready(function() {
  hideHotSpots();
  $('#hotspot-1').on('mouseenter', openHotSpot);
  $('#hotspot-1').on('mouseleave', hideHotSpot);
  $('#hotspot-2').on('mouseenter', openHotSpot);
  $('#hotspot-2').on('mouseleave', hideHotSpot);
});
