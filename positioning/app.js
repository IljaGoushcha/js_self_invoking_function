function hideHotSpots() {
  console.log("hi");
  $('#hotspot-1-message').hide();
}
function openHotSpot() {
  console.log("hi");
  $('#hotspot-1-message').show();
}

jQuery(document).ready(function() {
  hideHotSpots();
  $('#hotspot-1').on('mouseenter', openHotSpot);
  $('#hotspot-1').on('mouseleave', hideHotSpots);
});
