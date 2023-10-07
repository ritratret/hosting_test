/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*function open_popup(url) {

	var img = new Image();
	img.src = url;
	var img_width = img.width;
	var win_width = img.width+25;
	var height = img.height+30;

	var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+height+', menubars=no, scrollbars=auto');
  	OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
}*/

/*$(function(){
  // 변수 선언
  var imageButton = $('.item-box .item-img a');
  var popup = $('.img-popup');
  var closeButton = popup.find('> .popup-inner > .close-btn');
  var htmlAndBody = $('html, body');
  var focusTarget;

  // 팝업 생성
  imageButton.on('click', function(e){
    e.preventDefault();
    var popupImg = popup.find('> .popup-inner > img');
    var image = $(this).find('> img');
    var src = image.attr('src');
    var alt = image.attr('alt');
    focusTarget = $(this);
    popupImg.attr('src', src).attr('alt', alt);
    createPopup();
  });

  // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
  popup.find('> .popup-inner').on('click', function(e){
    e.stopPropagation();
  })

  // 팝업 생성 함수
  function createPopup(){
    popup.addClass('active');
    htmlAndBody.css('overflow-y', 'hidden');
    setTimeout(function(){
      closeButton.focus();
    }, 50);
  }
  // 팝업 제거 함수
  function removePopup(){
    popup.removeClass('active');
    focusTarget.focus();
    htmlAndBody.css('overflow-y', 'visible');
  }
})*/


