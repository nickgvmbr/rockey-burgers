$(document).ready(() => {

  // about
  $('#about-cta').click(() => {
    $('#about-more').toggle();
  });

  // faq - why
  $('#whyburger-cta').click(() => {
    $('#whyburger-more').toggle();
  });

  // faq - where
  $('#wherebeef-cta').click(() => {
    $('#wherebeef-more').toggle();
  });


  $('#sub-open').click(() => {
    $('#sub').css('display', 'flex');
    window.scrollTo(0, 0);
    $('body').css('overflow', 'hidden');
  });
  $('#sub-close').click(() => {
    $('#sub').css('display', 'none');
    window.scrollTo(0, 10000);
    $('body').css('overflow', 'auto');
  });

  $('#work-open').click(() => {
    $('#work').css('display', 'flex');
    window.scrollTo(0, 0);
    $('body').css('overflow', 'hidden');
  });
  $('#work-close').click(() => {
    $('#work').css('display', 'none');
    window.scrollTo(0, 10000);
    $('body').css('overflow', 'auto');
  });
  
  
  
});