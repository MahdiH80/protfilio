"use strict";

var buttons = document.querySelectorAll(".button");
var icons = document.querySelectorAll('.iconbtn');
var section = document.querySelectorAll("section"); // ===---===---

var images = document.querySelector(".gallery");
var video = document.querySelector('.video');
var login = document.querySelector(".login");
var map = document.querySelector(".map");
window.addEventListener('load', function () {
  // loading
  var loader = document.querySelector('.load');
  loader.classList += ' hidden'; // clock

  setInterval(function () {
    var d = new Date();
    document.getElementById('hour').textContent = d.getHours() + 1 + ' :';
    document.getElementById('min').textContent = d.getMinutes() + ' :';
    document.getElementById('sec').textContent = d.getSeconds();
  }, 1000); // extra

  setInterval(function () {
    a = Math.floor(Math.random() * 40);
    setTimeout(function () {
      document.querySelector('.extras').style.opacity = 0;
    }, 100);
    document.querySelector('.extras').style.opacity = 1;
    document.querySelector('.extras').style.top = a + 'rem';
  }, 500);
});
buttons.forEach(function (e) {
  e.addEventListener("click", function () {
    //---------------btns---------------------------------
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.visibility = "hidden";
    }

    ;
    e.querySelector(".iconbtn").style.visibility = "visible"; //----------------dis---------------------------------

    for (var k = 0; k < section.length; k++) {
      section[k].style.display = "none";
    }

    var scrollb = document.querySelector('.scroll-bar');
    var s = e.querySelector("button").textContent;

    if (s == "Login") {
      login.style.display = "flex";
      what_is_ac = login;
      scrollb.style.width = "0%";
    }

    if (s == "Map") {
      map.style.display = "block";
      what_is_ac = map;
      scrollb.style.width = "0%";
      scroll;
    }

    if (s == "Picture") {
      images.style.display = "flex";
      what_is_ac = images;
      scrollb.style.width = "0%";
    }

    if (s == "Video") {
      video.style.display = "grid";
      what_is_ac = video;
      scrollb.style.width = "0%";
    }

    document.getElementById("headname").textContent = s;
    what_is_ac.addEventListener('scroll', function () {
      var winScroll = what_is_ac.scrollTop;
      var height = what_is_ac.scrollHeight - what_is_ac.offsetHeight;
      var scroll = winScroll / height * 72;
      scrollb.style.width = "".concat(scroll, "%");
    });
  });
});
video.addEventListener('click', function (e) {
  var click = e.target;

  if (click.classList == 'btn close') {
    click.parentElement.classList.remove('fullscreen');
  }

  if (click.classList == 'btn full') {
    click.parentElement.classList.add('fullscreen');
  }
});
images.addEventListener("drag", function (e) {
  e.preventDefault();
  console.log(e);
  x = e.clientX - e.clientX;
  console.log('e.clientX', e.clientX);
  console.log('e.pageX', e.pageX);
  console.log('e.screenX', e.screenX);
  console.log('e.offsetX', e.offsetX);
  console.log('---------------');
  console.log(x);
  console.log('---------------');
  images.style.transform = "translateX(".concat(x, "px)");
});