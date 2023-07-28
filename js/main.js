//--------------------nav-------------------//

$('.tit .btn').click(function (e) {
   e.preventDefault();
   // $('.nav').fadeIn();
   // $('.nav').slideDown();
   $('.nav').slideToggle();
   $('.tit .btn').toggleClass("open");
   if ($('.tit .btn').hasClass("open")) {
      /* A.attr(B) //A요소안에 있는 속성 B를 가져와라
         A.attr(B,C) //A요소안에 있는 속성 B를 C로 바꾸어라 */

      $('.tit .btn').find('i').attr("class", "fas fa-caret-up")
   } else {
      $('.tit .btn').find('i').attr("class", "fas fa-caret-down")
   }
})


//slick

$('.slider').slick({
   dots: true,
});

//light Gallary

lightGallery(document.getElementById('lightgallery'), {
   plugins: [lgThumbnail],

});