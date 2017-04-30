$( document ).ready(function() {
  $('.ui.sidebar').sidebar();
  $('.ui.dropdown').dropdown();
  $('.shape').shape();
  console.log("ready to go!");
});


function showSideBar(){
  $('.ui.sidebar').sidebar('toggle');
}

function flip(){
  $('.shape').shape('flip right');
}
