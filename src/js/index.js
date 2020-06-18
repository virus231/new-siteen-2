import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$(document).ready(function() {
  $('.nav-toggle').click(function() {
    var collapse_content_selector = $(this).attr('href');
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function() {
      if ($(this).css('display') == 'none') {
        toggle_switch.html('View More');
      } else {
        toggle_switch.html('View Less');
      }
    });
  });
});
// Your jQuery code
