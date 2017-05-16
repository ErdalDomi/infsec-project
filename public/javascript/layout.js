$( document ).ready(function() {

  $('.ui.sidebar').sidebar();

  $('.ui.modal').modal({
    onShow : function(){
      $('body').css('overflow', 'hidden');
    },
    onHidden : function(){
      $('body').css('overflow', 'initial');
    }
  });

  $('.ui.sidebar').sidebar({
    onShow : function(){
      $('body').css('overflow', 'hidden');
    },
    onHidden : function(){
      $('body').css('overflow', 'initial');
    }
  });

  $('#miniLogo').hide();

  $("#secondMenu").sticky({ topSpacing: 42 });

  $("#secondMenu").on('sticky-start', function(){
    $('#miniLogo').show("slow");
    $('#slider').animate({
      width: $('#secondMenu').width()
    },400);
    // $('.test').addClass("vertical");
    // $('.test').removeClass("horizontal");
    //$('.test').removeClass("center");
  });

  $("#secondMenu").on('sticky-end', function(){
    $('#miniLogo').hide("slow");
    $('#slider').animate({
      width: 0
    },400);
    // $('.test').addClass("horizontal");
    // $('.test').removeClass("vertical");
    //$('.test').addClass("center");
  });


  $('.ui.form')
  .form({
    fields: {
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your e-mail'
          },
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your password'
          },
          {
            type   : 'length[6]',
            prompt : 'Your password must be at least 6 characters'
          }
        ]
      }
    }
  });

});

function showSignInModal(){
  $('#loginModal').modal({
      blurring: true
    }).modal('show');
}

function showRegisterModal(){
  $('#registerModal')
    .modal({
      blurring: true
    })
    .modal('show')
  ;
}
