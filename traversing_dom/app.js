jQuery(document).ready(function() {
  var message = "<p>1-888-9090</p>";
  $('button').on('click', function() {
    console.log($(this));
    $(this).closest('.tour').append(message);
    $(this).remove();
  });

});
