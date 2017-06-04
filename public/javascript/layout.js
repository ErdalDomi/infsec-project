$( document ).ready(function() {


  $('.special.cards .image').dimmer({
    on: 'hover'
  });


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

  // $('.ui.sidebar').sidebar({
  //   onShow : function(){
  //     $('body').css('overflow', 'hidden');
  //   },
  //   onHidden : function(){
  //     $('body').css('overflow', 'initial');
  //   }
  // });

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

  // $('.ui.sidebar').module({selector: {ommited: '.dimmer'}}).sidebar();
  $.fn.modal.settings.context = '#container';
  //$.fn.sidebar.settings.context ='#shoppingCart';
});

function showSidebar(){
  $('.ui.sidebar').sidebar({
    onShow : function(){
      $('body').css('overflow', 'hidden');
    },
    onHidden : function(){
      $('body').css('overflow', 'initial');
    }
  });
  $('#shoppingCart').sidebar('toggle');
}


function showSignInModal(){
  $('#loginModal').modal('show');
}

function showRegisterModal(){
  $('#registerModal')
    // .modal({
    //   blurring: true
    // })
    .modal('show')
  ;
}

function itemModal(itemName){
  $('#itemModal').modal('show');
  $('#testItem').text(itemName);
}



function logIn(){

  console.log("in the log in function");
  var email = document.getElementsByName('email')[0].value;
  var password = document.getElementsByName('password')[0].value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      if(this.responseText === 'ok'){
        document.getElementsByName('email')[0].value='';
        document.getElementsByName('password')[0].value='';
        $('#loginModal').modal('hide');
      }
      console.log("server said: " + this.responseText);
    }
  }

  xhttp.open("post", "/login", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send('email='+email+'&password='+password);
}

function signUp(){

  var xhttp = new XMLHttpRequest();
  var regEmail = document.getElementsByName('regEmail')[0].value;
  var regPassword = document.getElementsByName('regPassword')[0].value;
  var regPasswordConfirm = document.getElementsByName('regPasswordConfirm')[0].value;

  if(regPassword == regPasswordConfirm){
    xhttp.open("post", "/signup", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send('email='+regEmail+'&password='+regPassword);
  }else{
    console.log("passwords don't match");
  }


  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log("server said: " + this.responseText);
      if(this.responseText === 'ok'){
        document.getElementsByName('regEmail')[0].value = '';
        document.getElementsByName('regPassword')[0].value = '';
        //... and the other input field (confirm password)
        $('#registerModal').modal('hide');
        //give user a thhumbs
      }

    }
  }

}

function addToCart(){
  //$('#shoppingCart').first().sidebar('attach events', '#bagButton');
  //$('#bagButton').removeClass('disabled');
  $('#shoppingCart').sidebar('show');
  $('#itemModal').modal('hide');
  $('#itemHeader').text('Skeleton ring');
  $('#itemMaker').text('Louise Collection');
  $('#itemPrice').text('250.00$');
  $('#cartQuantity').text('1');
}

function checkout(){
  $('#paymentModal').modal('show');
}
