function openMenu() {
  console.log("open");
  $('.h1').show(500);
};

function hideMenu() {
  console.log("hide");
  $('.h1').hide();
};

jQuery(document).ready(function() {
  var message = "<p>1-888-9090</p>";
  $('.tour').on('click', function() {
    $(this).find('h2').before('<h2>hi</h2>');
    $(this).append(message);
    $(this).find('button').remove();
    $(this).find('div').remove();
  });
  hideMenu();
  $('button').on('mouseenter', openMenu);
  $('button').on('mouseleave', hideMenu);

});
