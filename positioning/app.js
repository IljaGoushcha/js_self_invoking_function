function hideHotSpot1() {
  console.log("hi");
  $('#hotspot-1-message').hide();
}
function openHotSpot1() {
  console.log("hi");
  $('#hotspot-1-message').show();
}
function hideHotSpot2() {
  console.log("hi");
  $('#hotspot-2-message').hide();
}
function openHotSpot2() {
  console.log("hi");
  $('#hotspot-2-message').show();
}

jQuery(document).ready(function() {
  hideHotSpot1();
  hideHotSpot2();
  $('#hotspot-1').on('mouseenter', openHotSpot1);
  $('#hotspot-1').on('mouseleave', hideHotSpot1);
  $('#hotspot-2').on('mouseenter', openHotSpot2);
  $('#hotspot-2').on('mouseleave', hideHotSpot2);
});
