$( document ).ready(function() {

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $('.ui.sidebar').sidebar();
  $('.ui.accordion').accordion();
  $('.ui.accordion').accordion({exclusive:false})
  $('.ui.dropdown').dropdown();
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
    console.log('inside sticky start');
    $('#miniLogo').show("slow");
    $('#slider').animate({
      width: $('#secondMenu').width()
    },400);
  });

  $("#secondMenu").on('sticky-end', function(){
    $('#miniLogo').hide("slow");
    $('#slider').animate({
      width: 0
    },400);
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

  $('#photoSlider').css('visibility','visible');
  $('.bxslider').bxSlider();

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

function itemModal(itemName){
  $('#itemModal').modal({blurring: true}).modal('show');
  $('#testItem').text(itemName);
}



function signIn(){
  console.log("in the sign in function");
  var email = document.getElementsByName('email')[0].value;
  var password = document.getElementsByName('password')[0].value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

    }
  }

  xhttp.open("post", "/login", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send('email='+email+'&password='+password);
}

function addToCart(){
  $('#shoppingCart').sidebar('toggle');
  $('#itemHeader').text('Pyramid ring');
  $('#itemMaker').text('Perez Bitan');
  $('#itemPrice').text('150.99$');
  $('#cartQuantity').text('1');
}

function checkout(){
  $('#paymentModal').modal({blurring: false}).modal('show');
}
