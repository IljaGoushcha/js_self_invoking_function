jQuery(document).ready(function() {
  var message = "<p>1-888-9090</p>";
  $('.tour').on('click', function() {
    $(this).append(message);
    $(this).find('button').remove();
    $(this).find('div').remove();
  });

});
