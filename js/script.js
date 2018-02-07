$(function(){
  var carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000);

  function changeSlide(){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }

  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  function moveLastSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft: 0});
  }

  //Arrows to changeSlide
  var leftArrow = $('#btn-left');
  var rightArrow = $('#btn-right');
  leftArrow.click(function() {
    carouselList.animate({'marginLeft':400}, 500, moveLastSlide);
  });
  rightArrow.click(function() {
    changeSlide();
  });
});
