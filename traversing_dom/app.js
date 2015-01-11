jQuery(document).ready(function() {
  var message = "<p>1-888-9090</p>";
  $('.tour').on('click', function() {
    $(this).find('h2').before('<h2>hi</h2>');
    $(this).append(message);
    $(this).find('button').remove();
    $(this).find('div').remove();
  });

});
