$( document ).ready(function() {
  $('.ui.sidebar').sidebar();
  $('.ui.dropdown').dropdown();
  $('.ui.modal').modal();
  $('.shape').shape();

  $('.special.cards .image').dimmer({
    on: 'hover'
  });
  console.log("ready to go!");

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


function showSideBar(){
  $('.ui.sidebar').sidebar('toggle');
}

function flip(){
  $('.shape').shape('flip right');
}

function showSignInModal(){
  $('#loginModal')
    .modal({
      blurring: true
    })
    .modal('show')
  ;
}

function showContactModal(){
  $('#contactModal')
    .modal({
      blurring: true
    })
    .modal('show')
  ;
}

function showRegisterModal(){
  $('#registerModal')
    .modal({
      blurring: true
    })
    .modal('show')
  ;
}


//

object = {firstName: {givenName: "Erdal", nickName: "Erdau"}, lastName:"Domi"}
